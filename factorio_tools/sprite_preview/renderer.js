import { lookupColor } from './lut.js';
import { BoundingBox } from './bounding_box.js';
import { Vector } from './vector.js';

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

  draw(frame, light, context) {
    let boundingBox = this.#layers.length == 0
      ? new BoundingBox(new Vector(0, 0), new Vector(256, 256))
      : this.#layers.map((layer) => layer.boundingBox).reduce((b1, b2) => b1.union(b2));

    let width = boundingBox.bottomRight.x - boundingBox.topLeft.x;
    let height = boundingBox.bottomRight.y - boundingBox.topLeft.y;
    let canvas = context.canvas;
    canvas.width = width;
    canvas.height = height;

    let image = new ImageData(width, height);
    let lightmap = new ImageData(width, height);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let tileColor = (
          Math.floor((x - boundingBox.topLeft.x) / 64)
          + Math.floor((y - boundingBox.topLeft.y) / 64)
        ) % 2 == 0 ? 48 : 27;
        let pos = (width * y + x) * 4;
        for (let channel = 0; channel < 3; channel++) {
          image.data[pos + channel] = tileColor;
          lightmap.data[pos + channel] = light;
        }
        image.data[pos + 3] = 255;
        lightmap.data[pos + 3] = 255;
      }
    }

    this.#layers.forEach((layer) => {
      layer.draw(frame, boundingBox, image, lightmap);
    });

    let data = new ImageData(width, height);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let lightColor = image.data.slice(pos, pos + 4);
        let darkColor = lookupColor(lightColor);
        for (let channel = 0; channel < 4; channel++) {
          data.data[pos + channel] =
            Math.floor(
              (lightColor[channel] * lightmap.data[pos + channel] +
                darkColor[channel] * (255 - lightmap.data[pos + channel]))
              / 255);
        }
      }
    }
    context.putImageData(data, 0, 0);
  }
};

export { Renderer };
