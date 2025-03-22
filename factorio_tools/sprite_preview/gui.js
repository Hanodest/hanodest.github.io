import { Layer } from './layer.js';
import { Renderer } from './renderer.js';
import { loadImage } from './image.js';

class Gui {
  #renderer;
  #frame;
  #renderLoop;

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

    this.#canvas = document.getElementById('image');
    this.#context = this.#canvas.getContext('2d', { willReadFrequently: true });

    this.setupHandlers();
    this.reset();
  }

  reset() {
    this.#controls.classList.add('hidden');

    this.#frame = 0;

    if (typeof (this.#renderLoop) != 'undefined') {
      clearTimeout(this.#renderLoop);
      this.#renderLoop = undefined;
    }

    this.#renderer.draw(/*frame=*/0, /*light=*/255, this.#context);
  }

  drawSprite() {
    let dayNight = parseInt(document.getElementById('day_night').value);
    this.#renderer.draw(this.#frame++, 255 - dayNight, this.#context);

    let animationSpeed = parseInt(this.#animationSpeed.value);
    this.#renderLoop = setTimeout(() => { this.drawSprite(); }, 1000 / animationSpeed);
  }

  addLayer(imageName, image) {
    let layer = new Layer(imageName, image);
    this.#layersSettings.appendChild(layer.container);
    layer.addEventListener('delete', () => {
      this.#layersSettings.removeChild(layer.container);
      this.#renderer.removeLayer(layer);
      if (this.#layersSettings.childElementCount == 0) {
        this.reset();
      }
    });
    layer.addEventListener('moveLayer', (event) => {
      let dragStart = event.detail.dragStart;
      let dragEnd = event.detail.dragEnd;
      let moveFrom = this.#layersSettings.children[dragStart];
      let moveTo = this.#layersSettings.children[dragEnd + (dragStart < dragEnd ? 1 : 0)];
      if (typeof (moveTo) == 'undefined') {
        this.#layersSettings.appendChild(moveFrom);
      } else {
        this.#layersSettings.insertBefore(moveFrom, moveTo);
      }
      this.#renderer.moveLayer(dragStart, dragEnd);
    });
    this.#renderer.addLayer(layer);
  }

  async loadImage(imageName, imageUrl) {
    let image = await loadImage(imageUrl);
    if (this.#layersSettings.childElementCount == 0) {
      this.#controls.classList.remove('hidden');
      setTimeout(() => { this.drawSprite(); }, 0);
    }
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
  }

};

export { Gui };

