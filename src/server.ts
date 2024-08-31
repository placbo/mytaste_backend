import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
const BASE_PATH = process.env.BASE_PATH;

import { authRouter } from './routes/authRoutes';
import { itemRouter } from './routes/itemRoutes';
import { imageUploadRouter } from './routes/imageUploadRoutes';
const ImageFolder = process.env.IMAGE_FOLDER || 'images/';

const app: Express = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  })
);

//ROUTES
app.get(BASE_PATH + '/status', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`Server running!>`);
});
app.use(BASE_PATH + '/auth', authRouter);
app.use(BASE_PATH + '/auth', authRouter);
app.use(BASE_PATH + '/items', itemRouter);
app.use(BASE_PATH + '/imageupload', imageUploadRouter);
app.use(BASE_PATH + '/images', express.static(ImageFolder));

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
