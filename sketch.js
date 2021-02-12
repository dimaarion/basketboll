/* eslint-disable no-undef, no-unused-vars */

const basketGame = {
  sittens: {
    speedKadr: {
      min: 0,
      max: 2,
      count: { min: 0, max: 1, sterShar: 0 }
    },
    keyboard: {
      boardPressLeftRight: {
        speed: {
          min: 0,
          max: 8
        },
        value: 0
      }
    },
    windowGame: {
      right: 150,
      left: 0,
      rightPanel: 20
    }
  },
  basketShar: [{}],
  basketCar: {
    wheels: {
      circle1X: 30,
      circle1Y: 60,
      circle2X: 125,
      circle2Y: 60,
      circleRad: 20,
      strokeColor: "green",
      fill: 225
    },
    body: {
      rect1X: 10,
      rect1Y: 110,
      rectWidth1: 100,
      rectHeight1: 50,
      rect2X: 110,
      rect2Y: 90,
      rectWidth2: 30,
      rectHeight2: 30,
      rect3X: 110,
      rect3Y: 105,
      rectWidth3: 20,
      rectHeight3: 20,
      rectCabX: 112,
      rectCabY: 103,
      rectWidthCab: 16,
      rectHeightCab: 13,
      fillCab: 255,
      line1X: 5,
      line1Y: 120,
      line1aX: 18,
      line1aY: 105,
      line2X: 112,
      line2Y: 120,
      line2aX: 101,
      line2aY: 105,
      line3X: 125,
      line3Y: 120,
      line3aX: 112,
      line3aY: 120,
      line4X: 15,
      line4Y: 110,
      line4aX: 101,
      line4aY: 110,
      text: {}
    }
  },
  basketFooter: {
    rectX: 0,
    rectY: 50,
    rectHeight: 30
  },
  countSharCar(s) {
    let x = 50;
    fill("green");
    circle(60, 60, 100, 100);
    fill(255);
    textSize(40);
    if (s > 9) {
      x = 38;
    }
    if (s > 99) {
      x = 25;
    }
    text("" + s + "", x, 73);
  },
  pole(height, width) {
    fill("green");
    rect(
      this.basketFooter.rectX,
      height - this.basketFooter.rectY,
      width,
      this.basketFooter.rectHeight
    );
  },
  startGame(height) {
    this.sittens.speedKadr.min =
      this.sittens.speedKadr.min + this.sittens.speedKadr.max;
    if (this.sittens.speedKadr.min > height - this.basketShar[0].radShar) {
      this.sittens.speedKadr.min = 0;
      this.sittens.speedKadr.count.min =
        this.sittens.speedKadr.count.min + this.sittens.speedKadr.count.max;
    }
  },
  controlGame(width) {
    if (this.sittens.keyboard.boardPressLeftRight.value === 2) {
      this.sittens.keyboard.boardPressLeftRight.speed.min =
        this.sittens.keyboard.boardPressLeftRight.speed.min +
        this.sittens.keyboard.boardPressLeftRight.speed.max;
    }
    if (this.sittens.keyboard.boardPressLeftRight.value === 1) {
      this.sittens.keyboard.boardPressLeftRight.speed.min =
        this.sittens.keyboard.boardPressLeftRight.speed.min -
        this.sittens.keyboard.boardPressLeftRight.speed.max;
    }
    if (
      this.sittens.keyboard.boardPressLeftRight.speed.min <
      this.sittens.windowGame.left
    ) {
      this.sittens.keyboard.boardPressLeftRight.speed.min = this.sittens.windowGame.left;
    }
    if (
      this.sittens.keyboard.boardPressLeftRight.speed.min >
      width - this.sittens.windowGame.right
    ) {
      this.sittens.keyboard.boardPressLeftRight.speed.min =
        width - this.sittens.windowGame.right;
    }
    if (this.sittens.speedKadr.count.min > 200) {
      noLoop();
    }
  },
  controlShar(height, width) {
    let hit = false;
    let hit2 = false;
    let hitL = false;
    let hitL2 = false;
    let hitL3 = false;
    let hitC = false;
    let hitC1 = false;
    let sCr = 0;

    let speed = this.sittens.keyboard.boardPressLeftRight.speed.min;
    for (let i = 0; i < this.sittens.speedKadr.count.min; i++) {
      this.basketShar[i].sharY += this.basketShar[i].speedShar;
      fill(
        this.basketShar[i].colorShar1,
        this.basketShar[i].colorShar2,
        this.basketShar[i].colorShar3
      );
      circle(
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );

      hit = collideRectCircle(
        0,
        height - 50,
        width,
        50,
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );
      hit2 = collideRectCircle(
        this.basketCar.body.rect2X + speed,
        height - this.basketCar.body.rect2Y,
        this.basketCar.body.rectWidth2,
        this.basketCar.body.rectHeight2,
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );
      hitL = collideLineCircle(
        15 + speed,
        height - 110,
        101 + speed,
        height - 110,
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );
      hitL2 = collideLineCircle(
        5 + speed,
        height - 120,
        18 + speed,
        height - 105,
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );
      hitL3 = collideLineCircle(
        this.basketCar.body.line2X + speed,
        height - this.basketCar.body.line2Y,
        this.basketCar.body.line2aX + speed,
        height - this.basketCar.body.line2aY,
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar
      );
      hitC = collideCircleCircle(
        this.basketShar[i].sharX,
        this.basketShar[i].sharY,
        this.basketShar[i].radShar,
        this.basketCar.wheels.circle1X + speed,
        height - this.basketCar.wheels.circle1Y,
        this.basketCar.wheels.circleRad
      );
      if (hit) {
        this.basketShar[i].sharY += -1;
      }
      if (hitC) {
        this.basketShar[i].sharX -= 1;
      }
      if (hit2) {
        this.basketShar[i].sharX += 1;
      }
      if (hitL || hitL2 || hitL3) {
        sCr = sCr + 1;
        this.basketShar[i].sharX = 60 + speed;
        this.basketShar[i].sharY = height - 110;
        this.basketShar[i].radShar = 30 + i / 5;
      }
    }
    this.countSharCar(sCr);
  },
  basket(height, speed) {
    fill("blue");
    rect(
      this.basketCar.body.rect1X + speed,
      height - this.basketCar.body.rect1Y,
      this.basketCar.body.rectWidth1,
      this.basketCar.body.rectHeight1
    );
    noStroke();
    rect(
      this.basketCar.body.rect2X + speed,
      height - this.basketCar.body.rect2Y,
      this.basketCar.body.rectWidth2,
      this.basketCar.body.rectHeight2
    );
    rect(
      this.basketCar.body.rect3X + speed,
      height - this.basketCar.body.rect3Y,
      this.basketCar.body.rectWidth3,
      this.basketCar.body.rectHeight3
    );
    fill(this.basketCar.body.fillCab);
    rect(
      this.basketCar.body.rectCabX + speed,
      height - this.basketCar.body.rectCabY,
      this.basketCar.body.rectWidthCab,
      this.basketCar.body.rectHeightCab
    );
    //Колеса
    fill(this.basketCar.wheels.fill);
    stroke(this.basketCar.wheels.strokeColor);
    circle(
      this.basketCar.wheels.circle1X + speed,
      height - this.basketCar.wheels.circle1Y,
      this.basketCar.wheels.circleRad
    );
    circle(
      this.basketCar.wheels.circle2X + speed,
      height - this.basketCar.wheels.circle2Y,
      this.basketCar.wheels.circleRad
    );

    stroke("blue");
    strokeWeight(10);
    line(
      this.basketCar.body.line1X + speed,
      height - this.basketCar.body.line1Y,
      this.basketCar.body.line1aX + speed,
      height - this.basketCar.body.line1aY
    );
    line(
      this.basketCar.body.line2X + speed,
      height - this.basketCar.body.line2Y,
      this.basketCar.body.line2aX + speed,
      height - this.basketCar.body.line2aY
    );
    line(
      this.basketCar.body.line3X + speed,
      height - this.basketCar.body.line3Y,
      this.basketCar.body.line3aX + speed,
      height - this.basketCar.body.line3aY
    );
    line(
      this.basketCar.body.line4X + speed,
      height - this.basketCar.body.line4Y,
      this.basketCar.body.line4aX + speed,
      height - this.basketCar.body.line4aY
    );
    strokeWeight(1);
  }
};
function setup() {
  createCanvas(
    windowWidth - basketGame.sittens.windowGame.rightPanel,
    windowHeight
  );
  for (let j = 0; j < 250; j++) {
    basketGame.basketShar[j] = {
      colorShar1: random(0, 255),
      colorShar2: random(0, 255),
      colorShar3: random(0, 255),
      sharX: random(10, windowWidth - 30),
      sharY: 0,
      radShar: 30,
      speedShar: 1
    };
  }
  // Put setup code here
}

function draw() {
  background(255);
  fill("red");
  stroke(255);
  basketGame.startGame(windowHeight);
  basketGame.controlGame(windowWidth);
  basketGame.pole(windowHeight, windowWidth);
  basketGame.controlShar(windowHeight, windowWidth);
  basketGame.basket(
    windowHeight,
    basketGame.sittens.keyboard.boardPressLeftRight.speed.min
  );
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    basketGame.sittens.keyboard.boardPressLeftRight.value = 1;
  } else if (keyCode === RIGHT_ARROW) {
    basketGame.sittens.keyboard.boardPressLeftRight.value = 2;
  }
}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    basketGame.sittens.keyboard.boardPressLeftRight.value = 0;
  } else if (keyCode === RIGHT_ARROW) {
    basketGame.sittens.keyboard.boardPressLeftRight.value = 0;
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(
    windowWidth - basketGame.sittens.windowGame.rightPanel,
    windowHeight
  );
};
