import { detectLayerSettings, parseLayerSettings } from './layer_settings.js';
import { loadImage } from './image.js';
import { ImageFile } from './imageFile.js';
import { Layer } from './layer.js';
import { Renderer } from './renderer.js';

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

    if (this.#renderer.layers.length == 0) {
      this.reset();
    } else {
      this.#controls.classList.remove('hidden');
      if (this.#renderLoop === undefined) {
        this.#renderLoop = setTimeout(() => { this.drawSprite(); }, 0);
      }
    }
  }

  async loadImage(imageName, imageUrl) {
    let image = await loadImage(imageUrl);
    let canvas = new OffscreenCanvas(image.width, image.height);
    let context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0);

    let layerSettings = detectLayerSettings(imageName, context);
    let layer = this.addLayer(layerSettings);
    layer.addImage(ImageFile.fromResolvedContext(imageName, context));
  }

  exportSettings() {
    navigator.clipboard.writeText(JSON.stringify(
      this.#renderer.exportSettings(),
      /*replacer=*/undefined, /*space=*/2)
    );
  }

  importSettings() {
    try {
      navigator.clipboard.readText().then((text) => {
        let parsedSettings = parseLayerSettings(text);
        if (parsedSettings !== undefined) {
          this.#renderer.clear();
          parsedSettings.forEach((settings) => {
            this.addLayer(settings);
          });
          if (this.#renderer.layers.length == 0) {
            this.reset();
          }
        }
      });
    } catch (e) { }
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
    document.getElementById('import_settings').addEventListener('click', () => {
      this.importSettings();
    });
  }

};

export { Gui };

