import sharp from 'sharp';
import fs from 'fs';

// Legg bildefiler som skal konverteres i en images-katalog som ligger på rota til prosjektet

const imagesFolder = './bilder';
const outputFolder = imagesFolder + '/result';

fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  files.forEach(async (fileName) => {
    const resultFile = `${outputFolder}/${fileName}`;
    await sharp(`${imagesFolder}/${fileName}`)
      .resize(480, 480, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(resultFile);
    console.log('Created new version for file : ' + fileName);
  });
  console.log('Done');
});
