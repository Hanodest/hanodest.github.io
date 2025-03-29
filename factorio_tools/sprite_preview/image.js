async function loadImageFromUrl(imageUrl) {
  let image = new Image()
  image.src = imageUrl
  return new Promise((resolve) => {
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
}

async function loadImageFromFile(file) {
  let file_reader = new FileReader();
  let file_contents = new Promise((resolve) => {
    file_reader.addEventListener('load', () => {
      resolve(file_reader.result);
    });
  });
  file_reader.readAsDataURL(file);
  return loadImageFromUrl(await file_contents);
}

function detectSpriteSize(data) {
  let bestColumns = 1;
  let bestResult = 16;
  for (let numColumns = 2; numColumns <= 16; numColumns++) {
    if (data.width % numColumns != 0) {
      continue;
    }
    let width = data.width / numColumns;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < data.width - width; x += 4) {
      for (let y = 0; y < data.height; y += 4) {
        for (let channel = 0; channel < 4; channel++) {
          total++;
          diff += Math.abs(
            data.data[(data.width * y + x) * 4 + channel] -
            data.data[(data.width * y + x + width) * 4 + channel]);
        }
      }
    }
    if (diff / total < bestResult + 1) {
      bestResult = diff / total;
      bestColumns = numColumns;
    }
  }
  let bestRows = 1;
  bestResult = 16;
  for (let numRows = 2; numRows <= 16; numRows++) {
    if (data.height % numRows != 0) {
      continue;
    }
    let height = data.height / numRows;
    let total = 0;
    let diff = 0;
    for (let x = 0; x < data.width; x += 4) {
      for (let y = 0; y < data.height - height; y += 4) {
        for (let channel = 0; channel < 4; channel++) {
          total++;
          diff += Math.abs(
            data.data[(data.width * y + x) * 4 + channel] -
            data.data[(data.width * (y + height) + x) * 4 + channel]);
        }
      }
    }
    if (diff / total < bestResult + 1) {
      bestResult = diff / total;
      bestRows = numRows;
    }
  }

  return [bestRows, bestColumns];
}

export { loadImageFromUrl, loadImageFromFile, detectSpriteSize };


