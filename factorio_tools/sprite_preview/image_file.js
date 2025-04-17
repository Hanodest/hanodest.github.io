import { loadImageFromFile } from './image.js';
import { Vector } from './vector.js';

class ImageFile extends EventTarget {
  #renderer;
  #imageId;
  #imageSize;
  #scale;

  #filename;
  #title;

  #container;

  constructor(renderer, filename, scale) {
    super();
    this.#renderer = renderer;
    this.#imageId = undefined;
    this.#imageSize = undefined;
    this.#scale = scale * 2;

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
      this.#imageSize = new Vector(image.width * this.#scale, image.height * this.#scale);
      this.#renderer.addImage(this.#imageId, image, this.#scale);
      this.#container.classList.remove('missing-file');
      this.dispatchEvent(new CustomEvent('loaded'));
    });
  }

  numFrames(size) {
    if (this.#imageId === undefined) {
      return 0;
    }
    let numColumns = Math.floor(this.#imageSize.x / size.x);
    let numRows = Math.floor(this.#imageSize.y / size.y);
    if (numColumns == 0 || numRows == 0) {
      return 0;
    }
    let lastRowLength = this.#renderer.getRowLength(this.#imageId, (numRows - 1) * size.y);
    return (numRows - 1) * numColumns + Math.ceil(lastRowLength / size.x);
  }

  static fromResolvedContext(renderer, filename, scale, context) {
    let result = new ImageFile(renderer, filename, scale);
    result.#container.classList.remove('missing-file');
    result.#imageId = crypto.randomUUID();
    result.#imageSize = new Vector(
      context.canvas.width * result.#scale, context.canvas.height * result.#scale);
    result.#renderer.addImage(result.#imageId, context.canvas, result.#scale);
    return result;
  }

  static fromFile(renderer, file, scale) {
    let result = new ImageFile(renderer, file.name, scale);
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
