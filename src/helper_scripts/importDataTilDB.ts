import { db } from '../utils/db';
import { items } from './data';

const insertItem = async function (item: any): Promise<number> {
  const result = await db.query(
    `INSERT INTO items
    (title, imageURL,createdLegacy, creator, averageRatingCount, averageRating) 
    VALUES (
      '${item.title ?? ''}',
      '${
        item.image.replace('https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F', '') ?? ''
      }',
      '${item.date ?? ''}',
      '${item.creator ?? ''}',
      '${item.averageRatingCount}',
      '${item.averageRating ?? 0}'
    );`
  );
  const insertedId = result[0].insertId;
  console.log('Item added with id: ', insertedId);
  return insertedId;
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

const inserTag = function await(itemId: number, tag: string) {
  db.query(
    `INSERT INTO tags
    (itemId, tag) 
    VALUES (
      '${itemId}',
      '${tag.trim()}'
    );`
  );
  console.log('Inserted tag : ' + tag);
};

console.log('Starting import');
items.forEach(async (item) => {
  const itemId = await insertItem(item);

  const reviews = Object.entries(item.ratings);
  reviews.map((review) => {
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
