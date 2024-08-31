import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { ImageFolder, ThumbnailFolder, ThumbPrefix } from '../utils/constants';

export const resizeAndSave = async (buffer: Buffer) => {
  const generatedFilename = `${uuidv4()}.png`;

  //TODO: if folders does not exist - generate them
  // if (!fs.existsSync(thumbnailFolder)) {
  //   fs.mkdirSync(thumbnailFolder);
  // }

  //thumb
  await sharp(buffer)
    .resize(200, 200, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFile(path.resolve(`${ImageFolder}${ThumbnailFolder}/${ThumbPrefix}${generatedFilename}`));

  //max size
  await sharp(buffer)
    .resize(2000, 2000, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFile(path.resolve(`${ImageFolder}/${generatedFilename}`));

  return generatedFilename;
};
