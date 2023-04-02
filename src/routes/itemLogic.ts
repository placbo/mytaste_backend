import { Review, Tag } from './../utils/types';
import { db } from '../utils/db';
import { emptyOrRows, getOffset } from './utils';

export async function getItems(page = 1, order = 'ASC', numberPrPage = 10) {
  const [totalResult] = await db.query(`SELECT COUNT(*) FROM items`);
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

export async function getItemById(id: number) {
  const [result] = await db.query(`SELECT * FROM items WHERE items.itemId = ${id}`);
  return result[0];
}

export async function getTagsByItemId(id: number): Promise<Tag[]> {
  const [result] = await db.query(`SELECT * FROM tags WHERE tags.itemId = ${id}`);
  return result;
}

export async function getReviewsByItemId(id: number): Promise<Review[]> {
  const [result] = await db.query(`SELECT * FROM reviews WHERE reviews.itemId = ${id}`);
  return result;
}

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
