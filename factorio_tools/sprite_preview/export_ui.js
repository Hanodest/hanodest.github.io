import { Overlay } from './overlay.js';

class ExportUi {
  #container;
  #text;
  #overlay;

  constructor() {
    this.#text = document.createElement('textarea');
    this.#text.disabled = true;

    this.#container = document.createElement('div');
    this.#container.appendChild(this.#text);

    this.#overlay = new Overlay(this);
  }

  show(settings) {
    this.#text.value =
      JSON.stringify(settings, /*replacer=*/undefined, /*space=*/2);
    this.#overlay.toggle(true);
  }

  get container() {
    return this.#container;
  }
}

export { ExportUi };
