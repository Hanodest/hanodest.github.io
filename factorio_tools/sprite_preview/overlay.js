class Overlay extends EventTarget {
  #container;

  constructor(childElement) {
    super();

    let header = document.createElement('div');
    header.classList.add('right-aligned');
    let closeButton = document.createElement('div');
    closeButton.classList.add('close-icon');
    closeButton.addEventListener(('click'), () => {
      this.toggle(false);
    });
    header.appendChild(closeButton);

    let overlayWindow = document.createElement('div');
    overlayWindow.classList.add('outer-frame', 'flex-vertical');
    overlayWindow.addEventListener(('click'), (e) => {
      e.stopPropagation();
    });
    overlayWindow.replaceChildren(header, childElement.container);

    this.#container = document.createElement('div');
    this.#container.classList.add('hidden', 'overlay');
    this.#container.appendChild(overlayWindow);
    this.#container.addEventListener(('click'), () => {
      this.toggle(false);
    });
    document.body.appendChild(this.#container);
  }

  toggle(state) {
    this.#container.classList.toggle('hidden', !state);
  }
};

export { Overlay };
