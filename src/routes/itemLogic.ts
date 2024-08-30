import { Item, Review, Tag } from './../utils/types';
import { db } from '../utils/db';
import { emptyOrRows, getOffset } from './utils';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { log } from 'console';

export async function getItems(page = 1, order = 'ASC', numberPrPage = 10) {
  const [totalResult] = await db.query<Item[]>(`SELECT COUNT(*) FROM items`);
  const total = totalResult[0]['COUNT(*)'];
  const offset = getOffset(page, numberPrPage);
  const [result] = await db.query(`SELECT * FROM items ORDER BY items.itemId ${order} LIMIT ${offset},${numberPrPage}`);
  const items = emptyOrRows(result);
  const meta = { page, total };
  return {
    items,
    meta,
  };
}

export async function getItemById(id: number): Promise<Item> {
  const [result] = await db.query<Item[]>('SELECT * FROM items WHERE items.itemId = ?', [id]);
  return result[0];
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
  const result = await db.query<ResultSetHeader>(
    `UPDATE items SET
      title = '${item.title}', 
      WHERE itemId = ${id};`
  );
  console.log('Updated item with title: ' + item.title + ' with id: ' + id);
};

export const deleteItem = async (id: number) => {
  const result = await db.query<ResultSetHeader>(`DELETE FROM items WHERE itemId = ${id};`);
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
  console.log(`Prøvber å lagre tag med id: ${tagId}(${tag}) for item with id: ${itemId}`);
  const [result] = await db.query<RowDataPacket[]>(
    'SELECT * FROM item_tag WHERE item_tag.tagId = ? AND item_tag.itemId = ?',
    [tagId, itemId]
  );
  if (result[0]) {
    console.log(`Item (${itemId}) har allerede tag (${tag}) `);
  } else {
    const insertResult = await db.query<ResultSetHeader>(`INSERT INTO item_tag
      (itemId, tagId) 
      VALUES (
        '${itemId}',
        '${tagId}'
      );`);
    console.log(`Added tag with id: ${tagId}(${tag}) for item with id: ${itemId}`);
  }
};

// export const deleteTagFromItem = async (itemId: number, tag: string) => {
//   const result = await db.query<ResultSetHeader>(`DELETE FROM item_tag WHERE itemId = ${itemId};`);
//   console.log('Deleted tags from item with id: ' + itemId);
// };

export const deleteAllTagsFromItem = async (itemId: number) => {
  const result = await db.query<ResultSetHeader>(`DELETE FROM item_tag WHERE itemId = ${itemId};`);
  console.log('Deleted tags from item with id: ' + itemId);
};

export const addReviewToItem = async (itemId: number, review: Review) => {
  const sqlStatement = `INSERT INTO reviews
  (itemId, comment, user, rating)
  VALUES (
    '${itemId}',
    '${review.comment ?? ''}',
    '${review.user ?? ''}',
    '${review.rating}'
  );`;
  const result = await db.query(sqlStatement);
  console.log('Added rating from : ' + review.user + ' for item with id: ' + itemId);
};

// export const addNewItemImage = async (itemId: number, review: Review) => {
//   console.log('TO BE IMPLEMENTED');
// };
