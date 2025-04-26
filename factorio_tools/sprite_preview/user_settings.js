import { createBlendSelect, createDrawSelect } from './layer.js';
import { Overlay } from './overlay.js';
import { ColorPicker } from './color_picker.js';

function createInput(value, type) {
  let result = document.createElement('input');
  result.type = type;
  result.value = value || '';
  return result;
}

class ImageRule extends EventTarget {
  #serialized;

  #hidden;
  #filename;
  #suffixRegex;
  #columns;
  #rows;
  #scale;
  #blendMode;
  #drawMode;
  #tint;
  #ignore;
  #priority;

  #container;

  constructor(serialized) {
    super();

    this.#serialized = serialized;

    this.#hidden = serialized.hidden || false;
    let hideButton = document.createElement('div');
    hideButton.classList.add('eye-icon');
    hideButton.classList.toggle('layer-hidden', this.#hidden);
    hideButton.addEventListener('click', () => {
      this.#hidden = !this.#hidden;
      hideButton.classList.toggle('layer-hidden', this.#hidden);
    });
    this.#filename = createInput(serialized.filename, 'text');
    this.#suffixRegex = createInput(serialized.suffixRegex, 'text');
    this.#columns = createInput(serialized.columns, 'number');
    this.#rows = createInput(serialized.rows, 'number');
    this.#scale = createInput(serialized.scale, 'number');
    this.#blendMode = createBlendSelect();
    this.#blendMode.value = serialized.blendMode || 'normal';
    this.#tint = new ColorPicker(serialized.tint);
    this.#drawMode = createDrawSelect();
    this.#drawMode.value = serialized.drawMode || 'sprite';
    this.#ignore = createInput(undefined, 'checkbox');
    this.#ignore.checked = serialized.ignore || false;
    this.#priority = createInput(serialized.priority, 'number');

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-icon');
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete'));
    });

    let dragTarget = document.createElement('div');
    dragTarget.classList.add('drag-block-small');
    dragTarget.draggable = true;

    this.#container = document.createElement('tr');
    this.#container.classList.add('image-rule');
    [dragTarget, hideButton, this.#filename, this.#suffixRegex,
      this.#columns, this.#rows,
      this.#scale, this.#blendMode, this.#drawMode, this.#tint.container,
      this.#ignore, this.#priority, deleteButton].forEach(
        (input) => {
          let cell = document.createElement('td');
          cell.classList.add('image-rule-cell');
          cell.appendChild(input);
          this.#container.appendChild(cell);
        });

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
      let dragStartIndex = parseInt(event.dataTransfer.getData('text/plain')) - 1;
      let dragEndIndex =
        Array.from(this.#container.parentNode.children).indexOf(this.#container) - 1;
      if (dragStartIndex != dragEndIndex) {
        this.dispatchEvent(new CustomEvent('moveRule', {
          detail: {
            dragStart: dragStartIndex,
            dragEnd: dragEndIndex
          }
        }));
      }
      event.preventDefault();
    });
  }

  update() {
    this.#serialized = {
      hidden: this.#hidden,
      filename: this.#filename.value,
      suffixRegex: this.#suffixRegex.value,
      columns: parseInt(this.#columns.value) || undefined,
      rows: parseInt(this.#rows.value) || undefined,
      scale: parseFloat(this.#scale.value) || undefined,
      blendMode: this.#blendMode.value,
      drawMode: this.#drawMode.value,
      tint: this.#tint.value,
      ignore: this.#ignore.checked,
      priority: parseInt(this.#priority.value) || undefined,
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
      this.#restore(serialized);
    } catch (e) {
      this.#restore({
        imageRules: [{}],
        invertLayerOrder: false,
        animationSpeed: 60
      })
    }

    let invertLabel = document.createElement('div');
    invertLabel.innerText = 'Invert order of layers';
    invertLabel.classList.add('number-input-caption');
    let invertRow = document.createElement('div');
    invertRow.classList.add('flex-horizontal', 'white');
    invertRow.replaceChildren(invertLabel, this.#invertLayerOrder);

    let animationSpeedLabel = document.createElement('div');
    animationSpeedLabel.innerText = 'Default animation speed (fps):';
    animationSpeedLabel.classList.add('number-input-caption');
    let animationSpeedRow = document.createElement('div');
    animationSpeedRow.classList.add('flex-horizontal', 'white');
    animationSpeedRow.replaceChildren(animationSpeedLabel, this.#animationSpeed);

    this.#settingsTableHeader = document.getElementById('image_rule_header');
    let addRule = document.createElement('div');
    addRule.classList.add('add-icon');
    addRule.addEventListener('click', () => {
      let rule = new ImageRule({});
      rule.addEventListener('delete', () => { this.#deleteRule(rule); });
      rule.addEventListener('moveRule', (e) => { this.#moveRule(e.detail); });
      this.#imageRules.push(rule);
      this.#settingsTable.appendChild(rule.container);
    })
    this.#settingsTableHeader.appendChild(addRule);

    let importExport = document.createElement('div');
    importExport.classList.add('right-aligned');
    let importButton = document.createElement('div');
    importButton.classList.add('import-icon');
    importButton.addEventListener('click', () => { this.#importSettings(); });
    let exportButton = document.createElement('div');
    exportButton.classList.add('export-icon');
    exportButton.addEventListener('click', () => { this.#exportSettings(); });
    importExport.replaceChildren(importButton, exportButton);

    this.#settingsTable = document.createElement('table');
    this.#container = document.createElement('div');
    this.#container.replaceChildren(
      invertRow, animationSpeedRow, this.#settingsTable, importExport);
    this.#overlay = new Overlay(this);
    this.#overlay.addEventListener('close', () => {
      this.#saveSettings();
    });
  }

  #deleteRule(rule) {
    this.#settingsTable.removeChild(rule.container);
    this.#imageRules = this.#imageRules.filter((r) => r !== rule);
  }

  #moveRule(moveSettings) {
    let moveFrom = moveSettings.dragStart;
    let moveTo = moveSettings.dragEnd;
    let ruleToMove = this.#imageRules.splice(moveFrom, 1)[0];
    this.#imageRules.splice(moveTo, 0, ruleToMove);
    this.show();
  }

  #saveSettings() {
    localStorage.setItem('sprite_preview_settings', JSON.stringify(this.#serialize()));
    this.dispatchEvent(new CustomEvent('settingsUpdated'));
  }

  #exportSettings() {
    navigator.clipboard.writeText(JSON.stringify(this.#serialize(), undefined, 2));
  }

  #importSettings() {
    try {
      navigator.clipboard.readText().then((text) => {
        let serialized = JSON.parse(text);
        if (!Array.isArray(serialized.imageRules)) {
          return;
        }
        this.#restore(serialized);
        this.#settingsTable.replaceChildren();
        this.#imageRules.forEach((rule) => {
          this.#settingsTable.appendChild(rule.container);
        });
      });
    } catch (e) {
    }
  }

  #serialize() {
    return {
      imageRules: this.#imageRules.map((rule) => {
        rule.update();
        return rule.serialized;
      }),
      invertLayerOrder: this.#invertLayerOrder.checked,
      animationSpeed: this.animationSpeed
    };
  }

  #restore(serialized) {
    if (!Array.isArray(serialized.imageRules) || serialized.imageRules.length == 0) {
      serialized.imageRules = [{}];
    }
    this.#imageRules = serialized.imageRules.map((serializedRule) => {
      let rule = new ImageRule(serializedRule);
      rule.addEventListener('delete', () => { this.#deleteRule(rule); });
      rule.addEventListener('moveRule', (e) => { this.#moveRule(e.detail); });
      return rule;
    });
    this.#invertLayerOrder.checked = serialized.invertLayerOrder;
    this.#animationSpeed.value = serialized.animationSpeed || 60;
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

  getFilePriority(filename) {
    let rule = this.getImageRule(filename);
    return rule.serialized.priority || 0;
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
