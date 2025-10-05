import { verify } from 'jsonwebtoken';
import { Response, Request } from 'express';
import { AppAdminUsername, JwtSecret } from '../utils/constants';

// export type User = {
//   id: string;
//   displayName: string;
//   image: string;
//   iat: number;
//   exp: number;
//   isAdmin: boolean;
// };

export default (req: Request, res: Response, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).send({
      success: false,
      error: 'Access denied. No token provided',
    });
  }

  try {
    const decoded: any = verify(token, JwtSecret);
    if (decoded.id !== AppAdminUsername) {
      return res.status(403).send({
        success: false,
        error: 'Access denied',
      });
    }
    req.user = decoded; // Attach the decoded user to the request object
  } catch (error) {
    return res.status(401).send({
      success: false,
      error: 'Token error. ' + error,
    });
  }
  next();
};
