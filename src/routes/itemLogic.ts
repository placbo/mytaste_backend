import { Item, Review, Tag } from './../utils/types';
import { db } from '../utils/db';
import { emptyOrRows, getOffset } from './utils';
import { ResultSetHeader } from 'mysql2';

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
  const result = await db.query<ResultSetHeader>(
    `INSERT INTO items
      (title, creator) 
      VALUES (
        '${item.title}',
        '${item.creator ?? ''}'
      );`
  );
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

export const addTagToItem = async (itemId: number, tag: string) => {
  const result = await db.query(
    `INSERT INTO tag
      (itemId, tag) 
      VALUES (
        '${itemId}',
        '${tag ?? ''}'
      );`
  );
  console.log('Added tag: ' + tag + ' for item with id: ' + itemId);
};

export const deleteTagFromItem = async (itemId: number, tag: string) => {
  const result = await db.query(
    `INSERT INTO tag
      (itemId, tag) 
      VALUES (
        '${itemId}',
        '${tag ?? ''}'
      );`
  );
  console.log('Added tag: ' + tag + ' for item with id: ' + itemId);
};

export const addReviewToItem = async (itemId: number, review: Review) => {
  const result = await db.query(
    `INSERT INTO tag
      (itemId, comment, ) 
      VALUES (
        '${itemId}',
        '${review.comment ?? ''}',
        '${review.user ?? ''}',
        '${review.rating}',
      );`
  );
  console.log('Added rating from : ' + review.user + ' for item with id: ' + itemId);
};

export const addNewItemImage = async (itemId: number, review: Review) => {
  const result = await db.query(
    `INSERT INTO tag
      (itemId, comment, ) 
      VALUES (
        '${itemId}',
        '${review.comment ?? ''}',
        '${review.user ?? ''}',
        '${review.rating}',
      );`
  );
  console.log('Added rating from : ' + review.user + ' for item with id: ' + itemId);
};
