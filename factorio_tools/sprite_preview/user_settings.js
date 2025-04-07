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
  #scale;
  #blendMode;
  #drawMode;
  #ignore;

  #container;

  constructor(serialized) {
    super();

    this.#serialized = serialized;

    this.#filename = createInput(serialized.filename, 'text');
    this.#suffixRegex = createInput(serialized.suffixRegex, 'text');
    this.#columns = createInput(serialized.columns, 'number');
    this.#rows = createInput(serialized.rows, 'number');
    this.#scale = createInput(serialized.scale, 'number');
    this.#blendMode = createBlendSelect();
    this.#blendMode.value = serialized.blendMode || 'normal';
    this.#drawMode = createDrawSelect();
    this.#drawMode.value = serialized.drawMode || 'sprite';
    this.#ignore = createInput(undefined, 'checkbox');
    this.#ignore.checked = serialized.ignore || false;

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-icon');
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

    this.#container = document.createElement('div');
    this.#container.classList.add('image-rule');
    [this.#filename, this.#suffixRegex, this.#columns, this.#rows,
    this.#scale, this.#blendMode, this.#drawMode,
    this.#ignore, deleteButton].forEach(
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
      scale: parseFloat(this.#scale.value) || undefined,
      blendMode: this.#blendMode.value,
      drawMode: this.#drawMode.value,
      ignore: this.#ignore.checked,
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
  #animationSpeed;

  #container;
  #settingsTableHeader;
  #settingsTable;

  #overlay;

  constructor() {
    super();
    this.#invertLayerOrder = document.createElement('input');
    this.#invertLayerOrder.type = 'checkbox';
    this.#animationSpeed = document.createElement('input');
    this.#animationSpeed.type = 'number';
    try {
      let serialized = JSON.parse(localStorage.getItem('sprite_preview_settings'));
      this.#imageRules = serialized.imageRules.map((serializedRule) => {
        let rule = new ImageRule(serializedRule);
        rule.addEventListener('delete', () => { this.#deleteRule(rule); });
        return rule;
      });
      this.#invertLayerOrder.checked = serialized.invertLayerOrder;
      this.#animationSpeed.value = serialized.animationSpeed || 60;
    } catch (e) {
      this.#imageRules = [];
      this.#invertLayerOrder.checked = false;
      this.#animationSpeed.value = 60;
    }

    let invertLabel = document.createElement('div');
    invertLabel.innerText = 'Invert order of layers';
    let invertRow = document.createElement('div');
    invertRow.classList.add('flex-horizontal', 'white');
    invertRow.replaceChildren(this.#invertLayerOrder, invertLabel);

    let animationSpeedLabel = document.createElement('div');
    animationSpeedLabel.innerText = 'Default animation speed (fps):';
    let animationSpeedRow = document.createElement('div');
    animationSpeedRow.classList.add('flex-horizontal', 'white');
    animationSpeedRow.replaceChildren(animationSpeedLabel, this.#animationSpeed);

    this.#settingsTableHeader = document.createElement('div');
    this.#settingsTableHeader.classList.add('image-rule-header');
    ['Filename', 'Sheet number', 'Columns', 'Rows', 'Scale',
      'Blend mode', 'Draw mode', 'Ignore'].forEach(
        (text) => {
          let columnHeader = document.createElement('div');
          columnHeader.classList.add('image-rule-header-cell');
          columnHeader.innerText = text;
          this.#settingsTableHeader.appendChild(columnHeader);
        });
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
    this.#container.replaceChildren(invertRow, animationSpeedRow, header, this.#settingsTable);
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
      invertLayerOrder: this.#invertLayerOrder.checked,
      animationSpeed: this.animationSpeed
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

  get animationSpeed() {
    return parseInt(this.#animationSpeed.value) || 60;
  }

  get container() {
    return this.#container;
  }
};

export { UserSettings };
