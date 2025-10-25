import { Item, Review, Tag, TagWithUsageCount } from '../utils/types';
import { db } from '../utils/db';
import { emptyOrRows, getOffset } from './utils';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export async function getItems(page = 1, order = 'ASC', numberPrPage = 10) {
  const [totalResult] = await db.query<Item[]>(`SELECT COUNT(*) FROM items`);
  const total = totalResult[0]['COUNT(*)'];
  const offset = getOffset(page, numberPrPage);
  const [result] = await db.query(`SELECT * FROM items ORDER BY items.itemId ${order} LIMIT ${offset},${numberPrPage}`);
  const items = emptyOrRows(result);

  // Get all itemIds from the current page
  const itemIds = items.map((item: any) => item.itemId);
  let tagsByItemId: Record<number, Tag[]> = {};
  if (itemIds.length > 0) {
    // Fetch all tags for these items in one query
    const [tagsResult] = await db.query<RowDataPacket[]>(
      `SELECT item_tag.itemId, tags.tagId, tags.tag FROM item_tag 
        INNER JOIN tags ON tags.tagId = item_tag.tagId
        WHERE item_tag.itemId IN (${itemIds.join(',')})`
    );
    console.log(tagsResult);
    // Group tags by itemId
    tagsByItemId = tagsResult.reduce((acc: any, row: any) => {
      if (!acc[row.itemId]) acc[row.itemId] = [];
      acc[row.itemId].push({ tagId: row.tagId, tag: row.tag });
      return acc;
    }, {});
    console.log(tagsByItemId);
  }

  // Attach tags to each item
  const itemsWithTags = items.map((item: any) => ({
    ...item,
    tags: tagsByItemId[item.itemId] || [],
  }));

  const meta = { page, total };
  return {
    items: itemsWithTags,
    meta,
  };
}

export async function searchItems(searchQuery: string, page = 1, order = 'ASC', numberPrPage = 10) {
  const searchTerm = `%${searchQuery}%`;

  // Get total count of matching items (by title OR by tags)
  const [totalResult] = await db.query<RowDataPacket[]>(
    `
    SELECT COUNT(DISTINCT items.itemId) as count 
    FROM items 
    LEFT JOIN item_tag ON items.itemId = item_tag.itemId
    LEFT JOIN tags ON item_tag.tagId = tags.tagId
    WHERE items.title LIKE ? OR tags.tag LIKE ?
  `,
    [searchTerm, searchTerm]
  );
  const total = totalResult[0].count;

  const offset = getOffset(page, numberPrPage);

  // Get paginated search results (by title OR by tags)
  const [result] = await db.query<RowDataPacket[]>(
    `SELECT DISTINCT items.* 
     FROM items 
     LEFT JOIN item_tag ON items.itemId = item_tag.itemId
     LEFT JOIN tags ON item_tag.tagId = tags.tagId
     WHERE items.title LIKE ? OR tags.tag LIKE ?
     ORDER BY items.itemId ${order} 
     LIMIT ${offset},${numberPrPage}`,
    [searchTerm, searchTerm]
  );
  const items = emptyOrRows(result);

  // Get all itemIds from the current page
  const itemIds = items.map((item: any) => item.itemId);
  let tagsByItemId: Record<number, Tag[]> = {};
  if (itemIds.length > 0) {
    // Fetch all tags for these items in one query
    const [tagsResult] = await db.query<RowDataPacket[]>(
      `SELECT item_tag.itemId, tags.tagId, tags.tag FROM item_tag 
        INNER JOIN tags ON tags.tagId = item_tag.tagId
        WHERE item_tag.itemId IN (${itemIds.join(',')})`
    );
    console.log(tagsResult);
    // Group tags by itemId
    tagsByItemId = tagsResult.reduce((acc: any, row: any) => {
      if (!acc[row.itemId]) acc[row.itemId] = [];
      acc[row.itemId].push({ tagId: row.tagId, tag: row.tag });
      return acc;
    }, {});
    console.log(tagsByItemId);
  }

  // Attach tags to each item
  const itemsWithTags = items.map((item: any) => ({
    ...item,
    tags: tagsByItemId[item.itemId] || [],
  }));

  const meta = { page, total };
  return {
    items: itemsWithTags,
    meta,
  };
}

