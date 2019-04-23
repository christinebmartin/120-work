//Declare setup function
function setup(){

//create a canvas 600 px wide and 400 px high
    createCanvas( 600,400);

//color the background 'pink'
    background( 'pink');
}

//Declare the draw function
function draw() {

  //tell p5 to print the text string "Hello WOrld!"
  //this is going to be positioned at ( x: 20, y: 30).
  text( "Hello World!",20,30);
  flower();
}

function flower() {         //initiate flower 
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
