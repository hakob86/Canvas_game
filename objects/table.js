class Table {
  constructor(TopY, RightX, BottomY, LeftX) {
    this.TopY = TopY;
    this.RightX = RightX;
    this.BottomY = BottomY;
    this.LeftX = LeftX;
  }

  // update method is called every frame (see detailed description in the dock)
  update(delta) {}

  // draws sprite every frame
  draw() {
    Canvas.drawImage(sprites.background, { x: 0, y: 0 });
  }
}
