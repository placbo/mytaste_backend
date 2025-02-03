import jwt from 'jsonwebtoken';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const APP_ADMIN_PASSWORD_HASHED = process.env.APP_ADMIN_PASSWORD_HASHED || '';
const APP_ADMIN_USERNAME = process.env.ADMIN_USERNAME || '';
const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '8h';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const valid = bcrypt.compareSync(req.body.password, APP_ADMIN_PASSWORD_HASHED);
  console.log('VALID?', valid);
  if (!valid) return res.sendStatus(401);

  const token = jwt.sign(
    {
      id: APP_ADMIN_USERNAME,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRATION }
  );

  res.send({
    success: true,
    token: token,
  });
});
