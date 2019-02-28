Christine Martin, Lesson 7

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
1.  Variables are created that will be used in processing
2.  Canvas is created the width of the window and 400 megapixels tall
3.   ball.x += ball.delta_x * ball.scale_x and ball.y += ball.delta_y * ball.scale_y puts the ellipse, which is drawn later, in motion moving over 1 and down 1.
4.    The If statements change the direction of the circle when it comes to the edge of the canvas.
5.    An ellipse is created that will start at (10,10) that is both 40 wide and 40 tall
6.    Finally, a function is created whereby when the mouse is pressed in different areas of the screen the direction and velocity of the circle is changed.

### Why is it working the way it is?
The If function tells the program what to do when the ball reaches the edges of the Canvas
The mousePressed function tells the program that when the mouse is pressed at certain areas of the screen teh speed and direction of the circle is changed.

### What does each line do?
let ball = {};                                //create ball object
ball.width = 40;                              // create variable ball.width and set the value to 40
ball.x = 10;                                  //create variable ball.x and set the value to 10
ball.y = 10;                                  //create variable ball.y and set the value to 10
ball.delta_x = 1;                             //create variable ball.delta_x and set value to 1
ball.delta_y    createCanvas(windowWidth, 400);     //create a canvas that is the width of the window and 400 megapixels tall
background(0);                                //set canvas background to black.
ball.scale_x = 1;                             //create variable ball.scale_x and set value to 1
ball.scale_y = 1;                             //create variable ball.scale_y and set value to 1
colorMode(HSB);                               // use colorMode in Draw.  THIS WAS ADDED TO THE ORIGINAL PROGRAM
ball.x += ball.delta_x * ball.scale_x;        //new way of showing ball.x = ball.x + (ball.delta_x times ball.scale_x).  Reminder ball.scale_x will change when mouse is clicked

ball.y += ball.delta_y * ball.scale_y;        //new way of showing ball.y = ball.y + (ball.delta_y times ball.scale_y).  Reminder ball.scale_y will change when mouse is clicked

if (ball.x >= width || ball.x <= 0) {         //if the x position of ball is greater than or equal to canvas width OR the x position of ball is less than or equal to 0
    ball.delta_x = -1 * ball.delta_x;         //if above is true, change the direction of the ball to go the opposite direction
}
if (ball.y >= height || ball.y <= 0) {        //if the y position of ball is greather than or equal to canvas height (identified as 400 in the setup) OR the y position of the ball is less than zero
    ball.delta_y = -1 * ball.delta_y;         //if above is true, change the direction of the ball to go the opposite direction

### How can you make the ball change direction?
* The ball direction is changed by the position of the ball in relation to the canvas height and width as well as the mouse being pressed.


## How did you alter the sketch?
* Added colorCode function so that the circle can be filled with multiple colors as it moves across the screen
* When mouse is clicked, a flower is added. As mouse is clicked new flower is added as a different color
