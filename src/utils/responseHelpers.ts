import { Response } from 'express';

export const createErrorResponse = (errorText: string, res: Response) => {
  res.status(500).json({ errorText });
};
