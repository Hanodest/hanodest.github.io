import { Layer } from './layer.js';
import { Renderer } from './renderer.js';
import { detectSpriteSize, loadImage } from './image.js';

class Gui {
  #renderer;
  #frame;
  #renderLoop;

  #controls;
  #sizeError;
  #canvas;
  #context;

  #imageDimensions;
  #sheetDimensions;

  constructor() {
    this.#renderer = new Renderer();

    this.#controls = document.getElementById('global_controls');
    this.#sizeError = document.getElementById('size_error');

    this.#canvas = document.getElementById('image');
    this.#context = this.#canvas.getContext('2d', { willReadFrequently: true });

    this.setupHandlers();
    this.reset();
  }

  reset() {
    this.#controls.classList.add('hidden');

    this.#frame = 0;
    this.#imageDimensions = undefined;
    this.#sheetDimensions = undefined;

    if (typeof (this.#renderLoop) != 'undefined') {
      clearTimeout(this.#renderLoop);
      this.#renderLoop = undefined;
    }

    this.#canvas.width = 256;
    this.#canvas.height = 256;
    this.#renderer.draw(this.#context, 0, 0, 255);
  }

  drawSprite() {
    let numRows = this.#sheetDimensions.numRows;
    let numColumns = this.#sheetDimensions.numColumns;
    let frame = (this.#frame++) % (numRows * numColumns);

    this.#canvas.width = Math.floor(this.#imageDimensions.width / this.#sheetDimensions.numColumns);
    this.#canvas.height = Math.floor(this.#imageDimensions.height / this.#sheetDimensions.numRows);

    let dx = this.#canvas.width * Math.floor(frame % numColumns);
    let dy = this.#canvas.height * Math.floor(frame / numColumns);
    let dayNight = parseInt(document.getElementById('day_night').value);
    this.#renderer.draw(this.#context, dx, dy, 255 - dayNight);

    let animationSpeed = parseInt(document.getElementById('animation_speed').value);
    this.#renderLoop = setTimeout(() => { this.drawSprite(); }, 1000 / animationSpeed);
  }

  addLayer(imageName, image) {
    let layer = new Layer(imageName, image);
    let layersSettings = document.getElementById('layers_settings');
    layersSettings.appendChild(layer.container);
    layer.addEventListener('delete', () => {
      layersSettings.removeChild(layer.container);
      this.#renderer.removeLayer(layer);
      if (layersSettings.childElementCount == 0) {
        this.reset();
      }
    });
    layer.addEventListener('moveLayer', (event) => {
      let dragStart = event.detail.dragStart;
      let dragEnd = event.detail.dragEnd;
      let moveFrom = layersSettings.children[dragStart];
      let moveTo = layersSettings.children[dragEnd + (dragStart < dragEnd ? 1 : 0)];
      if (typeof (moveTo) == 'undefined') {
        layersSettings.appendChild(moveFrom);
      } else {
        layersSettings.insertBefore(moveFrom, moveTo);
      }
      this.#renderer.moveLayer(dragStart, dragEnd);
    });
    this.#renderer.addLayer(layer);
  }

  async loadImage(imageName, imageUrl) {
    let image = await loadImage(imageUrl);

    if (typeof (this.#imageDimensions) == 'undefined') {
      this.#imageDimensions = {
        width: image.width,
        height: image.height
      };
      this.#sheetDimensions = detectSpriteSize(image);
      document.getElementById('num_rows').value = this.#sheetDimensions.numRows;
      document.getElementById('num_columns').value = this.#sheetDimensions.numColumns;
      this.#controls.classList.remove('hidden');
      setTimeout(() => { this.drawSprite(); }, 0);
    } else if (image.width != this.#imageDimensions.width ||
      image.height != this.#imageDimensions.height) {
      this.#sizeError.classList.remove('hidden');
      setTimeout(() => { this.#sizeError.classList.add('hidden'); }, 5000);
      return;
    }

    this.#sizeError.classList.add('hidden');
    this.addLayer(imageName, image);
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
    let file = document.getElementById('file');
    file.addEventListener('change', () => {
      this.loadFromFile(file.files[0]);
      file.value = '';
    });
    document.getElementById('add_layer').addEventListener('click', () => {
      file.click();
    });
    document.getElementById('num_rows').addEventListener('change', (event) => {
      let value = event.target.value;
      if (value != '') {
        this.#sheetDimensions.numRows = Math.max(1, Math.min(100, parseInt(value)));
      }
    });
    document.getElementById('num_columns').addEventListener('change', (event) => {
      let value = event.target.value;
      if (value != '') {
        this.#sheetDimensions.numColumns = Math.max(1, Math.min(100, parseInt(value)));
      }
    });
  }

};

export { Gui };

