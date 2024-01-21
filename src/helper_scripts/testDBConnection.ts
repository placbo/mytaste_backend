import { db } from '../utils/db';

const test = async function () {
  try {
    const [rows] = await db.query('SELECT * FROM items;');
    console.log('Result: ', rows);
  } catch (err) {
    console.log(err);
  }
};

test();
