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
    let context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    result[planet] = [];
    planets[planet].forEach((time, planetIdx) => {
      result[planet].push({
        time: time,
        lut: context.getImageData(0, 16 * planetIdx, 256, 16).data
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
    let lut = new Uint8Array(16384);
    for (let i = 0; i < 16384; i++) {
      lut[i] = table.lut[i] * w1 + nextTable.lut[i] * w2;
    }
    return lut;
  }
};

export { getColorLookupTable };
