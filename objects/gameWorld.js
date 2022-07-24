const DELTA = 1 / 177;

class GameWorld {
  constructor() {
    this.balls = CONSTANTS.ballsParams.map((params) => new Ball(...params));

    // create the ball
    this.ball = this.balls.find((ball) => ball.color === Color.white);

    // create the stick
    this.stick = new Stick(
      new Vector2(413, 413),
      this.ball.shoot.bind(this.ball)
    );

    // create the table
    // this.table = new Table();
    this.table = {
      TopY: 57,
      RightX: 1443,
      BottomY: 768,
      LeftX: 57,
    };
  }

  handleCollisions() {
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].handleBallInPocket();
      this.balls[i].collideWithTable(this.table);
      for (let j = i + 1; j < this.balls.length; j++) {
        const firstBall = this.balls[i];
        const secondBall = this.balls[j];
        // console.log(secondBall);
        firstBall.collideWithBall(secondBall);
      }
    }
  }

  // update method is called every frame (see detailed description in the dock)
  update() {
    this.handleCollisions();

    this.stick.update();

    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].update(DELTA);
    }

    if (!this.ballsMoving() && this.stick.shot) {
      this.stick.reposition(this.ball.position);
    }

    // example code for mouse inputs usage (can be removed)
    // mouse down example
    // if (Mouse.left.down) {
    //   console.log("mouse down");
    // } else {
    //   console.log("mouse up");
    // }

    // // press and mouse position example
    // if (Mouse.left.pressed) {
    //   console.log("mouse pressed:", Mouse.position);
    // }

    // updating objects created in the constructor
    // this.table.update(DELTA);
    this.ball.update(DELTA);
    this.stick.update(DELTA);
  }

  // draws sprite every frame
  draw() {
    Canvas.drawImage(sprites.background, { x: 0, y: 0 });

    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].draw();
    }

    // updating objects created in the constructor
    // this.table.draw();
    this.stick.draw();
  }

  ballsMoving() {
    let ballsMoving = false;

    for (let i = 0; i < this.balls.length; i++) {
      if (this.balls[i].moving) {
        ballsMoving = true;
        break;
      }
    }
    return ballsMoving;
  }
}
