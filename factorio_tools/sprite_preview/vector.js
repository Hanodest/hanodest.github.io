class Vector {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  set x(x) {
    this.#x = x;
  }

  set y(y) {
    this.#y = y;
  }

  get y() {
    return this.#y;
  }

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  subtract(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  min(other) {
    return new Vector(Math.min(this.x, other.x), Math.min(this.y, other.y));
  }

  max(other) {
    return new Vector(Math.max(this.x, other.x), Math.max(this.y, other.y));
  }
}

export { Vector };
