import { loadImageFromFile } from './image.js';
import { Vector } from './vector.js';

class ImageFile extends EventTarget {
  #renderer;
  #imageId;
  #imageSize;

  #filename;
  #title;

  #container;

  constructor(renderer, filename) {
    super();
    this.#renderer = renderer;
    this.#imageId = undefined;
    this.#imageSize = undefined;

    this.#filename = filename;

    this.#title = document.createElement('div');
    this.#title.classList.add('file-name');
    this.#title.innerText = this.#filename;

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-icon');
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', () => {
      this.reloadFromFile(fileInput.files[0]);
      fileInput.value = '';
    });
    let replaceButton = document.createElement('div');
    replaceButton.classList.add('replace-icon');
    replaceButton.addEventListener('click', () => {
      fileInput.click();
    });

    this.#container = document.createElement('div');
    this.#container.classList.add('image-file', 'right-aligned', 'missing-file');
    this.#container.replaceChildren(deleteButton, replaceButton, this.#title);
  }

  reloadFromFile(file) {
    if (typeof (file) == 'undefined') {
      return;
    }
    loadImageFromFile(file).then((image) => {
      this.#filename = file.name;
      this.#title.innerText = file.name;
      if (this.#imageId === undefined) {
        this.#imageId = crypto.randomUUID();
      }
      this.#imageSize = new Vector(image.width, image.height);
      this.#renderer.addImage(this.#imageId, image);
      this.#container.classList.remove('missing-file');
      this.dispatchEvent(new CustomEvent('loaded'));
    });
  }

  static fromResolvedContext(renderer, filename, context) {
    let result = new ImageFile(renderer, filename);
    result.#container.classList.remove('missing-file');
    result.#imageId = crypto.randomUUID();
    result.#imageSize = new Vector(context.canvas.width, context.canvas.height);
    result.#renderer.addImage(result.#imageId, context.canvas);
    return result;
  }

  static fromFile(renderer, file) {
    let result = new ImageFile(renderer, file.name);
    result.reloadFromFile(file);
    return result;
  }

  get size() {
    return this.#imageSize;
  }

  get filename() {
    return this.#filename;
  }

  get container() {
    return this.#container;
  }

  get imageId() {
    return this.#imageId;
  }
};

export { ImageFile };
