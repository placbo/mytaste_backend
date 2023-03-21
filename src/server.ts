import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/status', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Server running!</h1>`);
});

//ROUTES
//app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
