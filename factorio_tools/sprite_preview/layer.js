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

class Layer extends EventTarget {
  #canvas;
  #context;

  #container;
  #blendMode;
  #drawMode;
  #tintColor;

  constructor(imageName, image) {
    super();
    this.#canvas = new OffscreenCanvas(image.width, image.height);
    this.#context = this.#canvas.getContext('2d', { 'willReadFrequently': true });
    this.#context.drawImage(image, 0, 0);

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

    let labelRow = document.createElement('div');
    labelRow.classList.add('box-dark', 'layer-controls');
    labelRow.replaceChildren(closeButton, dragBlock, label);
    labelRow.draggable = true;

    this.#blendMode = createBlendSelect();
    this.#drawMode = createDrawSelect();
    this.#tintColor = document.createElement('input');
    this.#tintColor.type = 'color';
    this.#tintColor.value = '#ffffff';

    let layerControls = document.createElement('div');
    layerControls.classList.add('layer-controls');
    layerControls.replaceChildren(this.#tintColor, this.#drawMode, this.#blendMode);

    this.#container.replaceChildren(labelRow, layerControls);
  }

  draw(image, lightmap, dx, dy, width, height) {
    let data = this.#context.getImageData(dx, dy, width, height);
    let drawMode = this.drawMode;

    if (drawMode == 'sprite' || drawMode == 'glow') {
      this.drawAsLayer(image, data);
    }

    if (drawMode == 'light' || drawMode == 'glow') {
      this.drawAsLight(lightmap, data);
    }
  }

  drawAsLayer(image, data) {
    let width = data.width;
    let height = data.height;
    let tint = this.tint;
    let blendMode = this.blendMode;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let srcAlpha = data.data[pos + 3] / 255;
        for (let channel = 0; channel < 3; channel++) {
          let src = data.data[pos + channel] * tint[channel] / 255;
          let dst = image[pos + channel];
          switch (blendMode) {
            case 'normal':
              image[pos + channel] = toUint8(src * srcAlpha + dst * (1 - srcAlpha));
              break;
            case 'additive':
              image[pos + channel] = toUint8(src * srcAlpha + dst);
              break;
            case 'additive-soft':
              image[pos + channel] = toUint8(src * srcAlpha * (1 - dst / 255) + dst);
              break;
            case 'multiplicative':
              image[pos + channel] = toUint8(src * srcAlpha * dst / 255);
              break;
            case 'multiplicative-with-alpha':
              image[pos + channel] = toUint8(src * srcAlpha * srcAlpha * dst / 255 +
                dst * (1 - srcAlpha));
              break;
            default:
              break;
          }
        }
      }
    }
  }

  drawAsLight(lightmap, data) {
    let width = data.width;
    let height = data.height;
    let tint = this.tint;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let pos = (width * y + x) * 4;
        let srcAlpha = data.data[pos + 3] / 255;
        for (let channel = 0; channel < 3; channel++) {
          let src = Math.floor(data.data[pos + channel] * tint[channel] * srcAlpha / 255);
          lightmap[pos + channel] = Math.min(lightmap[pos + channel] + src, 255);
        }
      }
    }
  }

  get data() {
    return this.#context.getImageData(0, 0, this.#canvas.width, this.#canvas.height);
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

  get container() {
    return this.#container;
  }
}

export { Layer };
