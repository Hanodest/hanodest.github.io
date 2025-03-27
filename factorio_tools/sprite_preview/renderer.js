import { lookupColor } from './lut.js';
import { BoundingBox } from './bounding_box.js';
import { Vector } from './vector.js';
import { loadImage } from './image.js';

class Renderer {
  #layers;
  #backgrounds;

  constructor() {
    this.#layers = [];
    this.#backgrounds = {};
    ['nauvis', 'vulcanus', 'fulgora', 'gleba', 'aquilo'].forEach((background) => {
      loadImage('./backgrounds/' + background + '.jpg').then((image) => {
        this.#backgrounds[background] = image;
      });
    });
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

  clear() {
    this.#layers = [];
  }

  draw(frame, light, backgroundName, context) {
    let boundingBox = this.#layers.length == 0
      ? new BoundingBox(new Vector(-64, -64), new Vector(64, 64))
      : this.#layers.map((layer) => layer.boundingBox).reduce((b1, b2) => b1.union(b2));
    let topLeft = boundingBox.topLeft.subtract(new Vector(64, 64));
    let bottomRight = boundingBox.bottomRight.add(new Vector(64, 64));

    let width = bottomRight.x - topLeft.x;
    let height = bottomRight.y - topLeft.y;
    let canvas = context.canvas;
    canvas.width = width;
    canvas.height = height;

    let image = new ImageData(width, height);
    let lightmap = new ImageData(width, height);
    let shadowmap = new ImageData(width, height);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let tileColor = (
          Math.floor((x + topLeft.x) / 64)
          + Math.floor((y + topLeft.y) / 64)
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

    let background = this.#backgrounds[backgroundName];
    if (this.#layers.length != 0 && typeof (background) != 'undefined') {
      context.drawImage(background,
        (background.width - width) >> 1, (background.height - height) >> 1,
        width, height, 0, 0, width, height);
      image = context.getImageData(0, 0, width, height);
    }

    this.#layers.forEach((layer) => {
      layer.drawShadow(frame, new BoundingBox(topLeft, bottomRight), shadowmap);
    });
    for (let pos = 0; pos < width * height; pos++) {
      if (shadowmap.data[pos * 4 + 3] > 0) {
        for (let channel = 0; channel < 3; channel++) {
          image.data[pos * 4 + channel] >>= 1;
        }
      }
    }

    this.#layers.forEach((layer) => {
      layer.draw(frame, new BoundingBox(topLeft, bottomRight), image, lightmap);
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

  exportSettings() {
    return {
      "layers": this.#layers
        .map((layer) => layer.exportSettings())
        .filter((e) => e !== undefined)
    };
  }

  get layers() {
    return this.#layers;
  }
};

export { Renderer };
