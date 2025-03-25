import { clamp } from './util.js';

class NumberInput extends EventTarget {
  #minValue;
  #maxValue;
  #currentValue;
  #defaultValue;

  #container;
  #textInput;

  constructor(name, minValue, maxValue, defaultValue) {
    super();

    this.#minValue = minValue;
    this.#maxValue = maxValue;
    this.#defaultValue = defaultValue;

    this.#container = document.createElement('div');
    this.#container.classList.add('right-aligned');

    let caption = document.createElement('div');
    caption.classList.add('number-input-caption');
    caption.innerText = name;

    let textInput = document.createElement('div');
    this.#textInput = document.createElement('input');
    this.#textInput.type = 'number';
    textInput.appendChild(this.#textInput);

    this.#textInput.addEventListener('change', () => {
      this.#currentValue = clamp(
        parseInt(this.#textInput.value) || 0,
        this.#minValue, this.#maxValue);
      this.#textInput.value = this.#currentValue;
      this.#triggerCallback();
    });

    this.reset();
    this.#container.replaceChildren(textInput, caption);
  }

  get container() {
    return this.#container;
  }

  get value() {
    return this.#currentValue;
  }

  reset(value) {
    this.#currentValue = value === undefined ? this.#defaultValue : value;
    this.#textInput.value = this.#currentValue;
  }

  safe_reset(value) {
    this.reset(clamp(value, this.#minValue, this.#maxValue));
  }

  #triggerCallback() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.#currentValue }
    }));
  }
}

export { NumberInput };
