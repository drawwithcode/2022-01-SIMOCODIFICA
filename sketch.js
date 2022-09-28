//this is the code to create a generative artwork inspired by "Altarpiece - No 1 - Group X", an abstract painting by Hilma af Klint

let a = 0; //this is a variable I need to make items move or grow, making it depend on frameCount
let raggio = 0; //this is the variable I'll use to make the radius of the first circle grow
let raggio1 = 0; //same as before but for the second one
let raggio2 = 0; //and the third one

function setup() {
  createCanvas(windowWidth, windowHeight); // I set the canvas size to the full window size
  background("#171715");

  textFont("Helvetica light");
  textSize(width / 75);
  textAlign(LEFT, TOP); // these are the text properties
}

function draw() {
  noStroke();
  fill("white");
  text("Generative artwork", 100, windowHeight / 2);
  text("inspired by Hilma af Klint", 100, windowHeight / 2 + 30); // here I create the text on the side of the artwork to pay tribute to Hilma af Klint for the inspiration

  angleMode(DEGREES);
  translate(windowWidth / 2, windowHeight / 2); // at first I apply a transformation to translate the origin to the centre of the window, so that's easier to calculate coordinates for my composition (that's centered)

  // here I start to use the "if" condition to make an arrangement of the trasformations I need based on the frameCount; so basically I use it to give them a timing
  fill("#999cb3");
  if (frameCount < 100) {
    // until frameCount is lower than 100 the code create the first circle, whose radius depend on the frameCount too, so that it grows in the time
    raggio = frameCount * 6;
    ellipse(0, -300, raggio);
  }

  fill("#6a9062");
  if (frameCount >= 100 && frameCount < 200) {
    // when frameCount go over 99 the last condition become false, so the radius stop to grow and the code doesn't draw the circle anymore
    raggio1 = (frameCount - 100) * 5; // I substract the actual value of the frameCount to itself, so that the value of the radius actually start on 0
    ellipse(0, -300, raggio1); // here we have a smaller circle based on the same principle of the latter
  }

  if (frameCount >= 200 && frameCount < 250) {
    push(); // I use "push" and "pop" to isolate part of code that could affect the next lines with transformations that I don't need for all the code (in this case the translation an the rotation affect only the triangle)
    noStroke();
    fill("#e5ab34");
    translate(0, -300);
    rotate(frameCount * 10); // I make the triangle rotate to compose the "sunshine" ring effect present in the artwork
    triangle(0, -250, 20, 0, -20, 0);
    pop();
  }

  if (frameCount >= 250 && frameCount < 300) {
    push();
    noStroke();
    fill("#5589b9");
    translate(0, -300);
    rotate(frameCount * 10);
    rotate(15); // rotation that off-set the second "sunshine" ring so that it fill the empty spaces of the first
    triangle(0, -200, 15, 0, -15, 0); //second ring of "sunshine"
    pop();
  }

  if (frameCount >= 300 && frameCount < 400) {
    push();
    noStroke();
    fill("#bb8341");
    raggio2 = (frameCount - 300) * 3;
    ellipse(0, -300, raggio2); // here we have another circle based on the same principle of two already drawn
    pop();
  }

  if (frameCount >= 400 && frameCount < 500) {
    noStroke();
    fill("#452416");
    rectMode(CENTER); // in this way the rectangle is drawn from its center point
    a = frameCount - 400; // I make the variable "a" depend on the frameCount, so that it grows with the time. I subtract the actual frameCount value to make "a" start from 0
    rect(0, 450, 800, a); // a rectangle to create the "ground baseline" of the artwork. Its height is given by "a" value.
  }

  strokeWeight(1);
  if (frameCount >= 500 && frameCount < 550) {
    a = frameCount - 500; //same use of "a" as before, but this time to make move the second point of a line and create a "beam of light" composition effect
    stroke("#263f2b");
    //line(0, -200, -a, windowHeight / 2 - 80); (left as comment on purpose)
    //line(0, -200, a, windowHeight / 2 - 80);
    gradientLine(0, -200, -a, windowHeight / 2 - 80, "white", "#263f2b"); // to create the lines I used this extra function found online (see the end of the cose) that allows me to have the gradient effect on them. I left the normal lines as code comments as backup.
    gradientLine(0, -200, a, windowHeight / 2 - 80, "white", "#263f2b"); // I make them blend from white to the desired color
  }

  if (frameCount >= 550 && frameCount < 650) {
    //same as before, I used some values of frameCount as threshold to change the color of the line and create the rainbow effect
    a = frameCount - 500;
    stroke("#ab703a");
    //line(0, -200, -a, windowHeight / 2 - 80);
    gradientLine(0, -200, -a, windowHeight / 2 - 80, "white", "#ab703a");
    stroke("#1b2231");
    //line(0, -200, a, windowHeight / 2 - 80);
    gradientLine(0, -200, a, windowHeight / 2 - 80, "white", "#336290");
  }

  if (frameCount >= 650 && frameCount < 750) {
    a = frameCount - 500;
    stroke("#a1552b");
    //line(0, -200, -a, windowHeight / 2 - 80);
    gradientLine(0, -200, -a, windowHeight / 2 - 80, "white", "#a1552b");
    stroke("#2d353c");
    //line(0, -200, a, windowHeight / 2 - 80);
    gradientLine(0, -200, a, windowHeight / 2 - 80, "white", "#283541");
  }

  if (frameCount >= 750 && frameCount < 850) {
    a = frameCount - 500;
    stroke("#9a2c1c");
    //line(0, -200, -a, windowHeight / 2 - 80);
    gradientLine(0, -200, -a, windowHeight / 2 - 80, "white", "#9a2c1c");
    stroke("#4a475b");
    //line(0, -200, a, windowHeight / 2 - 80);
    gradientLine(0, -200, a, windowHeight / 2 - 80, "white", "#4a475b");
  }

  if (frameCount == 850) {
    push();
    noStroke();
    fill("#171715");
    translate(0, -150);
    triangle(0, -50, 25, 0, -25, 0);
    fill("#bb8341");
    ellipse(0, -20, 15, 15);
    pop();
  }

  rectMode(CENTER);
  strokeWeight(15);
  stroke(255);
  noFill();
  rect(0, 0, 800, windowHeight - 15); // this rectangle work as a frame for the artwork and it's drawn as the last item, so that it's on top of all the previous items. The height is the same of the window minus the stroke weight, so that it doesn't exit the window view
}

//this last function is an "extra" I found online to create a gradient line, so that the effect is more interesting and similar to the one of the artwork (here the link: https://editor.p5js.org/odmundeetgen/sketches/qqmp0fVSK)
function gradientLine(x1, y1, x2, y2, color1, color2) {
  // linear gradient from start to end of line
  var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);

  this.drawingContext.strokeStyle = grad;

  line(x1, y1, x2, y2);
}
