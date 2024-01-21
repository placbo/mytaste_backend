import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { db } from '../utils/db';
import { ItemTypeFromFirebase, items } from './data';

const insertItem = async function (item: ItemTypeFromFirebase): Promise<number> {
  const imageUrl = item.image
    .replace('https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F', '')
    .split('?alt=media')[0];

  const result = await db.query<ResultSetHeader>(
    `INSERT INTO items
    (title, imageURL,createdLegacy, creator, averageRatingCount, averageRating) 
    VALUES (
      '${item.title ?? ''}',
      '${imageUrl ?? ''}',
      '${item.date ?? ''}',
      '${item.creator ?? ''}',
      '${item.averageRatingCount}',
      '${item.averageRating ?? 0}'
    );`
  );
  const firstInsertedId = result[0].insertId;
  console.log('Item added with id: ', firstInsertedId);
  return firstInsertedId;
};

const insertUserReviews = function await(itemId: number, user: string, rating: number, comment: string) {
  db.query(
    `INSERT INTO reviews
    (itemId, user, comment, rating) 
    VALUES (
      '${itemId}',
      '${user}',
      '${comment}',
      '${rating}'
    );`
  );
  console.log('Inserted review : ' + user);
};

interface tagType extends RowDataPacket {
  tagId: number;
  tag: string;
}

const inserTag = async function (itemId: number, tag: string) {
  const result = await db.query<tagType[]>('SELECT * FROM tags WHERE tags.tag = ?', [tag.trim()]);
  console.log('result', result[0]);
  const tagId = result[0][0].tagId;
  console.log('TAGID', tagId);

  db.query(
    `INSERT INTO item_tag
    (itemId, tagId) 
    VALUES (
      '${itemId}',
      '${tagId}'
    );`
  );
  console.log(`Inserted tag "${tag}"(${tagId}) for item ${itemId}"`);
};

function populateTagsTable(items: ItemTypeFromFirebase[]) {
  const tagSet = new Set();
  items.forEach((item) => {
    item.tags.forEach((tag) => {
      tagSet.add(tag.trim().toLowerCase());
    });
  });
  tagSet.forEach((tag) => {
    db.query(`INSERT INTO tags (tag) VALUES ('${tag}');`);
  });
  console.log(`inserted ${tagSet.size} tags`);
}

console.log('Starting import');
populateTagsTable(items);

items.forEach(async (item) => {
  const itemId = await insertItem(item);

  const reviews = Object.entries(item.ratings);
  reviews.map((review: any) => {
    const comment = review[0] === 'perbjester@gmail.com' ? item.comment : '';
    insertUserReviews(itemId, review[0], review[1], comment ?? '');
    console.log('----');
  });

  item.tags.forEach((tag) => {
    inserTag(itemId, tag);
  });

  console.log('====');
});
console.log('All done');
//TODO: legg inn awaits så man er sikret at alt kommer i rekkefølge
