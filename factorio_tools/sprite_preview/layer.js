import { BoundingBox } from './bounding_box.js';
import { ImageFile } from './imageFile.js';
import { NumberInput } from './numberInput.js';
import { Vector } from './vector.js';

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
  ]);
}

function createDimensionsRow(elements) {
  let row = document.createElement('div');
  row.classList.add('dimensions-row');
  elements.forEach((e) => {
    let column = document.createElement('div');
    column.classList.add('dimensions-column');
    column.appendChild(e.container);
    row.appendChild(column);
  });
  return row;
}

class Layer extends EventTarget {
  #hidden;
  #layerName;
  #imageFiles;
  #renderer;

  #container;
  #fileList;
  #fileListTitle;

  #blendMode;
  #drawMode;
  #tintColor;

  #scale;
  #sizeX;
  #sizeY;
  #shiftX;
  #shiftY;
  #lineLength;
  #linesPerFile;
  #frameCount;

  constructor(settings, renderer) {
    super();
    this.#hidden = false;
    this.#imageFiles = [];
    this.#renderer = renderer;

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

    let hideButton = document.createElement('div');
    hideButton.classList.add('eye-icon');
    hideButton.addEventListener('click', () => {
      this.#hidden = !this.#hidden;
      hideButton.classList.toggle('layer-hidden', this.#hidden);
    });

    this.#layerName = settings.filename;
    let label = document.createElement('div');
    label.innerText = this.#layerName;
    label.classList.add('label-text');

    let dragBlock = document.createElement('div');
    dragBlock.classList.add('drag-block');

    let closeButton = document.createElement('div');
    closeButton.classList.add('close-icon-small');
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
        this.addImage(ImageFile.fromFile(this.#renderer, file, this.scale));
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
      this.#frameCount.reset(0);
    });

    fileListBar.replaceChildren(
      deleteAllSpritesheets, addSpritesheetsButton, this.#fileListTitle, fileCollapseButton);

    this.#fileList = document.createElement('div');
    this.#fileList.classList.add('inner-collapsible');

    fileListContainer.replaceChildren(fileListBar, this.#fileList);

    let dimensionsTable = document.createElement('div');
    dimensionsTable.classList.add('dimensions-table');

    this.#scale = settings.scale || 0.5;
    this.#sizeX = new NumberInput('Width:', 1, 2048, settings.size.x * this.#scale * 2);
    this.#sizeX.addEventListener('change', () => { this.#updateDimensions(); });
    this.#sizeY = new NumberInput('Height:', 1, 2048, settings.size.y * this.#scale * 2);
    this.#sizeY.addEventListener('change', () => { this.#updateDimensions(); });
    this.#shiftX = new NumberInput('Shift x:', -1024, 1024, settings.shift.x);
    this.#shiftY = new NumberInput('Shift y:', -1024, 1024, settings.shift.y);

    this.#lineLength = new NumberInput('Columns:', 1, 64, settings.lineLength);
    this.#lineLength.addEventListener('change', () => { this.#updateSize(); });
    this.#linesPerFile = new NumberInput('Rows:', 1, 64, settings.lineLength);
    this.#linesPerFile.addEventListener('change', () => { this.#updateSize(); });
    this.#frameCount = new NumberInput('Frames:', 1, 1024, settings.frameCount);

    let sizeRow = createDimensionsRow([this.#sizeX, this.#sizeY, this.#shiftX, this.#shiftY]);
    let framesRow = createDimensionsRow([this.#lineLength, this.#linesPerFile, this.#frameCount]);

    dimensionsTable.replaceChildren(sizeRow, framesRow);
    let dimensionsContainer = document.createElement('div');
    dimensionsContainer.classList.add('right-aligned');
    dimensionsContainer.appendChild(dimensionsTable);

    let labelRow = document.createElement('div');
    labelRow.classList.add('box-dark', 'right-aligned');
    labelRow.replaceChildren(closeButton, dragBlock, label, collapseButton, hideButton);
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

    settings.filenames.forEach((filename) => {
      this.addImage(new ImageFile(this.#renderer, filename, this.scale));
    });
  }

  addImage(imageFile) {
    this.#imageFiles.push(imageFile);
    this.#fileList.appendChild(imageFile.container);
    this.#fileListTitle.innerText = 'Spritesheets: ' + this.#imageFiles.length;
    this.#updateFrameCount();
    imageFile.addEventListener('loaded', () => {
      this.#updateFrameCount();
    });
    imageFile.addEventListener('delete', () => {
      this.#imageFiles = this.#imageFiles.filter((f) => f !== imageFile);
      this.#fileList.removeChild(imageFile.container);
      this.#fileListTitle.innerText = 'Spritesheets: ' + this.#imageFiles.length;
      this.#updateFrameCount();
    });
  }

  tryResolveImage(file) {
    for (let imageFile of this.#imageFiles) {
      if (imageFile.context === undefined && imageFile.filename == file.name) {
        imageFile.reloadFromFile(file);
        return true;
      }
    }
    return false;
  }

  #updateDimensions() {
    let size = this.#getSpritesheetSize();
    if (typeof (size) == 'undefined') {
      return;
    }
    this.#lineLength.safe_reset(Math.floor(size.x / this.#sizeX.value));
    this.#linesPerFile.safe_reset(Math.floor(size.y / this.#sizeY.value));
    this.#updateFrameCount();
  }

  #updateSize() {
    let size = this.#getSpritesheetSize();
    if (typeof (size) == 'undefined') {
      return;
    }
    this.#sizeX.safe_reset(Math.floor(size.x / this.#lineLength.value));
    this.#sizeY.safe_reset(Math.floor(size.y / this.#linesPerFile.value));
    this.#updateFrameCount();
  }

  #updateFrameCount() {
    let count = 0;
    this.#imageFiles.forEach((image) => {
      let size = image.size;
      if (typeof (size) != 'undefined') {
        count += Math.floor(size.y / this.#size.y);
      }
    });
    this.#frameCount.reset(count * this.#lineLength.value);
  }

  #getSpritesheetSize() {
    if (typeof (this.#imageFiles[0]) == 'undefined') {
      return undefined;
    }
    return this.#imageFiles[0].size;
  }

  getSprite(frame) {
    if (this.#hidden) {
      return undefined;
    }
    frame = frame % this.#frameCount.value;
    let column = frame % this.#lineLength.value;
    let row = Math.floor(frame / this.#lineLength.value);
    let imageFile = this.#imageFiles[Math.trunc(row / this.#linesPerFile.value)];
    if (typeof (imageFile) == 'undefined' || typeof (imageFile.imageId) == 'undefined') {
      return undefined;
    }
    row = row % this.#linesPerFile.value;
    return {
      imageId: imageFile.imageId,
      shift: new Vector(this.#size.x * column, this.#size.y * row),
      size: new Vector(this.#size.x, this.#size.y)
    };
  }

  exportSettings() {
    if (this.drawMode == 'hidden') {
      return undefined;
    }
    let result = {
      'priority': 'high',
      'scale': this.#scale,
      'filename': this.#layerName,
      'filenames': this.#imageFiles.map((f) => f.filename),
      'blend_mode': this.blendMode,
      'width': Math.round(this.#size.x / (this.#scale * 2)),
      'height': Math.round(this.#size.y / (this.#scale * 2)),
      'line_length': this.#lineLength.value,
      'lines_per_file': this.#linesPerFile.value,
      'frame_count': this.#frameCount.value,
      'shift': [
        (this.#shift.x + (this.#size.x % 2) / 2) / 64,
        (this.#shift.y + (this.#size.y % 2) / 2) / 64
      ]
    };
    if (this.drawMode == 'light') {
      result['draw_as_light'] = true;
    } else if (this.drawMode == 'glow') {
      result['draw_as_glow'] = true;
    } else if (this.drawMode == 'shadow') {
      result['draw_as_shadow'] = true;
    }
    result.tint = this.tint.map((color) => color / 255);
    result.tint.push(1);
    return result;
  }

  get #size() {
    return new Vector(this.#sizeX.value, this.#sizeY.value);
  }

  get #shift() {
    return new Vector(this.#shiftX.value, this.#shiftY.value);
  }

  get name() {
    return this.#layerName;
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
      parseInt(color.substring(5, 7), 16),
      255
    ]
  }

  get scale() {
    return this.#scale;
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

export { Layer, createBlendSelect, createDrawSelect };
