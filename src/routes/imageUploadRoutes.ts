import express, { Router } from 'express';
import { resizeAndSave } from './imageUtils';
export const router = Router();

//import { addNewItemImage } from './itemLogic';
//import imageLogic from '../services/imageLogic';
import authMiddleware from '../middleware/authMiddleware';
import { imageUploadMiddleWare } from './uploadImageMiddleware';

// router.post('/', [authMiddleware, imageUploadMiddleWare.single('image')], async (req, res) => {
//   try {
//     const id = req.body.id;
//     const category = req.body.category;
//     const shouldSetAsMainImage = req.query.is_main_image;
//     if (!(category === 'person' || category === 'community')) {
//       res.status(400).json({ error: 'category must be either "person" or "community" !' });
//     }
//     if (!req.file || !req.file.buffer) {
//       res.status(401).json({ error: 'File is not provided' });
//     } else {
//       const filename = await resizeAndSave(req.file.buffer);
//       const newImageId = await addNewItemImage(id, filename);
//       res.status(200).json({ filename: filename });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
