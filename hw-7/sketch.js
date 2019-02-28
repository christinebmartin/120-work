let ball = {};                        //create ball object
ball.width = 40;                      // create variable ball.width and set the value to 40
ball.x = 10;                          //create variable ball.x and set the value to 10
ball.y = 10;                          //create variable ball.y and set the value to 10
ball.delta_x = 1;                     //create variable ball.delta_x and set value to 1
ball.delta_y = 1;                     //create variable ball.delta_y and set value to 1
ball.scale_x = 1;                     //create variable ball.scale_x and set value to 1
ball.scale_y = 1;                     //create variable ball.scale_y and set value to 1


function setup() {
    createCanvas(windowWidth, 400);     //create a canvas that is the width of the window and 400 megapixels tall
background(0);                    //set canvas background to white.  everything that happens after setup will be on top of the white background
    colorMode(HSB);               // use colorMode
    rectMode(CENTER);
}



function draw() {                                 //after setup loop the next functions
//start ball movement
//ball will move down 1 and to the right 1
    ball.x += ball.delta_x * ball.scale_x;        //new way of showing ball.x = ball.x + (ball.delta_x times ball.scale_x).  Reminder ball.scale_x will change when mouse is clicked
    ball.y += ball.delta_y * ball.scale_y;        //new way of showing ball.y = ball.y + (ball.delta_y times ball.scale_y).  Reminder ball.scale_y will change when mouse is clicked



//changes the direction of the ball when it reaches the canvas sides
    if (ball.x >= width || ball.x <= 0) {       //if the x position of ball is greater than or equal to canvas width OR the x position of ball is less than or equal to 0
        ball.delta_x = -1 * ball.delta_x;         //if above is true, change the direction of the ball to go the opporsite direction.
    }
    if (ball.y >= height || ball.y <= 0) {      //if the y position of ball is greather than or equal to canvas height (identified as 400 in the setup) OR the y position of the ball is less than zero
        ball.delta_y = -1 * ball.delta_y;         //if above is true, change the direction of the ball to go the opposite direction
    }


                                             //create a circle that is filled white that starts at (10,10) and 40 tall and 40 wide
  fill(random(255), 255, 255);               //use randome hue, saturation and brightness to fill the ball
  ellipse(ball.x, ball.y, ball.width, ball.width);

}

//value of ball.scale_x and _y will change based on where on the screen the mouse is when clicked
function mousePressed() {                                 //outside the draw function these things will open happen when the mouse is clicked
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);        //when mouse is clicked, and x value of mouse is between 0 and canvas width, ball.scale_x will be between .5 and 10
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);       //when mouse is clicked, and y value of is between 0 and anvas height, variable ball.scale_y will be between .5 and 10
    translate(580, 200);                                  // move center of canvas to 580,200
      noStroke();                                         //remove outline
      for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 80);                           //create an ellipse
        rotate(PI/5);                                     //rotate ellipse
      }
}
