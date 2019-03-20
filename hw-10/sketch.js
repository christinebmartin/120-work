//create Stickman variable
var stickman;

//Create words array
var words = ["happy", "love", "mountains", "dog", "travel", "grandkids", "snow", "family", "f cancer", "traeger", "lake"];


//setup
function setup() {
  createCanvas (windowWidth, windowHeight);
  stickman = createSprite(100, windowHeight-200);                   //create Sprite that will start at width of 100 and half the height of the windwo
  stickman.addAnimation('normal', "tile001.png", "tile007.png");  //add animation using files that begin at tile001 through file tile007

  }

//draw
function draw() {
  background (255);                                               //background of canvas is white

push();
scale(0.25);              //scale object to 25% of it's size
translate(0, 2000);       //change center of canvas
flower ();                //initate flower function
pop();

push();
scale (0.25);           //scale object to 25% of it's size
translate(1000, 2000);  //change center of canvas
flower();               //initiate flower function
pop();

frameRate(5);           //change frame rate
textSize(random(100));  //generate random text size
for (var i = 0; i < words.length; i++) {          //set variable to pull word array
    fill('pink');       //text color will be pink
    text(words[i], random(width), random(height));  //show words from array, at random width and height
  }
pop();

fill('gray');           //fill rectangle gray
rect(0,600, 2000, 100);

stickman.velocity.x = 13; //change speed of walking stickman
drawSprites();           //draw sprite

}

//flower function
function flower() {
push();
                                                      //begin sandbox
//create the flower
  stroke(45, 145, 60);                                            //stem
  strokeWeight(20);
  noFill();
  curve(0, 10, 200,200, 200, 400, 20, 370);
  strokeWeight(5);                                                //petals
  fill(224, 128, 255);        //fill petal with purple
  stroke('black');            //outline petal in black
  ellipseMode(CORNERS);
  ellipse(180,200, 220, 50);
  ellipse(180,200,220,350);
  ellipse(200,180,350, 220);
  ellipse(200,180,50, 220);
    ellipseMode(CENTER);
  angleMode(DEGREES);
  rotate(315);
  ellipse(0,200, 40, 150);
  translate(0,170);
  ellipse(0,200, 40, 150);
  translate(100,100);
  rotate(90);
  translate(15,20);
  ellipse(0,0, 40, 150);
  ellipse(0,150, 40, 150);
pop();
}
