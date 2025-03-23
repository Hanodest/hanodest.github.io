import { BoundingBox } from './bounding_box.js';
import { ImageFile } from './imageFile.js';
import { Vector } from './vector.js';

function toUint8(x) {
  return Math.max(0, Math.min(255, Math.round(x)));
}

function createSelect(options) {
  let select = document.createElement('select');
  options.forEach((params) => {
    let option = document.createElement('option');
    option.label = params[0];
    option.value = params[1];
    select.appendChild(option);
  });

  return select;
}

function createBlendSelect() {
  return createSelect([
    ['Normal', 'normal'],
    ['Additive', 'additive'],
    ['Additive soft', 'additive-soft'],
    ['Multiplicative', 'multiplicative'],
    ['Multiplicative with alpha', 'multiplicative-with-alpha']
  ]);
}

function createDrawSelect() {
  return createSelect([
    ['Sprite', 'sprite'],
    ['Light', 'light'],
    ['Glow', 'glow'],
    ['Shadow', 'shadow'],
    ['Hidden', 'hidden'],
  ]);
}

function createNumberInput(min, max, get, set) {
  let result = document.createElement('input');
  result.type = 'number';
  result.min = min;
  result.max = max;
  result.value = get();
  result.addEventListener('change', () => {
    if (result.value == '') {
      result.value = get();
      return;
    }
    set(Math.max(min, Math.min(max, parseInt(result.value))));
  });
  return result;
}

function createDimensionsRow(elements) {
  let row = document.createElement('div');
  row.classList.add('dimensions-row');
  elements.forEach((e) => {
    let column = document.createElement('div');
    column.classList.add('dimensions-column');
    if (typeof (e) == 'string') {
      column.innerText = e;
    } else {
      column.appendChild(e);
    }
    row.appendChild(column);
  });
  return row;
}

class Layer extends EventTarget {
  #imageFiles;

  #container;
  #fileList;
  #fileListTitle;

  #blendMode;
  #drawMode;
  #tintColor;

  #size;
  #shift;
  #lineLength;
  #frameCount;
  #frameCountInput;

