async function loadImage(imageUrl) {
  let image = new Image()
  image.src = imageUrl
  return new Promise((resolve) => {
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
}

function detectSpriteSize(image) {
  let canvas = new OffscreenCanvas(image.width, image.height);
  let context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  let data = context.getImageData(0, 0, image.width, image.height);

  let numColumns = 16;
  for (numColumns = 16; numColumns > 1; numColumns--) {
    if (image.width % numColumns != 0) {
      continue;
    }
    let width = image.width / numColumns;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < image.width - width; x += 4) {
      for (let y = 0; y < image.height; y += 4) {
        total++;
        diff += Math.abs(
          data.data[(image.width * y + x) * 4 + 3] -
          data.data[(image.width * y + x + width) * 4 + 3]);
      }
    }
    if (diff / total < 32) {
      break;
    }
  }
  let numRows = 16;
  for (numRows = 16; numRows > 1; numRows--) {
    if (image.height % numRows != 0) {
      continue;
    }
    let height = image.height / numRows;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < image.width; x += 4) {
      for (let y = 0; y < image.height - height; y += 4) {
        total++;
        diff += Math.abs(
          data.data[(image.width * y + x) * 4 + 3] -
          data.data[(image.width * (y + height) + x) * 4 + 3]);
      }
    }
    if (diff / total < 32) {
      break;
    }
  }

  return { numRows: numRows, numColumns: numColumns };
}

export { loadImage, detectSpriteSize };


