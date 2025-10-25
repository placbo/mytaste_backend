import multer from 'multer';

export const imageUploadMiddleWare = multer({
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