export async function getItemById(id: number): Promise<Item> {
  const [result] = await db.query<Item[]>('SELECT * FROM items WHERE items.itemId = ?', [id]);
  return result[0];
}

export async function getAllTags(): Promise<TagWithUsageCount[]> {
  const [result] = await db.query<TagWithUsageCount[]>(`
    SELECT tags.tagId, tags.tag, COUNT(item_tag.itemId) as usageCount
    FROM tags 
    LEFT JOIN item_tag ON tags.tagId = item_tag.tagId
    GROUP BY tags.tagId, tags.tag
    ORDER BY tag ASC
  `);
  return result;
}

export async function getTagsByItemId(itemId: number): Promise<Tag[]> {
  const [result] = await db.query<Tag[]>(
    `SELECT tags.tagId, tags.tag FROM tags 
      INNER JOIN item_tag ON tags.tagId=item_tag.tagId
      WHERE item_tag.itemId = ?`,
    [itemId]
  );
  return result;
}

export async function getReviewsByItemId(id: number): Promise<Review[]> {
  const [result] = await db.query<Review[]>('SELECT * FROM reviews WHERE reviews.itemId =  ?', [id]);
  return result;
}

export async function getUserReviewForItem(itemId: number, userId: string): Promise<Review | null> {
  const [result] = await db.query<Review[]>('SELECT * FROM reviews WHERE reviews.itemId = ? AND reviews.user = ?', [
    itemId,
    userId,
  ]);
  return result[0] || null;
}

export const addItem = async (item: Item) => {
  const sqlStatement = `INSERT INTO items
  (title, creator, description) 
  VALUES (
    '${item.title}',
    '${item.creator ?? ''}',
    '${item.description ?? ''}'
  );`;
  const result = await db.query<ResultSetHeader>(sqlStatement);
  const insertedId = result[0].insertId;
  console.log('Added item with title: ' + item.title + ' with id: ' + insertedId);
  return insertedId;
};

export const updateItem = async (item: Item, id: number) => {
  await db.query<ResultSetHeader>(
    `UPDATE items SET
      title = '${item.title}', description = '${item.description}'
      WHERE itemId = ${id};`
  );
  console.log('Updated item with data: ' + item + ' with id: ' + id);
};

export const deleteItem = async (id: number) => {
  await db.query<ResultSetHeader>(`DELETE FROM items WHERE itemId = ${id};`);
  console.log('Deleted item with id: ' + id);
};

export const addTagToGlobalListIfNotExists = async (tag: string) => {
  if (tag.length > 0) {
    const [result] = await db.query<RowDataPacket[]>('SELECT * FROM tags WHERE tags.tag = ?', [tag]);
    if (result[0]) {
      console.log('Tag eksisterer allerede: ', result[0].tagId);
      return result[0].tagId;
    } else {
      const insertResult = await db.query<ResultSetHeader>(
        `INSERT INTO tags
      (tag) 
      VALUES (
        '${tag}'
      );`
      );
      const insertedId = insertResult[0].insertId;
      console.log('Added tag: ' + tag);
      return insertedId;
    }
  }
};

export const addTagToItemIfNotExist = async (itemId: number, tagId: number, tag: string) => {
  const [result] = await db.query<RowDataPacket[]>(
    'SELECT * FROM item_tag WHERE item_tag.tagId = ? AND item_tag.itemId = ?',
    [tagId, itemId]
  );
  if (result[0]) {
    console.log(`Item (${itemId}) har allerede tag (${tag}) `);
  } else {
    await db.query<ResultSetHeader>(`INSERT INTO item_tag
      (itemId, tagId) 
      VALUES (
        '${itemId}',
        '${tagId}'
      );`);
    console.log(`Added tag with id: ${tagId}(${tag}) for item with id: ${itemId}`);
  }
};

