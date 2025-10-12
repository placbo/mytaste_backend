import jwt from 'jsonwebtoken';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import { AppAdminPasswordHashed, AppAdminUsername, JwtExpiration, JwtSecret } from '../utils/constants';
//import {authenticateGoogle, handleGoogleCallback} from '../middleware/passport';

export const authController = Router();

authController.post('/login', (req, res) => {
  const valid = bcrypt.compareSync(req.body.password, AppAdminPasswordHashed);
  if (!valid) return res.sendStatus(401);

  const token = jwt.sign(
    {
      id: AppAdminUsername,
      isAdmin: true, //TODO: make dynamic when more users are added
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
