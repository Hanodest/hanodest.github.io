import { Overlay } from './overlay.js';
import { parseLayerSettings } from './layer_settings.js';

class ImportUi extends EventTarget {
  #container;
  #text;
  #errorMessage;
  #footer;
  #overlay;

  constructor() {
    super();

    let header = document.getElementById('import_header');
    header.classList.remove('hidden');

    this.#text = document.createElement('textarea');
    this.#text.addEventListener('focus', () => {
      this.#toggleError();
    });

    this.#footer = document.createElement('div');
    this.#footer.classList.add('right-aligned');
    let confirmButton = document.createElement('div');
    confirmButton.classList.add('confirm-icon');
    confirmButton.addEventListener('click', () => {
      this.#tryImport();
    });
    this.#errorMessage = document.createElement('div');
    this.#errorMessage.innerText = 'Malformed input';
    this.#errorMessage.classList.add('error-message');
    this.#footer.replaceChildren(confirmButton, this.#errorMessage);

    this.#container = document.createElement('div');
    this.#container.classList.add('import-ui');
    this.#container.replaceChildren(header, this.#text, this.#footer);

    this.#overlay = new Overlay(this);
  }

  show() {
    this.#text.value = '';
    this.#overlay.toggle(true);
    this.#toggleError();
  }

  #toggleError(message) {
    if (message === undefined) {
      this.#errorMessage.classList.add('hidden');
    } else {
      this.#errorMessage.innerText = message;
      this.#errorMessage.classList.remove('hidden');
    }
  }

  #tryImport() {
    try {
      let parsedSettings = parseLayerSettings(this.#text.value);
      if (parsedSettings !== undefined) {
        this.#overlay.toggle(false);
        this.dispatchEvent(new CustomEvent('settingsImported', {
          detail: parsedSettings
        }));
        return;
      }
    } catch (e) {
      if (typeof (e) == 'string') {
        this.#toggleError(e);
      } else if (e instanceof SyntaxError) {
        this.#toggleError(e.message);
      } else {
        this.#toggleError('Malformed input');
      }
    }
  }

  get container() {
    return this.#container;
  }
}

export { ImportUi };

