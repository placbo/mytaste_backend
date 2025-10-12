import multer from 'multer';

export const imageUploadMiddleWare = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});