  constructor(settings) {
    super();
    this.#imageFiles = [];

    this.#lineLength = settings.lineLength;
    this.#frameCount = settings.frameCount;
    this.#size = settings.size;
    this.#shift = settings.shift;

    this.#container = document.createElement('div');
    this.#container.classList.add('layer');
    this.#container.addEventListener('dragstart', (event) => {
      let elementIndex =
        Array.from(this.#container.parentNode.children).indexOf(this.#container);
      event.dataTransfer.setData('text/plain', elementIndex);
    });
    this.#container.addEventListener('dragenter', (event) => {
      event.preventDefault();
    });
    this.#container.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    this.#container.addEventListener('drop', (event) => {
      let dragStartIndex = parseInt(event.dataTransfer.getData('text/plain'));
      let dragEndIndex =
        Array.from(this.#container.parentNode.children).indexOf(this.#container);
      if (dragStartIndex != dragEndIndex) {
        this.dispatchEvent(new CustomEvent('moveLayer', {
          detail: {
            dragStart: dragStartIndex,
            dragEnd: dragEndIndex
          }
        }));
      }
      event.preventDefault();
    });
    this.#container.classList.add('collapsed');

    let collapseButton = document.createElement('div');
    collapseButton.classList.add('collapse-icon');
    collapseButton.addEventListener('click', () => {
      this.#container.classList.toggle('collapsed');
    });

    let label = document.createElement('div');
    label.innerText = settings.title;
    label.classList.add('label-text');

    let dragBlock = document.createElement('div');
    dragBlock.classList.add('drag-block');

    let closeButton = document.createElement('div');
    closeButton.classList.add('close-icon');
    closeButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

    let fileListContainer = document.createElement('div');
    fileListContainer.classList.add('inner-collapsed');

    let fileListBar = document.createElement('div');
    fileListBar.classList.add('right-aligned');
    let fileCollapseButton = document.createElement('div');
    fileCollapseButton.classList.add('collapse-icon');
    fileCollapseButton.addEventListener('click', () => {
      fileListContainer.classList.toggle('inner-collapsed');
    });
    this.#fileListTitle = document.createElement('div');
    this.#fileListTitle.innerText = 'Spritesheets: 0';
    let addSpritesheetsInput = document.createElement('input');
    addSpritesheetsInput.type = 'file';
    addSpritesheetsInput.accept = 'image/*';
    addSpritesheetsInput.multiple = true;
    addSpritesheetsInput.addEventListener('change', () => {
      for (let file of addSpritesheetsInput.files) {
        this.addImage(ImageFile.fromFile(file));
      }
      addSpritesheetsInput.value = '';
    });
    let addSpritesheetsButton = document.createElement('div');
    addSpritesheetsButton.classList.add('add-icon');
    addSpritesheetsButton.addEventListener('click', () => {
      addSpritesheetsInput.click();
    });
    let deleteAllSpritesheets = document.createElement('div');
    deleteAllSpritesheets.classList.add('delete-icon');
    deleteAllSpritesheets.addEventListener('click', () => {
      this.#imageFiles = [];
      this.#fileList.replaceChildren();
      this.#fileListTitle.innerText = 'Spritesheets: 0';
      this.#frameCount = 0;
      this.#frameCountInput.value = this.#frameCount;
    });

    fileListBar.replaceChildren(
      deleteAllSpritesheets, addSpritesheetsButton, this.#fileListTitle, fileCollapseButton);

    this.#fileList = document.createElement('div');
    this.#fileList.classList.add('inner-collapsible');

    fileListContainer.replaceChildren(fileListBar, this.#fileList);

    let dimensionsTable = document.createElement('div');
    dimensionsTable.classList.add('dimensions-table');
    let sizeRow = createDimensionsRow([
      'Width:',
      createNumberInput(1, image.width, () => this.#size.x, (x) => { this.#size.x = x; }),
      'Height:',
      createNumberInput(1, image.height, () => this.#size.y, (y) => { this.#size.y = y; })
    ]);
    let shiftRow = createDimensionsRow([
      'Shift x:',
      createNumberInput(-1000, 1000, () => this.#shift.x, (x) => { this.#shift.x = x; }),
      'Shift y:',
      createNumberInput(-1000, 1000, () => this.#shift.y, (y) => { this.#shift.y = y; }),
    ]);
    this.#frameCountInput =
      createNumberInput(1, 1024, () => this.#frameCount, (f) => { this.#frameCount = f; });
    let framesRow = createDimensionsRow([
      'Frames:', this.#frameCountInput,
      'Per line:',
      createNumberInput(1, 64, () => this.#lineLength, (l) => { this.#lineLength = l; })
    ]);
    dimensionsTable.replaceChildren(sizeRow, shiftRow, framesRow);
    let dimensionsContainer = document.createElement('div');
    dimensionsContainer.classList.add('right-aligned');
    dimensionsContainer.appendChild(dimensionsTable);

    let labelRow = document.createElement('div');
    labelRow.classList.add('box-dark', 'right-aligned');
    labelRow.replaceChildren(closeButton, dragBlock, label, collapseButton);
    labelRow.draggable = true;

    this.#blendMode = createBlendSelect();
    this.#blendMode.value = settings.blendMode;
    this.#drawMode = createDrawSelect();
    this.#drawMode.value = settings.drawMode;
    this.#tintColor = document.createElement('input');
    this.#tintColor.type = 'color';
    this.#tintColor.value = settings.tint;

    let colorControls = document.createElement('div');
    colorControls.classList.add('right-aligned');
    colorControls.replaceChildren(this.#tintColor, this.#drawMode, this.#blendMode);

    let layerSettings = document.createElement('div');
    layerSettings.classList.add('collapsible');
    layerSettings.replaceChildren(fileListContainer, dimensionsContainer, colorControls);

    this.#container.replaceChildren(labelRow, layerSettings);
  }

  addImage(imageFile) {
    this.#imageFiles.push(imageFile);
    this.#fileList.appendChild(imageFile.container);
    this.#fileListTitle.innerText = 'Spritesheets: ' + this.#imageFiles.length;
    if (typeof (imageFile.context) != 'undefined') {
      this.updateFrameCount(imageFile.context.canvas.height);
    }

    imageFile.addEventListener('loaded', () => {
      if (typeof (imageFile.context) != 'undefined') {
        this.updateFrameCount(imageFile.context.canvas.height);
      }
    });
    imageFile.addEventListener('delete', () => {
      this.#imageFiles = this.#imageFiles.filter((f) => f !== imageFile);
      this.#fileList.removeChild(imageFile.container);
      this.#fileListTitle.innerText = 'Spritesheets: ' + this.#imageFiles.length;
      if (typeof (imageFile.context) != 'undefined') {
        this.updateFrameCount(-imageFile.context.canvas.height);
      }
    });
  }

  updateFrameCount(imgHeight) {
    let frameDiff = Math.trunc(imgHeight / this.#size.y) * this.#lineLength;
    this.#frameCount = Math.max(0, this.#frameCount + frameDiff);
    this.#frameCountInput.value = this.#frameCount;
  }

  getFrameData(frame) {
    frame = frame % this.#frameCount;
    let column = frame % this.#lineLength;
    let row = Math.floor(frame / this.#lineLength);
    for (let i = 0; i < this.#imageFiles.length; i++) {
      let context = this.#imageFiles[i].context;
      if (typeof (context) == 'undefined') {
        continue;
      }
      let numFileRows = Math.floor(context.canvas.height / this.#size.y);
      if (row < numFileRows) {
        return context.getImageData(
          this.#size.x * column, this.#size.y * row, this.#size.x, this.#size.y);
      }
      row -= numFileRows;
    }
  }

  draw(frame, boundingBox, image, lightmap) {
    let data = this.getFrameData(frame);
    if (typeof (data) == 'undefined') {
      return;
    }
    let shift = this.boundingBox.topLeft.subtract(boundingBox.topLeft);
    let drawMode = this.drawMode;
    if (drawMode == 'sprite' || drawMode == 'glow') {
      this.drawAsLayer(data, shift, image);
    }

    if (drawMode == 'light' || drawMode == 'glow') {
      this.drawAsLight(data, shift, lightmap);
    }
  }

  drawAsLayer(data, shift, image) {
    let width = data.width;
    let height = data.height;
    let tint = this.tint;
    let blendMode = this.blendMode;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let dstPos = (image.width * (y + shift.y) + (x + shift.x)) * 4;
        let srcAlpha = data.data[pos + 3] / 255;
        for (let channel = 0; channel < 3; channel++) {
          let src = data.data[pos + channel] * tint[channel] / 255;
          let dst = image.data[dstPos + channel];
          switch (blendMode) {
            case 'normal':
              image.data[dstPos + channel] = toUint8(src * srcAlpha + dst * (1 - srcAlpha));
              break;
            case 'additive':
              image.data[dstPos + channel] = toUint8(src * srcAlpha + dst);
              break;
            case 'additive-soft':
              image.data[dstPos + channel] = toUint8(src * srcAlpha * (1 - dst / 255) + dst);
              break;
            case 'multiplicative':
              image.data[dstPos + channel] = toUint8(src * srcAlpha * dst / 255);
              break;
            case 'multiplicative-with-alpha':
              image.data[dstPos + channel] = toUint8(src * srcAlpha * srcAlpha * dst / 255 +
                dst * (1 - srcAlpha));
              break;
            default:
              break;
          }
        }
      }
    }
  }

  drawAsLight(data, shift, lightmap) {
    let width = data.width;
    let height = data.height;
    let tint = this.tint;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let dstPos = (lightmap.width * (y + shift.y) + (x + shift.x)) * 4;
        let srcAlpha = data.data[pos + 3] / 255;
        for (let channel = 0; channel < 3; channel++) {
          let src = Math.floor(data.data[pos + channel] * tint[channel] * srcAlpha / 255);
          lightmap.data[dstPos + channel] = Math.min(lightmap.data[dstPos + channel] + src, 255);
        }
      }
    }
  }

  drawShadow(frame, boundingBox, shadowmap) {
    if (this.drawMode != 'shadow') {
      return;
    }
    let data = this.getFrameData(frame);
    if (typeof (data) == 'undefined') {
      return;
    }
    let width = data.width;
    let height = data.height;
    let shift = this.boundingBox.topLeft.subtract(boundingBox.topLeft);
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let dstPos = (shadowmap.width * (y + shift.y) + (x + shift.x)) * 4;
        if (data.data[pos + 3] > 127) {
          shadowmap.data[dstPos + 3] = 1;
        }
      }
    }
  }

  get blendMode() {
    return this.#blendMode.value;
  }

  get drawMode() {
    return this.#drawMode.value;
  }

  get tint() {
    let color = this.#tintColor.value;
    return [
      parseInt(color.substring(1, 3), 16),
      parseInt(color.substring(3, 5), 16),
      parseInt(color.substring(5, 7), 16)
    ]
  }

  get boundingBox() {
    let center = new Vector(this.#size.x >> 1, this.#size.y >> 1);
    return new BoundingBox(
      this.#shift.subtract(center), this.#size.add(this.#shift).subtract(center));
  }

  get container() {
    return this.#container;
  }
}

export { Layer };
