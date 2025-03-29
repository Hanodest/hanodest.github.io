import { Overlay } from './overlay.js';

function toLuaString(obj, offset) {
  if (typeof (obj) == 'string') {
    return `"${obj}"`;
  } else if (typeof (obj) == 'number' || typeof (obj) == 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    let result = '';
    result = '{\n';
    obj.forEach((element) => {
      result += '  '.repeat(offset + 1);
      result += toLuaString(element, offset + 1);
      result += ',\n';
    });
    result += '  '.repeat(offset);
    result += '}';
    return result;
  } else {
    let result = '{\n';
    for (let property in obj) {
      result += '  '.repeat(offset + 1);
      result += `${property} = `;
      if (property == 'shift') {
        result += `util.by_pixel_hr(${obj.shift[0]}, ${obj.shift[1]})`;
      } else if (property == 'tint') {
        let tint = obj.tint;
        result += `{ r = ${tint[0]}, g = ${tint[1]}, b = ${tint[2]}, a = ${tint[3]} }`;
      } else {
        result += toLuaString(obj[property], offset + 1);
      }
      result += ',\n';
    }
    result += '  '.repeat(offset);
    result += '}';
    return result;
  }
}

class ExportUi {
  #container;
  #jsonTab;
  #luaTab;
  #text;
  #overlay;

  #settings;

  constructor() {
    this.#text = document.createElement('textarea');
    this.#text.disabled = true;

    let header = document.createElement('div');
    header.classList.add('flex-horizontal');
    this.#jsonTab = document.createElement('div');
    this.#jsonTab.innerText = 'JSON';
    this.#jsonTab.classList.add('tab-header');
    this.#jsonTab.addEventListener('click', () => { this.#showJson(); });
    this.#luaTab = document.createElement('div');
    this.#luaTab.innerText = 'Lua';
    this.#luaTab.classList.add('tab-header');
    this.#luaTab.addEventListener('click', () => { this.#showLua(); });
    header.replaceChildren(this.#jsonTab, this.#luaTab);

    this.#container = document.createElement('div');
    this.#container.classList.add('export-ui');
    this.#container.replaceChildren(header, this.#text);

    this.#overlay = new Overlay(this);
  }

  #showJson() {
    this.#jsonTab.classList.add('active');
    this.#luaTab.classList.remove('active');
    this.#text.value =
      JSON.stringify(this.#settings, /*replacer=*/undefined, /*space=*/2);
  }

  #showLua() {
    this.#jsonTab.classList.remove('active');
    this.#luaTab.classList.add('active');
    this.#text.value = toLuaString(this.#settings, /*offset=*/0);
  }

  show(settings) {
    this.#settings = settings;
    this.#showJson();
    this.#overlay.toggle(true);
  }

  get container() {
    return this.#container;
  }
}

export { ExportUi };
