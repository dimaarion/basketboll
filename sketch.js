/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}
let s = 0;
let h = 60;
let count = 0;
let criclesB = [10, 25, 30, 33, 44, 50, 53];
function draw() {
  background(255);
  fill("red");
  stroke(255);
  s = s + 3;
  count = count + 0.01;
  for (let i = 0; i < 50; i++) {
    rect(100 * i, windowHeight - 50, 100, 30);
  }
  fill("green");
  if (s > windowHeight - h) {
    s = windowHeight - h;
  }

  if (count > 10) {
    count = 0;
  }

  for (let x = 0; x < criclesB.length; x++) {
    circle(criclesB[x], 10, 20);
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
