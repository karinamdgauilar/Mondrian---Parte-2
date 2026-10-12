function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(242, 240, 233);

 
  let mDistX = map(mouseX, 0, width, -70, 70);
  let mDistY = map(mouseY, 0, height, -70, 70);

  
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
    mDistX = 0;
    mDistY = 0;
  }

  let xMain = width * 0.46 + mDistX;
  let xYellow = width * 0.10;
  let xBlueRight = width * 0.77 + mDistY;

  let yTop = height * 0.40 + mDistY * 0.6;
  let yMid = height * 0.64 + mDistX * 0.6;
  let yBottom = height * 0.95;

  
  noStroke();

 
  fill(225, 38, 18);
  rect(0, 0, xMain, yTop);

  
  fill(245, 208, 32);
  rect(0, yMid, xYellow, height - yMid);

  fill(26, 35, 126);
  rect(xMain, yMid, xBlueRight - xMain, yBottom - yMid);

 
  fill(244, 243, 238); rect(xMain, 0, width - xMain, yTop);
  fill(238, 237, 232); rect(0, yTop, xMain, yMid - yTop);
  fill(240, 235, 235); rect(xMain, yTop, width - xMain, yMid - yTop);
  fill(235, 234, 230); rect(xYellow, yMid, xMain - xYellow, height - yMid);
  fill(239, 238, 234); rect(xBlueRight, yMid, width - xBlueRight, height - yMid);

 
  stroke(15, 15, 15);
  strokeCap(SQUARE);

  strokeWeight(18); line(0, yTop, width, yTop);
  strokeWeight(16); line(0, yMid, width, yMid);
  strokeWeight(14); line(xMain, yBottom, xBlueRight, yBottom);

  strokeWeight(17); line(xMain, 0, xMain, height);
  strokeWeight(15); line(xYellow, yMid, xYellow, height);
  strokeWeight(14); line(xBlueRight, yMid, xBlueRight, height);
}