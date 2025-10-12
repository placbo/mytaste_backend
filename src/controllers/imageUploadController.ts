import { Router } from 'express';
import { resizeAndSave } from './imageUtils';
import authMiddleware from '../middleware/authMiddleware';
import { addNewItemImage } from '../services/itemService';
import { imageUploadMiddleWare } from '../middleware/uploadImageMiddleware';

export const imageUploadController = Router();

imageUploadController.post('/', [authMiddleware, imageUploadMiddleWare.single('image')], async (req: any, res: any) => {
  try {
    const itemId = req.body.itemid;
    if (!req.file?.buffer) {
      res.status(401).json({ error: 'File is not provided' });
    } else {
      const filename = await resizeAndSave(req.file.buffer);
      await addNewItemImage(itemId, filename);
      res.status(200).json({ filename: filename });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
