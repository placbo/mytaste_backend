import { Router, Request, Response } from 'express';
import { authenticateGoogleUser, requireAdmin, User } from '../middleware/authMiddleware';
import { createErrorResponse } from '../utils/responseHelpers';
import { Item } from '../utils/types';
import {
  addItem,
  addTagToGlobalListIfNotExists,
  addTagToItemIfNotExist as addTagToItemIfNotExists,
  deleteAllTagsFromItem,
  deleteItem,
  getAllTags,
  getItemById,
  getItems,
  getReviewsByItemId,
  getUserReviewForItem,
  getTagsByItemId,
  searchItems,
  setUsersReviewForItem,
  updateItem,
  updateUserReviewForItem,
} from '../services/itemService';
import { emptyOrRows } from '../services/utils';

export const itemController = Router();

itemController.get('/tags', async (req: Request, res: Response) => {
  try {
    const result = await getAllTags();
    const tags = emptyOrRows(result);
    if (tags) {
      res.json(tags);
    } else {
      res.sendStatus(404);
    }
  } catch (err: any) {
    createErrorResponse(`Error while getting tags - ${err.message}`, res);
  }
});

itemController.get('/search', async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.q as string;

    if (!searchQuery || searchQuery.trim().length === 0) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    let order = 'DESC';
    if (req.query.sort && req.query.sort === 'asc') {
      order = 'ASC';
    }
    const numberPrPage = req.query.max ? +req.query.max : 10;
    const page = req.query.page ? +req.query.page : 1;

    const result = await searchItems(searchQuery.trim(), page, order, numberPrPage);
    const items = emptyOrRows(result);
    if (items) {
      res.json(items);
    } else {
      res.sendStatus(404);
    }
  } catch (error: any) {
    createErrorResponse(`Error while searching items - ${error.message}`, res);
  }
});

itemController.get('/', async (req: Request, res: Response) => {
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

itemController.get('/:id', async (req: Request, res: Response) => {
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

itemController.get('/:id/tags', async (req: Request, res: Response) => {
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

// Get all reviews for all user for a specific item
itemController.get('/:id/reviews', async (req: Request, res: Response) => {
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

// Get the logged-in user's review for a specific item
itemController.get('/:id/review', authenticateGoogleUser, async (req: Request, res: Response) => {
  try {
    const id = +req.params.id || 0;
    const userId = (req.user as User)?.id;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const result = await getUserReviewForItem(id, userId);
    if (result) {
      res.json(result);
    } else {
      res.status(204).json({ message: 'No review found for this user and item' });
    }
  } catch (err: any) {
    createErrorResponse(`Error while getting user review for item (${req.params.id}) - ${err.message}`, res);
  }
});

//Erstatter alle tags for posten. (Ved nyregistrering)
itemController.post('/:id/tags', [authenticateGoogleUser, requireAdmin], async (req: Request, res: Response) => {
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
itemController.put('/:id/tags', [authenticateGoogleUser, requireAdmin], async (req: Request, res: Response) => {
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

//Create a new review for the logged-in user
itemController.post('/:id/reviews', authenticateGoogleUser, async (req: Request, res: Response) => {
  try {
    const id = +req.params.id || 0;
    const review = req.body;
    const userId = (req.user as User)?.id;
    const userDisplayName = (req.user as User)?.displayName;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (review) {
      // Set the user from the authenticated user
      review.user = userId;
      review.userDisplayName = userDisplayName;
      await setUsersReviewForItem(id, review);
      res.status(201).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while adding review (${err.message})`, res);
  }
});

//Update an existing review for the logged-in user
itemController.put('/:id/reviews', authenticateGoogleUser, async (req: Request, res: Response) => {
  try {
    const id = +req.params.id || 0;
    const userId = (req.user as User)?.id;
    const userDisplayName = (req.user as User)?.displayName;
    const review = { ...req.body, user: userId, userDisplayName };

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (review) {
      await updateUserReviewForItem(id, review);
      res.status(200).json('OK');
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err: any) {
    createErrorResponse(`Error while updating review (${err.message})`, res);
  }
});

itemController.post('/', [authenticateGoogleUser, requireAdmin], async (req: Request, res: Response) => {
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

itemController.put('/:id', [authenticateGoogleUser, requireAdmin], async (req: Request, res: Response) => {
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

itemController.delete('/:id', [authenticateGoogleUser, requireAdmin], async (req: Request, res: Response) => {
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
