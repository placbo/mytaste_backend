import jwt from 'jsonwebtoken';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const valid = bcrypt.compareSync(req.body.password, ADMIN_PASSWORD);
  console.log('VALID?', valid);
  if (!valid) return res.sendStatus(401);

  const token = jwt.sign(
    {
      id: 'PCB',
    },
    process.env.ACCESS_TOKEN_SECRET || '',
    { expiresIn: '8h' }
  );

  res.send({
    success: true,
    token: token,
  });
});
