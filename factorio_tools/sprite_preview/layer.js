import { Vector } from './vector.js';
import { BoundingBox } from './bounding_box.js';
import { detectSpriteSize } from './image.js';

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
    ['Glow', 'glow']
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
  #canvas;
  #context;

  #container;
  #blendMode;
  #drawMode;
  #tintColor;

  #fileName;
  #size;
  #shift;
  #lineLength;
  #frameCount;

  constructor(imageName, image) {
    super();
    this.#canvas = new OffscreenCanvas(image.width, image.height);
    this.#context = this.#canvas.getContext('2d', { 'willReadFrequently': true });
    this.#context.drawImage(image, 0, 0);

    this.#fileName = imageName;
    let [numRows, numColumns] = detectSpriteSize(
      this.#context.getImageData(0, 0, image.width, image.height));
    this.#lineLength = numColumns;
    this.#frameCount = numRows * numColumns;
    this.#size = new Vector(image.width / numColumns, image.height / numRows);
    this.#shift = new Vector(0, 0);

    this.#container = document.createElement('div');
    this.#container.classList.add('layer');
    this.#container.addEventListener('dragstart', (event) => {
      let elementIndex =
        Array.from(this.#container.parentNode.children).indexOf(this.#container);
      event.dataTransfer.setData("text/plain", elementIndex);
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
    label.innerText = imageName;
    label.classList.add('label-text');

    let dragBlock = document.createElement('div');
    dragBlock.classList.add('drag-block');

    let closeButton = document.createElement('div');
    closeButton.classList.add('close-icon');
    closeButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

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
    let framesRow = createDimensionsRow([
      'Frames:',
      createNumberInput(1, 1024, () => this.#frameCount, (f) => { this.#frameCount = f; }),
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
    this.#drawMode = createDrawSelect();
    this.#tintColor = document.createElement('input');
    this.#tintColor.type = 'color';
    this.#tintColor.value = '#ffffff';

    let colorControls = document.createElement('div');
    colorControls.classList.add('right-aligned');
    colorControls.replaceChildren(this.#tintColor, this.#drawMode, this.#blendMode);

    let layerSettings = document.createElement('div');
    layerSettings.classList.add('layer-settings');
    layerSettings.replaceChildren(dimensionsContainer, colorControls);

    this.#container.replaceChildren(labelRow, layerSettings);
  }

  draw(frame, boundingBox, image, lightmap) {
    frame = frame % this.#frameCount;
    let column = frame % this.#lineLength;
    let row = Math.floor(frame / this.#lineLength);
    let data = this.#context.getImageData(
      this.#size.x * column, this.#size.y * row, this.#size.x, this.#size.y);
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
