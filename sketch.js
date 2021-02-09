/* eslint-disable no-undef, no-unused-vars */
let s = 0;
let h = 60;
let count = 0;
let cdr = [];
let value = 0;
let speed = 0;
let levels = 0;
let basketInH = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < 100; j++) {
    cdr[j] = random(10, windowWidth - 10);
  }
  // Put setup code here
}

function draw() {
  let stopW = 150;
  let speedP = 5 + levels;
  let speedH = 1 + levels;
  background(255);
  fill("red");
  stroke(255);
  s = s + speedH;
  if (s > windowHeight - 60) {
    s = 0;
    count = count + 1;
  }

  if (value === 2) {
    speed = speed + speedP;
  } else if (value === 1) {
    speed = speed - speedP;
  }
  if (speed < 0) {
    speed = 0;
  }
  if (speed > windowWidth - stopW) {
    speed = windowWidth - stopW;
  }
  pole(windowHeight);
  cricleses(cdr, count);
  basket(windowHeight);

  rezultTextBascet(
    colize(cdr[count], speed, s, windowHeight, count),
    windowWidth,
    cdr
  );
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

function colize(hY, kX, hX, windH, countH) {
  let kXMax = kX + 150;
  let hYc = round(hY);
  let arrH = [];

  if (hYc > kX && hYc < kXMax && hX > windH - 110) {
    return true;
  } else {
    return false;
  }
}

function rezultTextBascet(x, w, sd) {
  if (x > 0) {
    textAlign(CENTER);
    textSize(50);
    text(" " + x + " ", w / 2, 100);
  }
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
