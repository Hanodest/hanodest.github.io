function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toHex(number, digits) {
  return number.toString(16).padStart(digits, '0');
}

export { clamp, toHex };
