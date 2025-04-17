import { getColorLookupTable } from './lut.js';
import { BoundingBox } from './bounding_box.js';
import { Vector } from './vector.js';
import { loadImageFromUrl } from './image.js';
import createRenderer from './wasm/renderer.js';

class Renderer {
  #layers;
  #backgrounds;
  #wasmRenderer;

  constructor(wasmRenderer) {
    this.#wasmRenderer = wasmRenderer;
    this.#layers = [];
    this.#backgrounds = {};
    ['nauvis', 'vulcanus', 'fulgora', 'gleba', 'aquilo'].forEach((background) => {
      loadImageFromUrl('./backgrounds/' + background + '.jpg').then((image) => {
        this.#backgrounds[background] = image;
        this.addImage(background, image);
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

  addImage(id, image, scale) {
    scale = scale || 1;
    let width = image.width * scale;
    let height = image.height * scale;
    let canvas = new OffscreenCanvas(width, height);
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, width, height);
    let imageMemory = this.#wasmRenderer.ccall(
      'CreateImage', 'number', ['string', 'number', 'number'], [id, width, height]);
    this.#wasmRenderer.HEAPU8.set(context.getImageData(0, 0, width, height).data,
      imageMemory);
    this.#wasmRenderer.ccall('CalculateRowLength', 'undefined', ['string'], [id]);
  }

  #getBoundingBox() {
    let boundingBox = this.#layers.length == 0
      ? new BoundingBox(new Vector(-64, -64), new Vector(64, 64))
      : this.#layers.map((layer) => layer.boundingBox).reduce((b1, b2) => b1.union(b2));
    return [
      boundingBox.topLeft.subtract(new Vector(64, 64)),
      boundingBox.bottomRight.add(new Vector(64, 64))];
  }

  getRenderSize() {
    return [
      this.#wasmRenderer.ccall('GetWidth', 'number', [], []),
      this.#wasmRenderer.ccall('GetHeight', 'number', [], [])
    ];
  }

  getRowLength(imageId, row) {
    return this.#wasmRenderer.ccall(
      'GetRowLength', 'number', ['string', 'number'], [imageId, row]);
  }

  getFrameCount() {
    let result = 0;
    this.#layers.forEach((layer) => {
      result = Math.max(result, layer.frameCount);
    });
    return result;
  }

  draw(frame, daytime, backgroundName) {
    let [topLeft, bottomRight] = this.#getBoundingBox();
    if (this.#wasmRenderer !== undefined) {
      this.#wasmRenderer.ccall('InitCanvas', 'undefined', ['number', 'number', 'number', 'number'],
        [topLeft.x, topLeft.y, bottomRight.x, bottomRight.y]);
    }
    this.#wasmRenderer.ccall('SetBackground', 'undefined', ['string'], [backgroundName]);

    this.#layers.forEach((layer) => {
      if (layer.drawMode != 'shadow') {
        return;
      }
      let sprite = layer.getSprite(frame);
      if (sprite === undefined) { return; }
      this.#wasmRenderer.ccall('DrawShadow', 'undefined',
        ['string', 'number', 'number', 'number', 'number', 'number', 'number'],
        [sprite.imageId, sprite.shift.x, sprite.shift.y, sprite.size.x, sprite.size.y,
        layer.boundingBox.topLeft.x, layer.boundingBox.topLeft.y]);
    });

    this.#wasmRenderer.ccall('ApplyShadows', 'undefined', [], []);

    this.#layers.forEach((layer) => {
      let sprite = layer.getSprite(frame);
      if (sprite === undefined) { return; }
      if (layer.drawMode == 'sprite' || layer.drawMode == 'glow') {
        this.#wasmRenderer.ccall('DrawSprite', 'undefined',
          ['string', 'string', 'number', 'number', 'number', 'number', 'number', 'number',
            'number', 'number', 'number', 'number'],
          [sprite.imageId, layer.blendMode,
          sprite.shift.x, sprite.shift.y, sprite.size.x, sprite.size.y,
          layer.boundingBox.topLeft.x, layer.boundingBox.topLeft.y,
          layer.tint[0], layer.tint[1], layer.tint[2], layer.tint[3]]);
      }
      if (layer.drawMode == 'light' || layer.drawMode == 'glow') {
        this.#wasmRenderer.ccall('DrawLight', 'undefined',
          ['string', 'number', 'number', 'number', 'number', 'number', 'number',
            'number', 'number', 'number', 'number'],
          [sprite.imageId,
          sprite.shift.x, sprite.shift.y, sprite.size.x, sprite.size.y,
          layer.boundingBox.topLeft.x, layer.boundingBox.topLeft.y,
          layer.tint[0], layer.tint[1], layer.tint[2], layer.tint[3]]);
      }
    });

    this.#wasmRenderer.HEAPU8.set(
      getColorLookupTable(backgroundName, 0),
      this.#wasmRenderer.ccall('GetDayLut', 'number', [], []))
    this.#wasmRenderer.HEAPU8.set(
      getColorLookupTable(backgroundName, daytime),
      this.#wasmRenderer.ccall('GetNightLut', 'number', [], []))

    let width = this.#wasmRenderer.ccall('GetWidth', 'number', [], []);
    let height = this.#wasmRenderer.ccall('GetHeight', 'number', [], []);
    let data = new ImageData(width, height);
    let renderResult = this.#wasmRenderer.ccall('ApplyLight', 'number', [], []);
    data.data.set(this.#wasmRenderer.HEAPU8.slice(
      renderResult, renderResult + width * height * 4));
    return data;
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

  static async create() {
    let wasmRenderer = await createRenderer();
    return new Renderer(wasmRenderer);
  }
};

export { Renderer };
