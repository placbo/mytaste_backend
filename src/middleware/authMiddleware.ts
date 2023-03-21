// Import dependencies
import { verify } from 'jsonwebtoken';
import { Response, Request } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export default (req: Request, res: Response, next: any) => {
  const token = req.header('x-auth-token');
  //TODO: const authHeader = req.headers['authorization']
  //TODO: const token = authHeader && authHeader.split(' ')[1]
  if (!token)
    return res.status(401).send({
      success: false,
      error: 'Access denied. No token provided',
    });

  try {
    verify(token, process.env.ACCESS_TOKEN_SECRET || '');
  } catch (error) {
    return res.status(401).send({
      success: false,
      error: 'Token error. ' + error,
    });
  }
  next();
};
