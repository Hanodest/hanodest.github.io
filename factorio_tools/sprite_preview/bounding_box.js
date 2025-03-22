class BoundingBox {
  #topLeft;
  #bottomRight;

  constructor(topLeft, bottomRight) {
    this.#topLeft = topLeft;
    this.#bottomRight = bottomRight;
  }

  get topLeft() {
    return this.#topLeft;
  }

  get bottomRight() {
    return this.#bottomRight;
  }

  union(other) {
    return new BoundingBox(
      this.topLeft.min(other.topLeft),
      this.bottomRight.max(other.bottomRight));
  }
};

export { BoundingBox };
