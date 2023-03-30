import { Router } from 'express';
import { db } from '../utils/db';
import { createErrorResponse } from '../utils/responseHelpers';

export const itemRouter = Router();

const emptyOrRows = (rows: any) => {
  if (!rows) {
    return [];
  }
  return rows;
};

itemRouter.get('/', async (_req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM items');

    const items = emptyOrRows(result);
    if (items) {
      res.json({
        items,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error: any) {
    createErrorResponse(`Error while getting persons - ${error.message}`, res);
  }
});
