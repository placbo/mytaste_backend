import dotenv from 'dotenv';
dotenv.config();

// File paths
export const ImageFolder = process.env.IMAGE_FOLDER || '/images';
export const ThumbnailFolder = '/thumbs';
export const ThumbPrefix = 'thumbnail.';

// Server
export const ServerPort = process.env.SERVER_PORT;
export const BasePath = process.env.BASE_PATH;
