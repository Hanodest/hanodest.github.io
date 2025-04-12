function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function basename(path) {
  if (path === undefined) {
    return undefined;
  }
  return path.split('/').pop();
}

export { basename, clamp };
