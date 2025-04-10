import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { createErrorResponse } from '../utils/responseHelpers';
import { Item } from '../utils/types';
import {
  addItem,
  addTagToGlobalListIfNotExists,
  addTagToItemIfNotExist as addTagToItemIfNotExists,
  deleteAllTagsFromItem,
  deleteItem,
  getItemById,
  getItems,
  getReviewsByItemId,
  getTagsByItemId,
  setUsersReviewForItem,
  updateItem,
} from './itemLogic';
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
    createErrorResponse(`Error while getting items - ${error.message}`, res);
  }
});

itemRouter.get('/:id', async (req, res) => {
  try {
    const id = +req.params.id || 0;
    const result: Item = await getItemById(id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    createErrorResponse(`Error while getting item (${req.params.id}) - ${err.message}`, res);
  }
});

itemRouter.get('/:id/tags', async (req, res) => {
  try {
    const id = +req.params.id || 0;
    const result = await getTagsByItemId(id);
    const tags = emptyOrRows(result);
    if (tags) {
      res.json(tags);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    createErrorResponse(`Error while getting tags for item (${req.params.id}) - ${err.message}`, res);
  }
});

itemRouter.get('/:id/reviews', async (req, res) => {
  try {
    const id = +req.params.id || 0;
    const result = await getReviewsByItemId(id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    createErrorResponse(`Error while getting reviews for item (${req.params.id}) - ${err.message}`, res);
  }
});

//Erstatter alle tags for posten. (Ved nyregistrering)
itemRouter.post('/:id/tags', authMiddleware, async (req, res) => {
  try {
    const itemId = +req.params.id || 0;
    const tags: string[] = req.body.tags;
    if (tags) {
      await deleteAllTagsFromItem(itemId);
      for (const tag of tags) {
        const tagToSave = tag.trim();
        const tagId = await addTagToGlobalListIfNotExists(tagToSave);
        if (tagId) await addTagToItemIfNotExists(itemId, tagId, tagToSave);
      }
      res.status(201).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while adding tag (${err.message})`, res);
  }
});

//Legger til 1 tag for posten & personen
itemRouter.put('/:id/tags', authMiddleware, async (req, res) => {
  try {
    const id = +req.params.id || 0;
    const tag = req.body.tag;
    if (tag) {
      const tagToSave = tag.trim();
      const tagId = await addTagToGlobalListIfNotExists(tagToSave);
      if (tagId) await addTagToItemIfNotExists(id, tagId, tagToSave);
      res.status(201).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while adding tag (${err.message})`, res);
  }
});

//NB! ingen put - kun 1 review pr bruker
itemRouter.post('/:id/reviews', authMiddleware, async (req, res) => {
  try {
    const id = +req.params.id || 0;
    const review = req.body;
    if (review) {
      await setUsersReviewForItem(id, review);
      res.status(201).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while adding review (${err.message})`, res);
  }
});

itemRouter.post('/', authMiddleware, async (req, res) => {
  try {
    const item = req.body;
    if (item) {
      const result = await addItem(item);
      res.status(201).json({ id: result });
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while adding item (${err.message})`, res);
  }
});

itemRouter.put('/:id', authMiddleware, async (req, res) => {
  try {
    const item = req.body;
    const id = +req.params.id || 0;
    if (id && item) {
      await updateItem(item, id);
      res.status(200).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while updating item (${err.message})`, res);
  }
});

itemRouter.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const id = +req.params.id || 0;
    if (id) {
      await deleteItem(id);
      res.status(200).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while deleting item (${err.message})`, res);
  }
});
