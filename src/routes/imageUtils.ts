import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { ImageFolder, ThumbnailFolder, ThumbPrefix } from '../utils/constants';
import fs from 'fs';

export const resizeAndSave = async (buffer: Buffer) => {
  const generatedFilename = `${uuidv4()}.jpg`;

  //creates thumbnailfolder if not exists
  if (!fs.existsSync(`${ImageFolder}${ThumbnailFolder}`)) {
    fs.mkdirSync(`${ImageFolder}${ThumbnailFolder}`);
  }

  //thumb
  const thumbData = await sharp(buffer)
    .rotate() //does not autorotate without exif
    .resize({ width: 200, height: 200, fit: sharp.fit.inside, withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toBuffer();
  fs.writeFileSync(path.resolve(`${ImageFolder}${ThumbnailFolder}/${ThumbPrefix}${generatedFilename}`), thumbData);

  //max size
  const imageData = await sharp(buffer)
    .rotate() //does not autorotate without exif
    .resize({ width: 2000, height: 2000, fit: sharp.fit.inside, withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toBuffer();
  fs.writeFileSync(path.resolve(`${ImageFolder}/${generatedFilename}`), imageData);

  return generatedFilename;
};
