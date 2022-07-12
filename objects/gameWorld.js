const DELTA = 1 / 177;

class GameWorld {
  constructor() {
    // create the ball
    this.position = 413;
    this.isToRight = true;
    this.ball = new Ball(new Vector2(this.position, 413), Color.white);

    // create the stick
    this.stick = new Stick(new Vector2(20, 850));

    // create the table
    this.table = new Table();
  }

  // update method is called every frame (see detailed description in the dock)
  update() {
    // example code for mouse inputs usage (can be removed)
    // mouse down example
    if (Mouse.left.down) {
      console.log("mouse down");
    } else {
      console.log("mouse up");
    }

    // press and mouse position example
    if (Mouse.left.pressed) {
      console.log("mouse pressed:", Mouse.position);
    }
    //  1425 77

    // updating objects created in the constructor
    this.table.update(DELTA);
    this.ball.update(DELTA);
    this.stick.update(DELTA);
    let newPosition = null;
    if (this.position + 1 > 1425) {
      newPosition = this.position--;
    } else {
      newPosition = this.position += 1;
    }

    this.ball = new Ball(new Vector2(newPosition, 413), Color.white);
  }

  // draws sprite every frame
  draw() {
    // updating objects created in the constructor
    this.table.draw();
    this.ball.draw();
    this.stick.draw();
  }
}
