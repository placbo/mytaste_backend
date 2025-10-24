import { Router } from 'express';
import { authenticateGoogle, handleGoogleCallback } from '../middleware/passport';

export const authController = Router();
authController.get('/google', authenticateGoogle);
authController.get('/google/callback', handleGoogleCallback);
