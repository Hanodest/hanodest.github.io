import { basename } from './util.js';
import { detectLayerSettings } from './layer_settings.js';
import { loadImageFromFile } from './image.js';
import { ImageFile } from './imageFile.js';
import { Layer } from './layer.js';
import { Renderer } from './renderer.js';
import { ExportUi } from './export_ui.js';
import { ImportUi } from './import_ui.js';
import { UserSettings } from './user_settings.js';

class Gui {
  #renderer;
  #frame;
  #paused;
  #renderLoop;

  #background;
  #controls;
  #animationSpeed;
  #pauseButton;
  #layersSettings;
  #canvas;
  #context;

  #exportUi;
  #importUi;
  #userSettings;

  constructor(renderer) {
    this.#renderer = renderer;

    this.#controls = document.getElementById('global_controls');
    this.#layersSettings = document.getElementById('layers_settings');
    this.#animationSpeed = document.getElementById('animation_speed');
    this.#animationSpeed.addEventListener('dblclick', () => {
      this.#animationSpeed.value = this.#userSettings.animationSpeed;
    });

    document.getElementById('previous_button').addEventListener('click', () => {
      this.#frame--;
    });
    this.#pauseButton = document.getElementById('pause_button');
    this.#pauseButton.addEventListener('click', () => {
      this.#paused = !this.#paused;
      this.#pauseButton.classList.toggle('paused', this.#paused);
    });
    document.getElementById('next_button').addEventListener('click', () => {
      this.#frame++
    });

    this.#background = document.getElementById('background');

    this.#canvas = document.getElementById('image');
    this.#context = this.#canvas.getContext('2d', { willReadFrequently: true });

    this.#exportUi = new ExportUi();
    this.#importUi = new ImportUi();
    this.#importUi.addEventListener('settingsImported', (event) => {
      this.importSettings(event.detail);
    });
    this.#userSettings = new UserSettings();
    this.#userSettings.addEventListener('settingsUpdated', () => {
      this.#layersSettings.classList.toggle('inverted-order', this.#userSettings.invertLayerOrder);
    });
    this.#layersSettings.classList.toggle('inverted-order', this.#userSettings.invertLayerOrder);
    this.#animationSpeed.value = this.#userSettings.animationSpeed;

    this.setupHandlers();
    this.reset();
  }

  reset() {
    this.#controls.classList.add('hidden');

    this.#frame = 0;
    this.#paused = false;
    this.#pauseButton.classList.toggle('paused', false);
    this.#pauseButton
    this.#background.value = 'lab';

    if (typeof (this.#renderLoop) != 'undefined') {
      clearTimeout(this.#renderLoop);
      this.#renderLoop = undefined;
    }

    this.#renderer.draw(/*frame=*/0, /*daytime=*/0, this.#background.value, this.#context);
  }

  drawSprite() {
    let dayNight = parseInt(document.getElementById('day_night').value);
    let frameStart = performance.now();
    this.#renderer.draw(this.#frame, dayNight / 256, this.#background.value, this.#context);
    let frameEnd = performance.now();

    if (this.#paused) {
      this.#renderLoop = setTimeout(() => { this.drawSprite(); }, 0);
    } else {
      this.#frame++;
      let animationSpeed = parseInt(this.#animationSpeed.value);
      this.#renderLoop = setTimeout(() => { this.drawSprite(); },
        Math.max(0, 1000 / animationSpeed - (frameEnd - frameStart)));
    }
  }

  addLayer(layerSettings) {
    let layer = new Layer(layerSettings, this.#renderer);
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

  loadImage(imageName, imageRule, image) {
    let canvas = new OffscreenCanvas(image.width, image.height);
    let context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0);

    let layerSettings = detectLayerSettings(imageName, imageRule, context);
    let layer = this.addLayer(layerSettings);
    layer.addImage(ImageFile.fromResolvedContext(
      this.#renderer, imageName, layer.scale, context));
  }

  importSettings(parsedSettings) {
    this.#renderer.clear();
    parsedSettings.forEach((settings) => {
      this.addLayer(settings);
    });
    if (this.#renderer.layers.length == 0) {
      this.reset();
    }
  }

  async loadFromFile(file) {
    for (let layer of this.#renderer.layers) {
      if (layer.tryResolveImage(file)) {
        return;
      }
    }
    let filename = basename(file.name);
    let imageRule = this.#userSettings.getImageRule(filename);
    if (imageRule.serialized.ignore) {
      return;
    }
    let layerName = imageRule.getLayerName(filename);
    for (let layer of this.#renderer.layers) {
      if (layer.name === layerName) {
        layer.addImage(ImageFile.fromFile(this.#renderer, file, layer.scale));
        return;
      }
    }
    this.loadImage(filename, imageRule, await loadImageFromFile(file));
  }

  setupHandlers() {
    let fileInput = document.getElementById('file');
    fileInput.addEventListener('change', async () => {
      for (let file of fileInput.files) {
        await this.loadFromFile(file);
      }
      fileInput.value = '';
    });
    document.getElementById('add_layer').addEventListener('click', () => {
      fileInput.click();
    });
    document.getElementById('export_settings').addEventListener('click', () => {
      this.#exportUi.show(this.#renderer.exportSettings());
    });
    document.getElementById('import_settings').addEventListener('click', () => {
      this.#importUi.show();
    });
    document.getElementById('user_settings').addEventListener('click', () => {
      this.#userSettings.show();
    });
  }

  static async create() {
    let render = await Renderer.create();
    return new Gui(render);
  }

};

export { Gui };

