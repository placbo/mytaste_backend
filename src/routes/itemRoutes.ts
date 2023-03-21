import { Router } from 'express';
import { db } from '../utils/db';
import authMiddleware from '../middleware/authMiddleware';
import { createErrorResponse } from '../utils/responseHelpers';

export const itemRouter = Router();

itemRouter.get('/', authMiddleware, async (_req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM items');
    if (result) {
      res.json({
        result,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error: any) {
    createErrorResponse(`Error while getting persons - ${error.message}`, res);
  }
});
