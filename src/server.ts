import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
import { authRouter } from './routes/authRoutes';
import { itemRouter } from './routes/itemRoutes';
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

app.get('/status', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Server running!</h1>`);
});

//ROUTES
app.use('/api/auth', authRouter);
app.use('/api/items', itemRouter);
app.use('/api/images', express.static(ImageFolder));

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
