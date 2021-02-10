/* eslint-disable no-undef, no-unused-vars */
let s = 0;
let h = 60;
let count = 0;
let cdr = [];
let value = 0;
let speed = 0;
let levels = 0;
let basketInH = 0;
let b = 0;
let basketShar = [{}];
let speedShar, sharX, sharY;
let counrShar = 0;
var hit = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < windowWidth; j++) {
    cdr[j] = random(10, windowWidth - 10);
    basketShar[j] = {
      colorShar1: random(0, 255),
      colorShar2: random(0, 255),
      colorShar3: random(0, 255),
      sharX: random(10, windowWidth - 10),
      sharY: 0,
      radShar: 30,
      speedShar: 1
    };
  }
  // Put setup code here
}

function draw() {
  let stopW = 150;
  let speedP = 5 + levels;
  let speedH = 3 + levels;
  background(255);
  fill("red");
  stroke(255);

  //basketShar[0].speedShar += basketShar[0].speedShar;
  s = s + 1 * 5;
  if (s > windowHeight - basketShar[0].radShar) {
    s = 0;
    count = count + 1;
  }

  if (value === 2) {
    speed = speed + speedP;
  }
  if (value === 1) {
    speed = speed - speedP;
  }
  if (speed < 0) {
    speed = 0;
  }
  if (speed > windowWidth - stopW) {
    speed = windowWidth - stopW;
  }
  pole(windowHeight);

  for (let i = 0; i < count; i++) {
    counrShari += 1;
    basketShar[i].sharY += basketShar[i].speedShar;

    if (basketShar[i].sharY > windowHeight - basketShar[i].radShar - 30) {
      basketShar[i].sharY += -1;
    }

    fill(
      basketShar[i].colorShar1,
      basketShar[i].colorShar2,
      basketShar[i].colorShar3
    );
    circle(basketShar[i].sharX, basketShar[i].sharY, basketShar[i].radShar);
    hit = collideRectCircle(
      0,
      windowHeight - 50,
      windowWidth,
      50,
      basketShar[i].sharX,
      basketShar[i].sharY,
      basketShar[i].radShar
    );
    if (hit) {
      fill("blue");
      rect(100, 100, 100, 100);
    }
  }

  // cricleses(cdr, count);
  basket(windowHeight);
  //rezultTextBascet(colize(cdr[count], speed, s, windowHeight, count));
  //bumCircles(cdr, count, windowHeight, windowWidth);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 1;
  } else if (keyCode === RIGHT_ARROW) {
    value = 2;
  }
}
function cricleses(arr, x) {
  fill("green");
  circle(arr[x], s, 20);
}

function pole(w) {
  for (let i = 0; i < 50; i++) {
    fill("green");
    rect(100 * i, w - 50, 100, 30);
  }
}

function basket(hw) {
  let w = 100;
  let h = 50;
  let kw = 30;
  let kh = 30;
  fill("blue");
  rect(10 + speed, hw - 110, w, h);
  noStroke();
  rect(w + 10 + speed, hw - 90, kw, kh);
  rect(w + 10 + speed, hw - 105, 20, 20);
  fill(225);
  rect(w + 12 + speed, hw - 103, 16, 13);

  fill(210);
  stroke("green");
  circle(30 + speed, hw - 60, 20);
  circle(125 + speed, hw - 60, 20);
}

function colize(hY, kX, hX, windH) {
  let kXMax = kX + 150;
  let hYc = round(hY);
  if (hYc > kX && hYc < kXMax && hX > windH - 110) {
    return true;
  } else {
    return false;
  }
}

function rezultTextBascet(x, bumC) {
  let cri = 60;
  let criR = 50;
  let criX = 43;
  let criY = 70;

  if (x === true) {
    for (let j = 0; j < 100; j++) {
      cdr[j] = random(10, windowWidth - 10);
    }
    s = 0;
    basketInH = basketInH + 1;
  } else {
  }

  for (let i = 0; i < basketInH; i++) {
    fill(119, 221, 231);
    circle(cri + cri * i, cri, criR);
    textSize(30);
    fill("red");
    if (i > 8) {
      text(" " + (i + 1) + " ", criX - 9 + cri * i, criY);
    } else {
      text(" " + (i + 1) + " ", criX + cri * i, criY);
    }
  }
}

function bumCircles(sv, c, h, w) {
  b = b + 1;
  fill("green");
  for (let i = 0; i < 10; i++) {
    //circle(sv[c - 1], h - (60 + b), 10);
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
