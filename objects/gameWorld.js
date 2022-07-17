const DELTA = 1 / 177;
const boardWidth = 77;
const tableWidth = 1500;
const tableHeight = 900;

function calcPercent(num, percent) {
  return (Math.abs(num) * percent) / 100;
}

class GameWorld {
  constructor() {
    // create the ball
    this.mousePosition = {
      press: null,
      up: null,
    };
    this.minusNumFromBallX = 0;
    this.minusNumFromBallY = 0;
    this.isInMove = false;
    this.ballPositionX = 413;
    this.ballPositionY = 413;
    this.ballSpeedX = 0;
    this.ballSpeedY = 0;
    this.canvas1 = document.getElementById("screen");
    this.ball = new Ball(
      new Vector2(this.ballPositionX, this.ballPositionY),
      Color.white
    );

    this.ball2 = new Ball(new Vector2(813, 220), Color.red);

    // create the stick
    this.stickPositionX = 20;
    this.stickPositionY = 850;

    this.stick = new Stick(
      new Vector2(this.stickPositionX, this.stickPositionY)
    );

    // create the table
    this.table = new Table();
  }

  // update method is called every frame (see detailed description in the dock)
  update() {
    // example code for mouse inputs usage (can be removed)
    // mouse down example

    if (this.isMousePressed) {
      if (!Mouse.left.down) {
        this.isMousePressed = false;
        this.mousePosition.up = Mouse.position;

        const x = (Mouse.position.x - this.mousePosition.press.x) / 10;
        const y = (Mouse.position.y - this.mousePosition.press.y) / 10;

        this.ballSpeedX = -x;
        this.ballSpeedY = -y;
        this.minusNumFromBallX = calcPercent(x, 0.3);
        this.minusNumFromBallY = calcPercent(y, 0.3);
        this.isInMove = true;
      }
    }

    // press and mouse position example
    if (Mouse.left.pressed) {
      if (!this.isInMove) {
        this.isMousePressed = true;
        this.mousePosition.press = Mouse.position;
      }
    }

    if (this.ballSpeedX > 0) {
      this.ballSpeedX = Math.max(this.ballSpeedX - this.minusNumFromBallX, 0);
    } else {
      this.ballSpeedX = Math.min(this.ballSpeedX + this.minusNumFromBallX, 0);
    }

    if (this.ballSpeedX === 0) {
      this.isInMove = false;
    }

    if (this.ballSpeedY > 0) {
      this.ballSpeedY = Math.max(this.ballSpeedY - this.minusNumFromBallY, 0);
    } else {
      this.ballSpeedY = Math.min(this.ballSpeedY + this.minusNumFromBallY, 0);
    }

    if (
      this.ballPositionX > this.canvas1.width - boardWidth ||
      (this.ballPositionX < boardWidth &&
        this.ballPositionX < this.canvas1.width - boardWidth)
    ) {
      this.ballSpeedX = -this.ballSpeedX;
    }

    if (
      this.ballPositionY > this.canvas1.height - boardWidth * 2 ||
      (this.ballPositionY < boardWidth &&
        this.ballPositionY < this.canvas1.height - boardWidth)
    ) {
      this.ballSpeedY = -this.ballSpeedY;
    }

    let newPositionWidth = this.ballPositionX + this.ballSpeedX;
    let newPositionHeight = this.ballPositionY + this.ballSpeedY;
    this.ballPositionX = newPositionWidth;
    this.ballPositionY = newPositionHeight;

    if (newPositionWidth > tableWidth - boardWidth) {
      newPositionWidth = tableWidth - boardWidth;
    }
    if (newPositionWidth < boardWidth) {
      newPositionWidth = boardWidth;
    }

    if (newPositionHeight > tableHeight - boardWidth) {
      newPositionHeight = tableHeight - boardWidth;
    }

    if (newPositionHeight < boardWidth) {
      newPositionHeight = boardWidth;
    }
    this.ball = new Ball(
      new Vector2(newPositionWidth, newPositionHeight),
      Color.white
    );
  }

  // draws sprite every frame
  draw() {
    // updating objects created in the constructor
    this.table.draw();
    this.ball.draw();
    this.ball2.draw();
    this.stick.draw();
  }
}
