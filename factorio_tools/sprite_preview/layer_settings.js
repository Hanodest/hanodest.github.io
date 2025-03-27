import { detectSpriteSize } from './image.js';
import { basename, clamp, toHex } from './util.js';
import { Vector } from './vector.js';

function detectLayerSettings(imageName, context) {
  let canvas = context.canvas;
  let [numRows, numColumns] = detectSpriteSize(
    context.getImageData(0, 0, canvas.width, canvas.height));

  return {
    title: imageName,
    filenames: [],
    size: new Vector(canvas.width / numColumns, canvas.height / numRows),
    shift: new Vector(0, 0),
    frameCount: 0,
    lineLength: numColumns,
    linesPerFile: numRows,
    blendMode: 'normal',
    drawMode: 'sprite',
    tint: '#ffffff',
  };
}

function parseSingleLayerSettings(input) {
  let result = {};
  if (typeof (input.filename) == 'string') {
    result.title = basename(input.filename);
    result.filenames = [result.title];
  } else if (input.filename !== undefined) {
    return undefined;
  }
  if (Array.isArray(input.filenames)) {
    result.filenames = input.filenames.map(basename);
    if (result.title === undefined) {
      result.title = input.filenames[0];
    }
  }
  if (result.filenames === undefined) {
    return undefined;
  }
  if (Array.isArray(input.size)) {
    result.size = new Vector(input.size[0], input.size[1]);
  } else if (typeof (input.width) == 'number' && typeof (input.height) == 'number') {
    result.size = new Vector(input.width, input.height);
  } else {
    return undefined;
  }
  let scale = input.scale !== undefined ? input.scale : 1;
  if (Array.isArray(input.shift)) {
    result.shift = new Vector
      (Math.floor(input.shift[0] * 32 / scale), Math.floor(input.shift[1] * 32 / scale));
  } else {
    result.shift = new Vector(0, 0);
  }
  result.frameCount = input.frame_count !== undefined ? input.frame_count : 1;
  result.lineLength = input.line_length !== undefined ? input.line_length : result.frameCount;
  result.linesPerFile = input.lines_per_file !== undefined
    ? input.lines_per_file
    : Math.floor(result.frameCount / result.lineLength);
  result.blendMode = input.blend_mode !== undefined ? input.blend_mode : 'normal';
  if (input.draw_as_shadow) {
    result.drawMode = 'shadow';
  } else if (input.draw_as_glow) {
    result.drawMode = 'glow';
  } else if (input.draw_as_light) {
    result.drawMode = 'light';
  } else {
    result.drawMode = 'sprite';
  }
  if (Array.isArray(input.tint)) {
    let r = clamp(Math.floor(input.tint[0] * 255), 0, 255);
    let g = clamp(Math.floor(input.tint[1] * 255), 0, 255);
    let b = clamp(Math.floor(input.tint[2] * 255), 0, 255);
    result.tint = '#' + toHex(r, 2) + toHex(g, 2) + toHex(b, 2);
  } else {
    result.tint = '#ffffff';
  }

  return result;
}

function parseLayerSettings(settingsText) {
  let parsedText;
  try {
    parsedText = JSON.parse(settingsText);
  } catch (e) {
    return undefined;
  }
  if (Array.isArray(parsedText.layers)) {
    return parsedText.layers
      .map(parseSingleLayerSettings)
      .filter((s) => s !== undefined);
  } else {
    let result = parseSingleLayerSettings(parsedText);
    return result === undefined ? undefined : [result];
  }
}

export { detectLayerSettings, parseLayerSettings };
