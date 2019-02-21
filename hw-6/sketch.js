let diameter;
let angle = 0;
let eSize = 3;
let eLoc = 10;

var spot = {                                                                //create object SPOT
  x: 600,                                                                   // set x value of SPOT
  y: 10                                                                     // set y value of SPOT
}
var color = {                                                               // create object COLOR
  r: 255,                                                                   // set value of red
  g: 0,                                                                     // set value of green
  b: 100                                                                    // set value of blue
}

var r = 0;                                                                  // create variable r with value of 0
var b = 255;                                                                // create variable of b with value of 255

function setup() {
  createCanvas(windowWidth, windowHeight);                                  // canvas set to width and height of window
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);

}

function draw() {
//background to change based on where mouse is
r = map(mouseX, windowWidth, windowHeight, 0, 255);                       //change map mouse movement to range of colors
background (r, 0, b);                                                     //set background color using variables

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;               //circle 1 on left
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;      //circle 2 in middle
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;          //circle 3 on right
color.r = floor(random(100,255));                                         //random color for r
color.g = floor(random (0));                                              //random color for g
color.b = floor((100, 200));                                              //random color for b
fill(color.r, color.g, color.b);                                          //fill ellipse with random colors
  ellipse(0, height / 2, d1, d1);
  ellipse(spot.x, spot.y, d2, d2);
  ellipse(width, height / 2, d3, d3);
  angle += 0.02;
push();
translate(300,300);                                                     //change center of canvas
  noFill();
    stroke(255);                                                        //outline will be white
    strokeWeight(8);                                                    //width of outline
    ellipse(200, 200, (frameCount % 30)*10, 50);                        //cirlce that changes width based on frame count
pop();
push();
translate(800, 300);                                                    // //change center of createCanvas
fill(color.r, color.g, color.b);
ellipse(eLoc, eLoc, eSize, eSize);
ellipse(eLoc * 2, eLoc * 2, pow(eSize, 2), pow(eSize, 2));
ellipse(eLoc * 4, eLoc * 4, pow(eSize, 3), pow(eSize, 3));
ellipse(eLoc * 8, eLoc * 8, pow(eSize, 4), pow(eSize, 4));
pop();
}
