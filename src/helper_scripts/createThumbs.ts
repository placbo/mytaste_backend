import sharp from 'sharp';
import fs from 'fs';

// Legg bildefiler som skal konverteres i en images-katalog som ligger på rota til prosjektet

const imagesFolder = './images';
const thumbnailFolder = imagesFolder + '/thumbs';
const thumbPrefix = 'thumbnail.';

fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  if (!fs.existsSync(thumbnailFolder)) {
    fs.mkdirSync(thumbnailFolder);
  }

  files.forEach(async (fileName) => {
    const resultFile = `${thumbnailFolder}/${thumbPrefix}${fileName}`;
    await sharp(`${imagesFolder}/${fileName}`)
      .resize(200, 200, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(resultFile);
    console.log('Created thumb for file : ' + fileName);
  });
  console.log('Done');
});
