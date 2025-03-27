function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toHex(number, digits) {
  return number.toString(16).padStart(digits, '0');
}

function basename(path) {
  if (path === undefined) {
    return undefined;
  }
  return path.split('/').pop();
}

export { basename, clamp, toHex };
