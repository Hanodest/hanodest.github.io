async function loadImage(imageUrl) {
  let image = new Image()
  image.src = imageUrl
  return new Promise((resolve) => {
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
}

function detectSpriteSize(data) {
  let numColumns = 16;
  for (numColumns = 16; numColumns > 1; numColumns--) {
    if (image.width % numColumns != 0) {
      continue;
    }
    let width = data.width / numColumns;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < data.width - width; x += 4) {
      for (let y = 0; y < data.height; y += 4) {
        total++;
        diff += Math.abs(
          data.data[(data.width * y + x) * 4 + 3] -
          data.data[(data.width * y + x + width) * 4 + 3]);
      }
    }
    if (diff / total < 32) {
      break;
    }
  }
  let numRows = 16;
  for (numRows = 16; numRows > 1; numRows--) {
    if (data.height % numRows != 0) {
      continue;
    }
    let height = data.height / numRows;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < data.width; x += 4) {
      for (let y = 0; y < data.height - height; y += 4) {
        total++;
        diff += Math.abs(
          data.data[(data.width * y + x) * 4 + 3] -
          data.data[(data.width * (y + height) + x) * 4 + 3]);
      }
    }
    if (diff / total < 32) {
      break;
    }
  }

  return [numRows, numColumns];
}

export { loadImage, detectSpriteSize };


