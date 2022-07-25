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
    this.table = new Table(57, 1443, 768, 95);
  }

  handleCollisions() {
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].handleBallInPocket();
      this.balls[i].collideWithTable(this.table);
      for (let j = i + 1; j < this.balls.length; j++) {
        const firstBall = this.balls[i];
        const secondBall = this.balls[j];
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

    this.stick.draw();
  }

  ballsMoving() {
    let isInMove = false;

    for (let i = 0; i < this.balls.length; i++) {
      if (this.balls[i].moving) {
        isInMove = true;
        break;
      }
    }
    return isInMove;
  }
}
