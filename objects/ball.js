const BALL_DIAMETER = 38;
const BALL_RADIUS = BALL_DIAMETER / 2;
const HOLE_RADIUS = 46;

class Ball {
  constructor(position, color) {
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false;
    // get ball sprite by its color
    this.sprite = getBallSpriteByColor(color);
    this.color = color;
    this.visible = true;
  }

  // update method is called every frame (see detailed description in the dock)
  update(delta) {
    if (!this.visible) {
      return;
    }

    this.position.addTo(this.velocity.mult(delta));
    this.velocity = this.velocity.mult(0.984);
    if (this.velocity.length() < 5) {
      this.velocity = new Vector2();
      this.moving = false;
    }
  }

  // draws sprite every frame
  draw() {
    if (!this.visible) {
      return;
    }

    Canvas.drawImage(this.sprite, this.position, CONSTANTS.ballOrigin);
  }

  shoot(power, rotation) {
    this.velocity = new Vector2(
      power * Math.cos(rotation),
      power * Math.sin(rotation)
    );
    this.moving = true;
  }

  collideWithBall(ball) {
    if (!this.visible || !ball.visible) {
      return;
    }

    const n = this.position.substract(ball.position);

    const dist = n.length();
    if (dist > BALL_DIAMETER) {
      return;
    }

    const mtd = n.mult((BALL_DIAMETER - dist) / dist);
    this.position = this.position.add(mtd.mult(1 / 2));
    ball.position = ball.position.substract(mtd.mult(1 / 2));

    const un = n.mult(1 / n.length());

    const ut = new Vector2(-un.y, un.x);

    const v1n = un.dot(this.velocity);
    const v1t = ut.dot(this.velocity);
    const v2n = un.dot(ball.velocity);
    const v2t = ut.dot(ball.velocity);

    let v1nTag = v2n;
    let v2nTag = v1n;

    v1nTag = un.mult(v1nTag);
    const v1tTag = ut.mult(v1t);
    v2nTag = un.mult(v2nTag);
    const v2tTag = ut.mult(v2t);

    this.velocity = v1nTag.add(v1tTag);
    ball.velocity = v2nTag.add(v2tTag);

    this.moving = true;
    ball.moving = true;
  }

  handleBallInPocket() {
    if (!this.visible) {
      return;
    }

    let inPocket = CONSTANTS.pockets.some((pocket) => {
      return this.position.distanceFrom(pocket) < CONSTANTS.pocketRadius;
    });

    if (!inPocket) {
      return;
    }
    this.visible = false;
    this.moving = false;
  }

  collideWithTable(table) {
    if (!this.moving || !this.visible) {
      return;
    }
    let collided = false;

    if (this.position.y <= table.TopY + BALL_RADIUS) {
      this.position.y = table.TopY + BALL_RADIUS;
      this.velocity = new Vector2(this.velocity.x, -this.velocity.y);
      collided = true;
    }
    if (this.position.x >= table.RightX - BALL_RADIUS) {
      this.position.x = table.RightX - BALL_RADIUS;
      this.velocity = new Vector2(-this.velocity.x, this.velocity.y);
      collided = true;
    }
    if (this.position.y >= table.BottomY - BALL_RADIUS) {
      this.position.y = table.BottomY - BALL_RADIUS;
      this.velocity = new Vector2(this.velocity.x, -this.velocity.y);
      collided = true;
    }
    if (this.position.x <= table.LeftX - BALL_RADIUS) {
      this.position.x = table.LeftX - BALL_RADIUS;
      this.velocity = new Vector2(-this.velocity.x, this.velocity.y);
      collided = true;
    }
    if (collided) {
      this.velocity.mult(0.98);
    }
  }
}
