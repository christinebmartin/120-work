//define the circle object
function Circ(xposVal, yposVal, fillColorVal) {
  this.xpos = xposVal;
  this.ypos = yposVal;
  this.fillColor = fillColorVal;
}
//draw the circle
Circ.prototype.display = function() {
  fill(this.fillColor);
  ellipse(this.xpos, this.ypos, 50, 50);
};
//move the circle.  If circle moves off screen, start over from the left
Circ.prototype.update = function() {
  this.xpos += 2;
  if( this.xpos >= 800 || this.xpos <= 0 ) {
        this.xpos = -1;
      }
};

var circObjs = []; // start with empty list
function setup() {
//Create the canvas the width and height of the window
    createCanvas(800, 800);
}
function draw() {
//color the background pink and don't outline
  background('pink');
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < circObjs.length; i++) {
    circObjs[i].display();
    circObjs[i].update();
  }

}
//when the mouse is pressed add a new circle
function mousePressed() {
  circObjs.push(
new Circ(mouseX, mouseY, random(255)));
}
