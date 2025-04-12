import { clamp } from './util.js';
import { Vector } from './vector.js';
import { NumberInput } from './numberInput.js';

const EPS = 1e-7;

function toHsva(rgba_color) {
  const red = rgba_color[0] / 255;
  const green = rgba_color[1] / 255;
  const blue = rgba_color[2] / 255;

  let value = Math.max(red, green, blue);
  let min = Math.min(red, green, blue);
  let chroma = value - min;

  let saturation;
  if (value < EPS) {
    saturation = 0.0;
  } else {
    saturation = chroma / value;
  }

  let hue;
  if (saturation < EPS) {
    hue = 0.0;
  } else {
    if (Math.abs(red - value) < EPS) {
      hue = (green - blue) / chroma;
      if (hue < 0.0) {
        hue += 6.0;
      }
    } else if (Math.abs(green - value) < EPS) {
      hue = 2.0 + (blue - red) / chroma;
    } else {
      hue = 4.0 + (red - green) / chroma;
    }
    hue /= 6.0;
  }

  return [hue, saturation, value, rgba_color[3] / 255];
}

function toRgba(hsva_color) {
  let hue = hsva_color[0];
  let saturation = hsva_color[1];
  let value = hsva_color[2];
  let red = 0, green = 0, blue = 0;

  let h_tmp = hue % 1.0;
  h_tmp += h_tmp < 0.0 ? 1 : 0;
  h_tmp *= 6.0;

  let chroma = saturation * value;
  let x = chroma * (1.0 - Math.abs(h_tmp % 2.0 - 1.0));

  if (h_tmp < 1.0) {
    red = chroma;
    green = x;
  } else if (h_tmp < 2.0) {
    red = x;
    green = chroma;
  } else if (h_tmp < 3.0) {
    green = chroma;
    blue = x;
  } else if (h_tmp < 4.0) {
    green = x;
    blue = chroma;
  } else if (h_tmp < 5.0) {
    red = x;
    blue = chroma;
  } else if (h_tmp < 6.0) {
    red = chroma;
    blue = x;
  }

  let min = value - chroma;
  red += min;
  green += min;
  blue += min;

  return [
    clamp(Math.floor(red * 255), 0, 255),
    clamp(Math.floor(green * 255), 0, 255),
    clamp(Math.floor(blue * 255), 0, 255),
    clamp(Math.floor(hsva_color[3] * 255), 0, 255)
  ];
}

function lerp(weight, color1, color2) {
  return [
    color1[0] * weight + color2[0] * (1 - weight),
    color1[1] * weight + color2[1] * (1 - weight),
    color1[2] * weight + color2[2] * (1 - weight),
    color1[3] * weight + color2[3] * (1 - weight)
  ];
}

const INNER_RADIUS = 96;
const CIRCLE_WIDTH = 24;
const OUTER_RADIUS = INNER_RADIUS + CIRCLE_WIDTH;
const SIZE = 256;
const PI = 4 * Math.atan(1);
const SQRT3 = Math.sqrt(3);

function distToCircle(x, y) {
  let radius = Math.sqrt(x * x + y * y);
  if (radius >= INNER_RADIUS && radius <= OUTER_RADIUS) {
    return 0;
  } else if (radius < INNER_RADIUS) {
    return INNER_RADIUS - radius;
  } else {
    return radius - OUTER_RADIUS;
  }
}

function distToTriangle(x, y) {
  return Math.max(0, Math.max(2 * y, -x * SQRT3 - y, x * SQRT3 - y) - INNER_RADIUS + 2);
}

function inRectangle(x, y) {
  return x >= OUTER_RADIUS + 0.5 * CIRCLE_WIDTH &&
    x < OUTER_RADIUS + 1.5 * CIRCLE_WIDTH &&
    y >= -OUTER_RADIUS && y <= OUTER_RADIUS;
}

function getHue(x, y) {
  return Math.atan2(y, x) / 2 / PI;
}

function getSaturation(x, y) {
  return x / (y + INNER_RADIUS) * SQRT3 / 2 + 0.5;
}

function getValue(x, y) {
  return (y / INNER_RADIUS + 1) / 1.5;
}

function getAlpha(x, y) {
  return clamp(y / OUTER_RADIUS / 2 + 0.5, 0, 1);
}

class PickerUi extends EventTarget {
  #container;
  #canvas;
  #context;

  #picker;

  #red;
  #green;
  #blue;
  #alpha;

  #hsva;

  #selectMode;

