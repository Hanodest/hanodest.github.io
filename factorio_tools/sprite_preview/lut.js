import { loadImageFromUrl } from './image.js';

let planets = {
  nauvis: [0, 0.25, 0.45, 0.55, 0.75, 1],
  vulcanus: [0, 0.2, 0.45, 0.55, 0.8, 1],
  fulgora: [0, 0.2, 0.3, 0.4, 0.6, 0.7, 1],
  gleba: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1]
};

async function getLutTables() {
  let result = {};
  for (let planet in planets) {
    let image = await (loadImageFromUrl(`./luts/${planet}.png`));
    let canvas = new OffscreenCanvas(image.width, image.height);
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    let data = context.getImageData(0, 0, image.width, image.height).data;
    result[planet] = [];
    planets[planet].forEach((time, planetIdx) => {
      let lut = [];
      for (let r = 0; r < 16; r++) {
        lut[r] = [];
        for (let g = 0; g < 16; g++) {
          lut[r][g] = [];
          for (let b = 0; b < 16; b++) {
            let idx = (planetIdx * 4096 + g * 256 + b * 16 + r) * 4;
            lut[r][g][b] = data.slice(idx, idx + 4);
          }
        }
      }
      result[planet].push({
        time: time,
        lut: lut
      });
    });
  }
  return result;
}

let lutTables = await getLutTables();

function getColorLookupTable(planet, daytime) {
  let planetTables = lutTables[planet];
  if (planetTables === undefined) {
    planetTables = lutTables['nauvis'];
  }
  for (let idx = 0; ; idx++) {
    let table = planetTables[idx];
    let nextTable = planetTables[idx + 1];
    if (nextTable.time <= daytime) {
      continue;
    }
    let w2 = (daytime - table.time) / (nextTable.time - table.time);
    let w1 = 1 - w2;
    let lut = [];
    for (let r = 0; r < 16; r++) {
      lut[r] = [];
      for (let g = 0; g < 16; g++) {
        lut[r][g] = [];
        for (let b = 0; b < 16; b++) {
          lut[r][g][b] = [];
          for (let channel = 0; channel < 4; channel++) {
            lut[r][g][b][channel] =
              table.lut[r][g][b][channel] * w1 + nextTable.lut[r][g][b][channel] * w2;
          }
        }
      }
    }
    return lut;
  }
};

export { getColorLookupTable };
