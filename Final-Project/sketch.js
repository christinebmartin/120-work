//create varianbles

var video;
var myPic;
var button;

//var rbn;      Tried to create a variable for a background image

//This code to preload an image failed, was supposed to be background image that captured picture would sit in
// function preload() {
// rbn = loadImage("circle.png");
// }

//setup function
function setup() {
  createCanvas(350, 350);               //create Canvas
    //background(51);
frameRate(1);                           //change rate image changes
    video = createCapture(VIDEO);         //turn on computer camera
    video.size(350, 350);                 //size of video capture is 320x240
    noStroke();
//  button = createButton("Take a Pic!"); //create a button that is captioned "Take a Pic!"
  //button.position(600,0);
//  button.mousePressed(takePic);         //when the mouse is pressed, start function "TakePic"

//takePic function
//function takePic() {
//  image(video, 0, 0);                 //print picture captured when mouse clicked at 0,0
}


//  myPic = createImage(320,240);

//draw video captured
function draw() {
background(255);
  // tint(255, 0, 0);
  //image(myPic, 0,0, 320, 240);
video.loadPixels();                     //load pixels of image captured
var num2 = int(random(2,8));            //create a random number for variable num2
var stepSize = num2;                       //print every nth pixel
var num = int(random(1,255));           //create a random number between 1 and 255 for variable num
for (var x = 0; x < video.width; x += stepSize) {     //pixel loop
  for (var y = 0; y < video.height; y += stepSize) {
    var index = ((y*video.width) + x) * 4;
    var redVal = video.pixels[index];
var greenVal = video.pixels[index + num2];
var blueVal = video.pixels[index + num2];
fill(redVal + num2, greenVal + num2, blueVal + num2);
ellipse(x, y, stepSize, stepSize);
  }
}
}
