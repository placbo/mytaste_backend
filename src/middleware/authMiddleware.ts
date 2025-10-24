import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

export interface User {
  id: string;
  displayName: string;
  image?: string;
  iat?: number;
  exp?: number;
  isAdmin: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

/**
 * Middleware to authenticate Google OAuth users via JWT token
 * Allows both admin and normal users to access the endpoint
 */
export const authenticateGoogleUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access denied. No token provided',
    });
  }
  try {
    req.user = verify(token, process.env.JWT_SECRET ?? '') as User;
    next();
  } catch {
    return res.status(401).json({
      success: false,
      error: 'Invalid token',
    });
  }
};

/**
 * Middleware to authorize only admin users
 * Must be used after authenticateGoogleUser
 */
export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: 'Authentication required',
    });
  }

  if (!(req.user as User).isAdmin) {
    return res.status(403).json({
      success: false,
      error: 'Admin access required',
    });
  }
  next();
};

/**
 * Middleware to authorize normal users (non-admin)
 * Must be used after authenticateGoogleUser
 */
// export const requireUser = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.user) {
//     return res.status(401).json({
//       success: false,
//       error: 'Authentication required',
//     });
//   }
//   next();
// };
