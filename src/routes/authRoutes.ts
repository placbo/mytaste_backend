import jwt from 'jsonwebtoken';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import { AppAdminPasswordHashed, AppAdminUsername, JwtExpiration, JwtSecret } from '../utils/constants';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const valid = bcrypt.compareSync(req.body.password, AppAdminPasswordHashed);
  console.log('VALID?', valid);
  if (!valid) return res.sendStatus(401);

  const token = jwt.sign(
    {
      id: AppAdminUsername,
    },
    JwtSecret,
    { expiresIn: JwtExpiration }
  );

  res.send({
    success: true,
    token: token,
  });
});

// authRouter.get('/google', authenticateGoogle);
// authRouter.get('/google/callback', handleGoogleCallback);
