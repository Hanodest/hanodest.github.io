import { lookupColor } from './lut.js'

class Renderer {
  #layers;

  constructor() {
    this.#layers = [];
  }

  addLayer(layer) {
    this.#layers.push(layer);
  }

  removeLayer(layer) {
    this.#layers = this.#layers.filter(e => e !== layer);
  }

  moveLayer(from, to) {
    let layerToMove = this.#layers.splice(from, 1)[0];
    this.#layers.splice(to, 0, layerToMove);
  }

  draw(context, dx, dy, light) {
    let canvas = context.canvas;
    let width = canvas.width;
    let height = canvas.height;
    let image = new Uint8Array(width * height * 4);
    let lightmap = new Uint8Array(width * height * 4);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let tileColor = (
          Math.floor((x - (width >> 1)) / 64) +
          Math.floor((y - (height >> 1)) / 64))
          % 2 == 0 ? 48 : 27;
        let pos = (width * y + x) * 4;
        for (let channel = 0; channel < 3; channel++) {
          image[pos + channel] = tileColor;
          lightmap[pos + channel] = light;
        }
        image[pos + 3] = 255;
        lightmap[pos + 3] = 255;
      }
    }

    this.#layers.forEach((layer) => {
      layer.draw(image, lightmap, dx, dy, width, height);
    });

    let data = context.getImageData(0, 0, width, height);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let lightColor = image.slice(pos, pos + 4);
        let darkColor = lookupColor(lightColor);
        for (let channel = 0; channel < 4; channel++) {
          data.data[pos + channel] =
            Math.floor(
              (lightColor[channel] * lightmap[pos + channel] +
                darkColor[channel] * (255 - lightmap[pos + channel]))
              / 255);
        }
      }
    }
    context.putImageData(data, 0, 0);
  }
};

export { Renderer };