  constructor() {
    super();
    window.document.addEventListener('mousedown', (e) => {
      for (let element = e.target; element !== null; element = element.parentElement) {
        if (element === this.#container) {
          return;
        }
      }
      this.#detach();
    }, false);
    this.#hsva = [0, 1, 1, 1];
    this.#selectMode = undefined;

    this.#canvas = document.createElement('canvas');
    this.#canvas.width = SIZE + 36;
    this.#canvas.height = SIZE;
    this.#canvas.addEventListener('mousedown', (e) => {
      this.#mouseDown(e);
    });
    this.#canvas.addEventListener('mousemove', (e) => {
      this.#mouseMove(e);
    });
    this.#canvas.addEventListener('mouseup', (e) => {
      this.#mouseUp(e);
    });
    this.#canvas.addEventListener('mouseleave', (e) => {
      this.#mouseUp(e);
    });
    this.#context = this.#canvas.getContext('2d');

    let applyRgba = () => {
      this.#updateHsva();
      this.#draw();
    };
    this.#red = new NumberInput('r', 0, 255, 255);
    this.#red.addEventListener('change', applyRgba);
    this.#red.addEventListener('input', applyRgba);
    this.#green = new NumberInput('g', 0, 255, 255);
    this.#green.addEventListener('change', applyRgba);
    this.#green.addEventListener('input', applyRgba);
    this.#blue = new NumberInput('b', 0, 255, 255);
    this.#blue.addEventListener('change', applyRgba);
    this.#blue.addEventListener('input', applyRgba);
    this.#alpha = new NumberInput('a', 0, 255, 255);
    this.#alpha.addEventListener('change', applyRgba);
    this.#alpha.addEventListener('input', applyRgba);

    let inputs = document.createElement('div');
    inputs.classList.add('flex-horizontal', 'flex-spaced');
    inputs.replaceChildren(
      this.#red.container, this.#green.container,
      this.#blue.container, this.#alpha.container);

    let innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-frame');
    innerContainer.replaceChildren(this.#canvas, inputs);

    this.#container = document.createElement('div');
    this.#container.classList.add('color-picker-popup', 'outer-frame');
    this.#container.replaceChildren(innerContainer);
  }

  #mouseDown(e) {
    let x = e.offsetX - SIZE / 2;
    let y = e.offsetY - SIZE / 2;
    if (distToCircle(x, y) < EPS) {
      this.#hsva[0] = getHue(x, y);
      this.#selectMode = 'hue';
    } else if (distToTriangle(x, y) < EPS) {
      this.#hsva[1] = getSaturation(x, y);
      this.#hsva[2] = getValue(x, y);
      this.#selectMode = 'saturationValue';
    } else if (inRectangle(x, y)) {
      this.#hsva[3] = getAlpha(x, y);
      this.#selectMode = 'alpha';
    } else {
      return;
    }
    this.#updateRgba();
    this.#draw();
  }

  #mouseMove(e) {
    let x = e.offsetX - SIZE / 2;
    let y = e.offsetY - SIZE / 2;
    if (this.#selectMode === 'hue') {
      this.#hsva[0] = getHue(x, y);
    } else if (this.#selectMode === 'saturationValue') {
      let vector = new Vector(x, y);
      if (distToTriangle(x, y) < EPS) {
        this.#hsva[1] = getSaturation(x, y);
        this.#hsva[2] = getValue(x, y);
      } else if (y >= INNER_RADIUS / 2) {
        this.#hsva[1] = clamp(x / INNER_RADIUS / SQRT3 + 0.5, 0, 1);
        this.#hsva[2] = 1;
      } else if (x > 0) {
        this.#hsva[1] = 1;
        this.#hsva[2] = clamp(vector.smul(new Vector(0.5 / SQRT3, 0.5)) / INNER_RADIUS + 0.5, 0, 1);
      } else {
        this.#hsva[1] = 0;
        this.#hsva[2] = clamp(vector.smul(new Vector(-0.5 / SQRT3, 0.5)) / INNER_RADIUS + 0.5, 0, 1);
      }
    } else if (this.#selectMode == 'alpha') {
      this.#hsva[3] = clamp(getAlpha(x, y), 0, 1);
    } else {
      return;
    }
    this.#updateRgba();
    this.#draw();
  }

  #mouseUp(e) {
    this.#selectMode = undefined;
  }

  #updateRgba() {
    let rgba = toRgba(this.#hsva);
    this.#red.reset(rgba[0]);
    this.#green.reset(rgba[1]);
    this.#blue.reset(rgba[2]);
    this.#alpha.reset(rgba[3]);
    this.#picker.value = rgba;
  }

  #updateHsva() {
    let rgba = this.value;
    this.#hsva = toHsva(rgba);
    this.#picker.value = rgba;
  }

  #draw() {
    let data = new ImageData(this.#canvas.width, this.#canvas.height);
    let hueDirection = new Vector(
      Math.cos(this.#hsva[0] * 2 * PI), Math.sin(this.#hsva[0] * 2 * PI));
    let saturationValuePosition = new Vector(
      (this.#hsva[1] - 0.5) * 2 / SQRT3 * this.#hsva[2] * 1.5 * INNER_RADIUS,
      (this.#hsva[2] * 1.5 - 1) * INNER_RADIUS);

    for (let y = -128; y < 128; y++) {
      for (let x = -128; x < 128 + 36; x++) {
        let idx = ((y + 128) * this.#canvas.width + (x + 128)) * 4;
        let circleDist = distToCircle(x, y);
        let triangleDist = distToTriangle(x, y);
        if (circleDist < 1) {
          let hue = getHue(x, y);
          let hueDist = Math.abs(hueDirection.vmul(new Vector(x, y)));
          let color = toRgba([hue, 1, 1, 255]);
          if (hueDist < 2 && hueDirection.smul(new Vector(x, y)) > 0) {
            color = lerp(hueDist / 2, color, [0, 0, 0, 255]);
          }
          data.data.set(lerp(circleDist, [48, 48, 48, 255], color), idx);
        } else if (triangleDist < 1) {
          let color = toRgba([this.#hsva[0], getSaturation(x, y), getValue(x, y), 255]);
          let svVector = saturationValuePosition.subtract(new Vector(x, y));
          let svDist = Math.sqrt(svVector.smul(svVector));
          if (Math.abs(svDist - 4) < 2) {
            color = lerp(Math.abs(svDist - 4) / 2, color,
              this.#hsva[2] < 0.5 ? [255, 255, 255, 255] : [0, 0, 0, 255]);
          }
          data.data.set(lerp(triangleDist, [48, 48, 48, 255], color), idx);
        } else if (inRectangle(x, y)) {
          let bgColor = (Math.floor(x / 12) + Math.floor(y / 12)) % 2 == 0
            ? [102, 102, 102, 255] : [204, 204, 204, 255];
          let fgColor = this.value;
          fgColor[3] = 255;
          let linePos = Math.trunc((this.#hsva[3] - 0.5) * 2 * OUTER_RADIUS);
          let color = lerp(getAlpha(x, y), fgColor, bgColor);
          if (y == linePos) {
            color = toRgba([this.#hsva[0], 0.18, 0.17, 1]);
          } else if (y == linePos - 1 || y == linePos + 1) {
            color = toRgba([this.#hsva[0], 0.18, 0.85, 1]);
          }
          data.data.set(color, idx);
        } else {
          data.data.set([48, 48, 48, 255], idx);
        }
      }
    }
    this.#context.putImageData(data, 0, 0);
  }

  attach(picker) {
    this.#picker = picker;
    picker.container.appendChild(this.#container);
    let rgba = picker.value;
    this.#red.reset(rgba[0]);
    this.#green.reset(rgba[1]);
    this.#blue.reset(rgba[2]);
    this.#alpha.reset(rgba[3]);
    this.#updateHsva();
    this.#container.classList.remove('hidden');
    this.#draw();
  }

  #detach() {
    this.#picker = undefined;
    this.#container.classList.add('hidden');
  }

  get container() {
    return this.#container;
  }

  get value() {
    return [this.#red.value, this.#green.value, this.#blue.value, this.#alpha.value];
  }
}

class ColorPicker extends EventTarget {
  static #ui = new PickerUi();

  #container;
  #element;
  #rgba;

  constructor(color) {
    super();
    this.#rgba = color || [255, 255, 255, 255];

    this.#element = document.createElement('div');
    this.#element.classList.add('color-picker-color');
    this.#element.addEventListener('click', () => {
      ColorPicker.#ui.attach(this);
    });

    let background = document.createElement('div');
    background.classList.add('color-picker-background');
    background.appendChild(this.#element);

    this.#container = document.createElement('div');
    this.#container.classList.add('color-picker');
    this.#container.appendChild(background);

    this.#redraw();
  }

  #redraw() {
    let rgba = this.#rgba;
    this.#element.style.backgroundColor =
      `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] / 255})`;
  }

  get container() {
    return this.#container;
  }

  get value() {
    return this.#rgba;
  }

  set value(rgba) {
    this.#rgba = rgba;
    this.#redraw();
  }
};


export { ColorPicker };
