import { detectSpriteSize } from './image.js';
import { basename, clamp, toHex } from './util.js';
import { Vector } from './vector.js';

function detectLayerSettings(imageName, imageRule, context) {
  let canvas = context.canvas;
  let [numRows, numColumns] = detectSpriteSize(
    context.getImageData(0, 0, canvas.width, canvas.height));
  let serializedRule = imageRule.serialized;
  if (serializedRule.columns !== undefined) {
    numColumns = serializedRule.columns;
  }
  if (serializedRule.rows !== undefined) {
    numRows = serializedRule.rows;
  }
  let layerName = imageRule.getLayerName(imageName);

  return {
    filename: layerName || imageName,
    filenames: [],
    size: new Vector(canvas.width / numColumns, canvas.height / numRows),
    shift: new Vector(0, 0),
    frameCount: 0,
    lineLength: numColumns,
    linesPerFile: numRows,
    blendMode: serializedRule.blendMode || 'normal',
    drawMode: serializedRule.drawMode || 'sprite',
    tint: '#ffffff',
  };
}

function parseSingleLayerSettings(input) {
  let result = {};
  if (typeof (input.filename) == 'string') {
    result.filename = basename(input.filename);
    result.filenames = [result.filename];
  } else if (input.filename !== undefined) {
    throw '`filename` is not a string.';
  }
  if (Array.isArray(input.filenames)) {
    result.filenames = input.filenames.map(basename);
    if (result.filename === undefined) {
      result.filename = input.filenames[0];
    }
  }
  if (result.filenames === undefined) {
    throw 'At least one of the fields `filename` and `filenames` must be present.';
  }
  if (Array.isArray(input.size)) {
    result.size = new Vector(input.size[0], input.size[1]);
  } else if (typeof (input.width) == 'number' && typeof (input.height) == 'number') {
    result.size = new Vector(input.width, input.height);
  } else {
    throw 'Either `size` or `width` and `height` fields must be present.';
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
  let parsedText = JSON.parse(settingsText);
  if (Array.isArray(parsedText.layers)) {
    return parsedText.layers
      .map(parseSingleLayerSettings);
  } else {
    return [parseSingleLayerSettings(parsedText)];
  }
}

export { detectLayerSettings, parseLayerSettings };