export const deleteAllTagsFromItem = async (itemId: number) => {
  await db.query<ResultSetHeader>(`DELETE FROM item_tag WHERE itemId = ${itemId};`);
  console.log('Deleted tags from item with id: ' + itemId);
};

export const setUsersReviewForItem = async (itemId: number, review: Review) => {
  await db.query(`DELETE FROM reviews WHERE itemId = ? AND user = ?;`, [itemId, review.user]);

  const insertSqlStatement = `INSERT INTO reviews
  (itemId, comment, user, userDisplayName, rating)
  VALUES (
    '${itemId}',
    '${review.comment ?? ''}',
    '${review.user ?? ''}',
    '${review.userDisplayName ?? ''}',
    '${review.rating}'
  );`;
  await db.query(insertSqlStatement);
  console.log('Added rating from : ' + review.user + ' for item with id: ' + itemId);

  // Calculate new averageRating and averageRatingCount
  const [reviews] = await db.query(`SELECT rating FROM reviews WHERE itemId = ?`, [itemId]);
  const ratings = Array.isArray(reviews) ? reviews.map((r: any) => r.rating).filter((r: any) => r !== null) : [];
  const averageRatingCount = ratings.length;
  let averageRating =
    averageRatingCount > 0 ? ratings.reduce((a: number, b: number) => a + b, 0) / averageRatingCount : null;
  // Round to 1 decimal
  averageRating = averageRating !== null ? Math.round(averageRating * 10) / 10 : null;

  // Update item with new values
  await db.query(`UPDATE items SET averageRating = ?, averageRatingCount = ? WHERE itemId = ?`, [
    averageRating,
    averageRatingCount,
    itemId,
  ]);
  console.log(
    'Updated item with new averageRating: ' + averageRating + ' and averageRatingCount: ' + averageRatingCount
  );
};

export const updateUserReviewForItem = async (itemId: number, review: Review) => {
  await db.query(
    `UPDATE reviews 
     SET comment = ?, rating = ?, userDisplayName = ? 
     WHERE itemId = ? AND user = ?`,
    [review.comment ?? '', review.rating, review.userDisplayName ?? '', itemId, review.user]
  );
  console.log('Updated review from: ' + review.user + ' for item with id: ' + itemId);

  // Calculate new averageRating and averageRatingCount
  const [reviews] = await db.query(`SELECT rating FROM reviews WHERE itemId = ?`, [itemId]);
  const ratings = Array.isArray(reviews) ? reviews.map((r: any) => r.rating).filter((r: any) => r !== null) : [];
  const averageRatingCount = ratings.length;
  let averageRating =
    averageRatingCount > 0 ? ratings.reduce((a: number, b: number) => a + b, 0) / averageRatingCount : null;
  // Round to 1 decimal
  averageRating = averageRating !== null ? Math.round(averageRating * 10) / 10 : null;

  // Update item with new values
  await db.query(`UPDATE items SET averageRating = ?, averageRatingCount = ? WHERE itemId = ?`, [
    averageRating,
    averageRatingCount,
    itemId,
  ]);
  console.log(
    'Updated item with new averageRating: ' + averageRating + ' and averageRatingCount: ' + averageRatingCount
  );
};

export const addNewItemImage = async (itemId: number, filename: string) => {
  const sqlStatement = `UPDATE items
  SET imageURL = '${filename ?? ''}'
  WHERE itemId = '${itemId}'
  `;
  const result = await db.query<ResultSetHeader>(sqlStatement);
  const insertedId = result[0].insertId;
  console.log('Image added with id: ', insertedId);
  return insertedId;
};
