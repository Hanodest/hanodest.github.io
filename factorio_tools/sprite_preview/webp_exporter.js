import createWebpEncoder from './wasm/webp_encoder.js';

class WebpExporter extends EventTarget {
  #renderer;
  #webpEncoder;

  constructor(renderer) {
    super();
    this.#webpEncoder = undefined;
    this.#renderer = renderer;
  }

  async exportAnimation(daytime, backgroundName, frameDuration) {
    if (this.#webpEncoder === undefined) {
      this.#webpEncoder = await createWebpEncoder();
    }
    let [width, height] = this.#renderer.getRenderSize();

    let context = {
      daytime: daytime,
      backgroundName: backgroundName,
      currentFrame: 0,
      totalFrames: this.#renderer.getFrameCount(),
    };

    context.frameMemory = this.#webpEncoder.ccall('CreateImage', 'number',
      ['number', 'number', 'number'], [width, height, frameDuration]);

    return new Promise((resolve) => {
      context.resolve = resolve;
      setTimeout(() => {
        this.#drawNextFrame(context);
      }, 0)
    });
  }

  #drawNextFrame(context) {
    let frameData = this.#renderer.draw(
      context.currentFrame, context.daytime, context.backgroundName);
    this.#webpEncoder.HEAPU8.set(frameData.data, context.frameMemory);
    this.#webpEncoder.ccall('AddFrame', 'undefined', [], [])
    this.dispatchEvent(new CustomEvent('progress', {
      detail: { value: context.currentFrame / context.totalFrames }
    }));
    context.currentFrame++;
    if (context.currentFrame < context.totalFrames) {
      setTimeout(() => {
        this.#drawNextFrame(context);
      }, 0);
    } else {
      this.#assembleResult(context);
    }
  }

  #assembleResult(context) {
    let error = this.#webpEncoder.ccall('Assemble', 'string', [], []);
    let resultBytes = this.#webpEncoder.ccall('ResultBytes', 'number', [], []);
    let resultSize = this.#webpEncoder.ccall('ResultSize', 'number', [], []);
    let result = new Blob(
      [this.#webpEncoder.HEAPU8.slice(resultBytes, resultBytes + resultSize)],
      { type: "image/webp" });
    this.#webpEncoder.ccall('Cleanup', 'undefined', [], []);
    context.resolve(result);
  }
};

export { WebpExporter };
