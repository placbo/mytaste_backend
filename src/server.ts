import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { authController } from './controllers/authController';
import { itemController } from './controllers/itemController';
import { imageUploadController } from './controllers/imageUploadController';
import { BasePath, ImageFolder, ServerPort } from './utils/constants';
import passport from 'passport';
import session from 'express-session';

const app: Express = express();

const baseOrigins = [
  '127.0.0.1:5173',
  'localhost:5173',
  'localhost:3000',
  'mytaste.kasselars.com',
  'mytasteapi.kasselars.com',
];

const allowedOrigins = baseOrigins.flatMap((h) => [`http://${h}`, `https://${h}`]);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ROUTES
app.get(BasePath + '/status', (_: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('Server running!');
});
app.use(BasePath + '/auth', authController);
app.use(BasePath + '/items', itemController);
app.use(BasePath + '/imageupload', imageUploadController);
app.use(BasePath + '/images', express.static(ImageFolder));

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(ServerPort, () => {
  console.log(`⚡️Server is running at http://localhost:${ServerPort}`);
});
