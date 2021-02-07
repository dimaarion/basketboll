/* eslint-disable no-undef, no-unused-vars */
let s = 0;
let h = 60;
let count = 0;
let criclesB = [10, 125, 30, 33, 144, 50, 53];
let cdr = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < 100; j++) {
    cdr[j] = random(10, windowWidth - 10);
  }
  // Put setup code here
}

function draw() {
  background(255);
  fill("red");
  stroke(255);
  s = s + 8;
  if (s > windowHeight - 60) {
    s = 0;
    count = count + 1;
  }

  pole(windowHeight);

  cricleses(count);
}

function cricleses(x) {
  fill("green");
  circle(cdr[x], s, 20);
}

function pole(w) {
  for (let i = 0; i < 50; i++) {
    rect(100 * i, w - 50, 100, 30);
  }
}

function basket() {
  fill("blue");
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
