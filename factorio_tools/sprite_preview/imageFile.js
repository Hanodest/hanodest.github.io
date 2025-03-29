import { loadImage } from './image.js';
import { Vector } from './vector.js';

class ImageFile extends EventTarget {
  #context;

  #filename;
  #title;

  #container;

  constructor(filename) {
    super();
    this.#context = undefined;

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
    let file_reader = new FileReader();
    file_reader.addEventListener('load', () => {
      loadImage(file_reader.result).then((image) => {
        this.#filename = file.name;
        this.#title.innerText = file.name;
        let canvas = new OffscreenCanvas(image.width, image.height);
        this.#context = canvas.getContext('2d', { willReadFrequently: true });
        this.#container.classList.remove('missing-file');
        this.#context.drawImage(image, 0, 0);
        this.dispatchEvent(new CustomEvent('loaded'));
      });
    });
    file_reader.readAsDataURL(file);
  }

  static fromResolvedContext(filename, context) {
    let result = new ImageFile(filename);
    result.#context = context;
    result.#container.classList.remove('missing-file');
    return result;
  }

  static fromFile(file) {
    let result = new ImageFile(file.name);
    result.reloadFromFile(file);
    return result;
  }

  get size() {
    if (typeof (this.#context) == 'undefined') {
      return undefined;
    }
    return new Vector(this.#context.canvas.width, this.#context.canvas.height);
  }

  get filename() {
    return this.#filename;
  }

  get container() {
    return this.#container;
  }

  get context() {
    return this.#context;
  }
};

export { ImageFile };
