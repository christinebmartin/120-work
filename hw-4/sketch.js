function preload() {
  img=loadImage("ribbon.jpg");          //preload image used for shirt
}

function setup() {
// create a canvas width and height of window
    createCanvas(windowWidth, 1000);

}

function draw() {

// background white
    background( 'rgb(255, 255, 255)' );  //set background to white

//Project labeled
push();                                 //start sandbox
textSize(28);                           // change font size to 28
textAlign(LEFT,CENTER);
stroke('red');                          //red text
text("Christine Martin's Week 4 Self Portrait", 0,20);
pop();                                  //end sandbox

// Move picture center
translate( 300, 300 );

//Hair
push();                               //start sandbox
noStroke();                           //no outline
fill('rgb(117,92,22)');               //set color to brown
ellipse(-45,40,70,250);               //ellipse on left of head
ellipse(130,30,70,260);               //ellipse on right of head
pop();                                //end sandbox

//head
push();                               //start sandbox
noStroke();                           //no outline
strokeWeight(1);
fill('rgb(255, 221, 153)');           //set color to fleshtone
ellipse(45, 10, 200, 300);            //ellipse


// Ears
ellipse(-60,0,20,40);                 //left Ear
ellipse(149,0,20,40);                 //right Ear
stroke('green');                      //set color to green
strokeWeight(7);                      //set stroke size to 7
point(-60,8); //left Earring          // dot
point(149, 8); //right Earring        // dot

pop();                                //end sandbox

// left eye
strokeWeight(1);
fill('white');                        //set fill to white
ellipse(0,0,60,30);                   //ellipse - outer eye
fill('rgb(194, 144,  6)');            //set fill to brown
ellipse(0,0,15,15);                   //ellipse - inner eye
fill('black');                        //set fill to black
ellipse(0,-1,5,5);                    //ellipse - pupil

// Left Upper Eyelashes
strokeWeight(3);                      //set line width
line(-31,0, -42, -17);                //line
line(-25,-11,-32,-20);                //line
line(-18,-15,-22,-20);                //line

//Left Lower Eyelashes
strokeWeight(1);                      //set line width
line(-31, 3,-31,7);                   //line
line(-28,6,-28,11);                   //line
line(-25, 9, -25,13);                 //line
line(-22, 10, -22, 16);               //line
line(-19, 11, -19, 17);               //line


//left eyebrow
noFill()                              //no fill
strokeWeight(4);                      //set line width to 4
arc(-10, -40, 60, 20, -PI, 0);        //arc

// Right eye
strokeWeight(3);                    //set line width to 3
fill('white');                      //set fill to white
strokeWeight(1);
ellipse(90,0,60,30);                //ellipse outter eye
fill('rgb(194, 144,  6)');          //set eye color
ellipse(90,0,15,15);                //ellipse - inner eye
fill('black');                      //set fill color to black
ellipse(90,-1,5,5);                 //ellipse - pupil

// Right Upper Eyelashes
strokeWeight(3);                    //set line width to 3
line(120, 0, 128, -12);             //line
line(113, -12, 120, -20);           //line
line(105, -15, 110, -20);           //line

// Right Lower Eyelashes
strokeWeight(1);                    //set line width to 1
line(118, 5,118,9);                 //line
line(115,7,115,10);                 //line
line(112,9,112,12);                 //line
line(109, 11, 109, 14);             //line
line(106, 13, 106, 16);             //line

// Right eyebrow
noFill()                            //remove fill
strokeWeight(4);                    //set line width to 4
arc(100, -40, 60, 20, -PI, 0);      //arc

// Mouth
strokeWeight(1);                    //set line width to 1
fill('rgb(230,16,119)' );           //set fill color to pink
  arc(                              //arc - mouth
      45,
      85,
      100,
      30,
      radians(350),
      radians(190));


// freckles
strokeWeight(3);                    //set line width to 3
point(-15,30);                      //point
point(-7,35);                       //point
point(0, 31);                       //point
point(90,30);                       //point
point(80, 35);                      //point
point(100, 34);                     //point

// Nose
noFill();                           //remove fill
strokeWeight(1);                    //set line width to 1
triangle( 45, 20, 55, 30, 35, 30 ); //triangle

//shirt

push();                             //start sandbox
noFill();                           //remove fill
rect(-50,179,200,250);              //rectangle
image(img, 0, 250, 100, 100);       //insert preloaded image and resize
pop();                              //end sandbox

// Neck
push();                             //start sandbox
noStroke();                         //remove stroke
fill('rgb(255, 221, 153)' );        //set color to flesh tone
rect(25, 158, 40,20); //throat      //rectangle
triangle(26,178,65,178,45,200);     //triangle
pop();                              //end sandbox


//right arm
push();                             //start sandbox
fill('rgb(255, 221, 153)' );        //set color to flesh tone
strokeWeight(30);                   //set line width to 30
stroke('rgb(255,221,153)');         //set line color to flesh tone
line(150,186,200,300);              //line
line(200, 300, 150,400);            //line

pop();                              //end sandbox

//left arm
push();                             //start sandbox
fill('rgb(255, 221, 153)' );        //set color to flesh tone
strokeWeight(30);                   //set line width to 30
stroke('rgb(255,221,153)');         //set line color to flesh tone
line(-50,186,-200,300);             //line
line(-200, 300, -50, 350);          //line

pop();                              //end sandbox

// Hat
push();                             //start sandbox
fill('black');                      //fill with black
arc(45,-90,180,150,PI, TWO_PI);     //arc
ellipse(0,-90,175,20);              //ellipse

pop();                              //end sandbox

}
