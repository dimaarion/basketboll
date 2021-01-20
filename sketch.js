/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}
let s = 0;
let h = 60;
function draw() {
  background(255);
  fill("red");
  stroke(255);
  s = s + 3;

  for (let i = 0; i < 50; i++) {
    rect(100 * i, windowHeight - 50, 100, 30);
  }
  fill("green");
  if (s > windowHeight - h) {
    s = windowHeight - h;
  }
  circle(100, s, 20);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
