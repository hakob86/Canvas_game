class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Vector2(this.x, this.y);
  }

  mult(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  addTo(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  add(vector) {
    return new Vector2(this.x + vector.x, this.y + vector.y);
  }

  substract(vector) {
    return new Vector2(this.x - vector.x, this.y - vector.y);
  }

  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  distanceFrom(vector) {
    return this.substract(vector).length();
  }
}
