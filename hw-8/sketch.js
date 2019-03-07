var stars = [];     //create stars array
var shootingStar;   //create shooting Star array

function setup() {
 createCanvas(windowWidth, windowHeight);   //create canvas that is width and height of window
 frameRate(3);                              //change frame rate to 3

 for (var i = 0; i < 130; i++) {            //create star loop
     stars.push(new Star());
 }
 for (var j = 0; j < random(7); j++) {                     //create shooting star loop
shootingStar = new ShootingStar();

}

}

function draw() {
 background(220);

//set gradient colors
var color1 = color(64, 0, 128);
var color2 = color(255, 85, 0);

//set gradient size and colors
setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

//draw mountains
stroke(110, 127, 128);
line(0,600,100,200);
line(100, 200, 150,550);
line(150, 550, 250, 100);
line(250, 100, 375, 600);
line(375, 600, 600, 100);
line(600, 100, 750, 550);
line( 750, 550, 900, 300);
line( 900, 300, 1000, 575);
line(1000, 575, 1050, 142);
line(1050, 142, 1100, 600);
line(1100, 600, 1300, 100);
line(1300, 100, 1500, 600);

//create moon
  push();
  fill(255, 255, 128);
  ellipse( 300, 80, 80, 80);
  pop();

//star loop
  for (var i = 0; i < 130; i++) {
      stars[i].draw();
  }

//shooting shooting loop
for (var j = 0; j < 7; j++) {
shootingStar.draw();
 }

}

//Gradient function
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

//create star object
function Star() {
     this.x = random(windowWidth);
     this.y = random(windowHeight-360);             //limit how far down stars show on the canvas
     this.w = 2;
     this.h = 2;
  }

Star.prototype.draw = function() {
  noStroke();
fill(255);
ellipse(this.x, this.y, this.w, this.h);
this.x += (random(10) - 5);
this.y += (random(10) - 5);
if (this.w == 2) {
    this.w = 3;
    this.h = 3;
} else {
    this.w = 2;
    this.h = 2;
}
}

//create shooting star object
function ShootingStar() {
  this.x = random(windowWidth-200);
  this.y = random(windowHeight-400);
  this.w = 8;
  this.h = 6;
}

//set shooting star attributes
ShootingStar.prototype.draw = function() {
  noStroke();
  fill(255);
  ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.2;
  }
  this.w += 4;
  this.x += 6;
}
