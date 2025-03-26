import { detectSpriteSize, loadImage } from './image.js';
import { ImageFile } from './imageFile.js';
import { Layer } from './layer.js';
import { Renderer } from './renderer.js';
import { Vector } from './vector.js';

function createLayerSettings(imageName, context) {
  let canvas = context.canvas;
  let [numRows, numColumns] = detectSpriteSize(
    context.getImageData(0, 0, canvas.width, canvas.height));

  return {
    title: imageName,
    size: new Vector(canvas.width / numColumns, canvas.height / numRows),
    shift: new Vector(0, 0),
    frameCount: 0,
    lineLength: numColumns,
    linesPerFile: numRows,
    blendMode: 'normal',
    drawMode: 'sprite',
    tint: '#ffffff',
  };
}

class Gui {
  #renderer;
  #frame;
  #renderLoop;

  #background;
  #controls;
  #animationSpeed;
  #layersSettings;
  #canvas;
  #context;

  constructor() {
    this.#renderer = new Renderer();

    this.#controls = document.getElementById('global_controls');
    this.#layersSettings = document.getElementById('layers_settings');
    this.#animationSpeed = document.getElementById('animation_speed');
    this.#animationSpeed.addEventListener('dblclick', () => {
      this.#animationSpeed.value = 60;
    });
    this.#background = document.getElementById('background');

    this.#canvas = document.getElementById('image');
    this.#context = this.#canvas.getContext('2d', { willReadFrequently: true });

    this.setupHandlers();
    this.reset();
  }

  reset() {
    this.#controls.classList.add('hidden');

    this.#frame = 0;
    this.#background.value = 'lab';

    if (typeof (this.#renderLoop) != 'undefined') {
      clearTimeout(this.#renderLoop);
      this.#renderLoop = undefined;
    }

    this.#renderer.draw(/*frame=*/0, /*light=*/255, this.#background.value, this.#context);
  }

  drawSprite() {
    let dayNight = parseInt(document.getElementById('day_night').value);
    this.#renderer.draw(this.#frame++, 255 - dayNight, this.#background.value, this.#context);

    let animationSpeed = parseInt(this.#animationSpeed.value);
    this.#renderLoop = setTimeout(() => { this.drawSprite(); }, 1000 / animationSpeed);
  }

  addLayer(layerSettings) {
    let layer = new Layer(layerSettings);
    layer.addEventListener('delete', () => {
      this.#renderer.removeLayer(layer);
      this.redraw();
      if (this.#layersSettings.childElementCount == 0) {
        this.reset();
      }
    });
    layer.addEventListener('moveLayer', (event) => {
      let dragStart = event.detail.dragStart;
      let dragEnd = event.detail.dragEnd;
      this.#renderer.moveLayer(dragStart, dragEnd);
      this.redraw();
    });
    this.#renderer.addLayer(layer);
    this.redraw();
    return layer;
  }

  redraw() {
    this.#layersSettings.replaceChildren();
    this.#renderer.layers.forEach((layer) => {
      this.#layersSettings.appendChild(layer.container);
    });
  }

  async loadImage(imageName, imageUrl) {
    let image = await loadImage(imageUrl);
    if (this.#layersSettings.childElementCount == 0) {
      this.#controls.classList.remove('hidden');
      setTimeout(() => { this.drawSprite(); }, 0);
    }

    let canvas = new OffscreenCanvas(image.width, image.height);
    let context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0);

    let layerSettings = createLayerSettings(imageName, context);
    let layer = this.addLayer(layerSettings);
    layer.addImage(ImageFile.fromResolvedContext(imageName, context));
  }

  exportSettings() {
    navigator.clipboard.writeText(JSON.stringify(
      this.#renderer.exportSettings(),
      /*replacer=*/undefined, /*space=*/2)
    );
  }

  loadFromFile(file) {
    if (typeof (file) == 'undefined') {
      return;
    }
    let file_reader = new FileReader();
    file_reader.addEventListener('load', () => {
      this.loadImage(file.name, file_reader.result);
    });
    file_reader.readAsDataURL(file);
  }

  setupHandlers() {
    let fileInput = document.getElementById('file');
    fileInput.addEventListener('change', () => {
      for (let file of fileInput.files) {
        this.loadFromFile(file);
      }
      fileInput.value = '';
    });
    document.getElementById('add_layer').addEventListener('click', () => {
      fileInput.click();
    });
    document.getElementById('export_settings').addEventListener('click', () => {
      this.exportSettings();
    });
  }

};

export { Gui };

