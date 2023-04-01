import { Router } from 'express';
import { createErrorResponse } from '../utils/responseHelpers';
import { getItems } from './itemLogic';
import { emptyOrRows } from './utils';

export const itemRouter = Router();

itemRouter.get('/', async (req, res) => {
  try {
    let order = 'DESC';
    if (req.query.sort && req.query.sort === 'asc') {
      order = 'ASC';
    }
    const numberPrPage = req.query.max ? +req.query.max : 10;
    const page = req.query.page ? +req.query.page : 1;

    const result = await getItems(page, order, numberPrPage);
    const items = emptyOrRows(result);
    if (items) {
      res.json(items);
    } else {
      res.sendStatus(404);
    }
  } catch (error: any) {
    createErrorResponse(`Error while getting persons - ${error.message}`, res);
  }
});
