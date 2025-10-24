import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { authController } from './controllers/authController';
import { itemController } from './controllers/itemController';
import { imageUploadController } from './controllers/imageUploadController';
import { BasePath, ImageFolder, ServerPort } from './utils/constants';
import passport from 'passport';
import session from 'express-session';
import './middleware/passport'; // Import passport configuration

const app: Express = express();

const baseOrigins = ['localhost:3000', 'mytaste.kasselars.com', 'mytasteapi.kasselars.com'];

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

// Session and Passport configuration BEFORE routes
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.get(BasePath + '/status', (_: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('Server running!');
});
app.use(BasePath + '/auth', authController);
app.use(BasePath + '/items', itemController);
app.use(BasePath + '/imageupload', imageUploadController);
app.use(BasePath + '/images', express.static(ImageFolder));

app.listen(ServerPort, () => {
  console.log(`⚡️Server is running at http://localhost:${ServerPort}`);
});
