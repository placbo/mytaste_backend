import dotenv from 'dotenv';
dotenv.config();

// File paths
export const ImageFolder = process.env.IMAGE_FOLDER || '/images';
export const ThumbnailFolder = '/thumbs';
export const ThumbPrefix = 'thumbnail.';

// Server
export const ServerPort = process.env.SERVER_PORT;
export const BasePath = process.env.BASE_PATH;

// Secrets
export const JwtSecret = process.env.JWT_SECRET || '';
export const AppAdminPasswordHashed = process.env.APP_ADMIN_PASSWORD_HASHED || '';
export const AppAdminUsername = process.env.ADMIN_USERNAME || '';
//export const JwtExpiration = process.env.JWT_EXPIRATION ?? '8h'; //funker ikke med typescript og jwt.SignOptions  (den krever: number | StringValue | undefined)
export const JwtExpiration = '8h';
