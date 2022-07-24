const CONSTANTS = {
  ballsParams: [
    [new Vector2(1022, 413), Color.yellow],
    [new Vector2(1056, 393), Color.yellow],
    [new Vector2(1056, 433), Color.red],
    [new Vector2(1090, 374), Color.red],
    [new Vector2(1090, 413), Color.black],
    [new Vector2(1090, 452), Color.yellow],
    [new Vector2(1126, 354), Color.yellow],
    [new Vector2(1126, 393), Color.red],
    [new Vector2(1126, 433), Color.yellow],
    [new Vector2(1126, 472), Color.red],
    [new Vector2(1162, 335), Color.red],
    [new Vector2(1162, 374), Color.red],
    [new Vector2(1162, 413), Color.yellow],
    [new Vector2(1162, 452), Color.red],
    [new Vector2(1162, 481), Color.yellow],
    [new Vector2(413, 413), Color.white],
  ],

  // Stick
  maxShotPower: 8000,
  powerInterval: 120,
  originXInterval: 5,
  stickOrigin: new Vector2(970, 11),
  stickShotOrigin: new Vector2(950, 11),

  // Ball
  whiteBallInitialPos: new Vector2(413, 413),
  ballOrigin: new Vector2(25, 25),
  ballDiameter: 38,
  ballRadius: 19,
  minVelocityLength: 5,
  frictionEnergyLoss: 0.016,
  collisionEnergyLoss: 0.02,

  // Table
  pocketRadius: 46,
  pockets: [
    new Vector2(750, 32),
    new Vector2(750, 794),
    new Vector2(62, 62),
    new Vector2(1435, 62),
    new Vector2(62, 762),
    new Vector2(1435, 762),
  ],
};
