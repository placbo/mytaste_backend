import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { authRouter } from './routes/authRoutes';
import { itemRouter } from './routes/itemRoutes';
import { imageUploadRouter } from './routes/imageUploadRoutes';
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
app.use(BasePath + '/auth', authRouter);
app.use(BasePath + '/items', itemRouter);
app.use(BasePath + '/imageupload', imageUploadRouter);
app.use(BasePath + '/images', express.static(ImageFolder));

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(ServerPort, () => {
  console.log(`⚡️Server is running at http://localhost:${ServerPort}`);
});
