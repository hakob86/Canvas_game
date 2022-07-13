const DELTA = 1 / 177;

var a = 10;
class GameWorld {
  constructor() {
    // create the ball
    this.position = 413;
    this.canvas1 = document.getElementById("screen");
    // this.isToRight = true;
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
    debugger;

    var b = this.position;
    let newPosition = 0;

    if (b > this.canvas1.width - 80) {
      a = -10;
      this.position = newPosition;
    } else if (b < 80 && b < this.canvas1.width - 80) {
      a = 10;
      this.position = newPosition;
    }
    newPosition = b + a;
    this.position = newPosition;

    // if (this.position < this.canvas1.width - 75 && b === this.position) {
    //   newPosition = this.position += a;
    // } else if (this.position > this.canvas1.width - 75 && b === this.position) {
    //   newPosition = this.position -= a;
    // }

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

// if (this.position - 1 < canvas1.heigth + 75)

// else {
//   newPosition = this.position -= a;
// }
