import { createBlendSelect, createDrawSelect } from './layer.js';
import { Overlay } from './overlay.js';

function createInput(value, type) {
  let result = document.createElement('input');
  result.type = type;
  result.value = value || '';
  return result;
}

class ImageRule extends EventTarget {
  #serialized;

  #filename;
  #suffixRegex;
  #columns;
  #rows;
  #blendMode;
  #drawMode;

  #container;

  constructor(serialized) {
    super();

    this.#serialized = serialized;

    this.#filename = createInput(serialized.filename, 'text');
    this.#suffixRegex = createInput(serialized.suffixRegex, 'text');
    this.#columns = createInput(serialized.columns, 'number');
    this.#rows = createInput(serialized.rows, 'number');
    this.#blendMode = createBlendSelect();
    this.#blendMode.value = serialized.blendMode || 'normal';
    this.#drawMode = createDrawSelect();
    this.#drawMode.value = serialized.drawMode || 'sprite';

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-icon');
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

    this.#container = document.createElement('div');
    this.#container.classList.add('image-rule');
    [this.#filename, this.#suffixRegex, this.#columns, this.#rows,
    this.#blendMode, this.#drawMode, deleteButton].forEach(
      (input) => {
        let cell = document.createElement('div');
        cell.classList.add('image-rule-cell');
        cell.appendChild(input);
        this.#container.appendChild(cell);
      });
  }

  update() {
    this.#serialized = {
      filename: this.#filename.value,
      suffixRegex: this.#suffixRegex.value,
      columns: parseInt(this.#columns.value) || undefined,
      rows: parseInt(this.#rows.value) || undefined,
      blendMode: this.#blendMode.value,
      drawMode: this.#drawMode.value
    };
  }

  matches(filename) {
    let regex = new RegExp(this.#serialized.filename);
    return filename.search(regex) != -1;
  }

  getLayerName(filename) {
    if (this.#serialized.suffixRegex === '') {
      return undefined;
    }
    let regex = new RegExp(this.#serialized.suffixRegex);
    return filename.replace(regex, "");
  }

  get serialized() {
    return this.#serialized;
  }

  get container() {
    return this.#container;
  }
};

class UserSettings extends EventTarget {
  #imageRules;
  #invertLayerOrder;

  #container;
  #settingsTableHeader;
  #settingsTable;

  #overlay;

  constructor() {
    super();
    this.#invertLayerOrder = document.createElement('input');
    this.#invertLayerOrder.type = 'checkbox';
    try {
      let serialized = JSON.parse(localStorage.getItem('sprite_preview_settings'));
      this.#imageRules = serialized.imageRules.map((serializedRule) => {
        let rule = new ImageRule(serializedRule);
        rule.addEventListener('delete', () => { this.#deleteRule(rule); });
        return rule;
      });
      this.#invertLayerOrder.checked = serialized.invertLayerOrder;
    } catch (e) {
      this.#imageRules = [];
      this.#invertLayerOrder.checked = false;
    }

    let invertLabel = document.createElement('div');
    invertLabel.innerText = 'Invert order of layers';
    let invertRow = document.createElement('div');
    invertRow.classList.add('flex-horizontal', 'white');
    invertRow.replaceChildren(this.#invertLayerOrder, invertLabel);

    this.#settingsTableHeader = document.createElement('div');
    this.#settingsTableHeader.classList.add('image-rule-header');
    ['Filename', 'Sheet number', 'Columns', 'Rows', 'Blend mode', 'Draw mode'].forEach(
      (text) => {
        let columnHeader = document.createElement('div');
        columnHeader.classList.add('image-rule-header-cell');
        columnHeader.innerText = text;
        this.#settingsTableHeader.appendChild(columnHeader);
      }
    )
    let addRule = document.createElement('div');
    addRule.classList.add('add-icon');
    addRule.addEventListener('click', () => {
      let rule = new ImageRule({});
      rule.addEventListener('delete', () => { this.#deleteRule(rule); });
      this.#imageRules.push(rule);
      this.#settingsTable.appendChild(rule.container);
    })
    this.#settingsTableHeader.appendChild(addRule);

    let header = document.getElementById('settings_header');
    this.#settingsTable = document.createElement('div');
    this.#container = document.createElement('div');
    this.#container.replaceChildren(invertRow, header, this.#settingsTable);
    this.#overlay = new Overlay(this);
    this.#overlay.addEventListener('close', () => {
      this.#saveSettings();
    });
  }

  #deleteRule(rule) {
    this.#settingsTable.removeChild(rule.container);
    this.#imageRules = this.#imageRules.filter((r) => r !== rule);
  }

  #saveSettings() {
    let serialized = {
      imageRules: this.#imageRules.map((rule) => {
        rule.update();
        return rule.serialized;
      }),
      invertLayerOrder: this.#invertLayerOrder.checked
    };
    localStorage.setItem('sprite_preview_settings', JSON.stringify(serialized));
    this.dispatchEvent(new CustomEvent('settingsUpdated'));
  }

  show() {
    this.#settingsTable.replaceChildren(this.#settingsTableHeader);
    this.#imageRules.forEach((rule) => {
      this.#settingsTable.appendChild(rule.container);
    });
    this.#overlay.toggle(true);
  }

  getImageRule(filename) {
    for (let rule of this.#imageRules) {
      if (rule.matches(filename)) {
        return rule;
      }
    }
    return new ImageRule({});
  }

  get invertLayerOrder() {
    return this.#invertLayerOrder.checked;
  }

  get container() {
    return this.#container;
  }
};

export { UserSettings };
