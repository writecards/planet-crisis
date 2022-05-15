//following https://www.cs.middlebury.edu/~candrews/classes/genart/assignment9.html

/**
 * typewriter. uses input (text) as blueprint for a visual composition.
 *
 * MOUSE
 * click + drag        : move canvas
 *
 * KEYS
 * a-z                 : text input (keyboard)
 * ,.!? and return     : curves
 * space               : small curve with random direction
 * del, backspace      : remove last letter
 * arrow up            : zoom canvas +
 * arrow down          : zoom canvas -
 * alt                 : new random layout
 * ctrl                : save png
 */
// 'use strict';

var textTyped = '';
var font;

var shapeSpace;
var shapeSpace2;
var shapePeriod;
var shapeComma;
var shapeQuestionmark;
var shapeExclamationmark;
var shapeReturn;

var centerX;
var centerY;
var offsetX;
var offsetY;
var zoom;

var actRandomSeed;

function preload() {
  font = loadFont('data/Roboto-Light.ttf');
  shapeSpace = loadImage('data/space.svg');
  shapeSpace2 = loadImage('data/space2.svg');
  shapePeriod = loadImage('data/period.svg');
  shapeComma = loadImage('data/comma.svg');
  shapeExclamationmark = loadImage('data/exclamationmark.svg');
  shapeQuestionmark = loadImage('data/questionmark.svg');
  shapeReturn = loadImage('data/return.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textTyped += 'what does it mean\n';
  textTyped += 'to think about climate change,';
  textTyped += 'as an way of mourning?';
 

  centerX = width / 2;
  centerY = height / 2;
  offsetX = 0;
  offsetY = 0;
  zoom = 0.75;

  actRandomSeed = 6;

  cursor(HAND);
  textFont(font, 25);
  textAlign(LEFT, BASELINE);
  noStroke();
  fill(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (mouseIsPressed && mouseButton == LEFT) {
    centerX = mouseX - offsetX;
    centerY = mouseY - offsetY;
  }

  // allways produce the same sequence of random numbers
  randomSeed(actRandomSeed);

  translate(centerX, centerY);
  scale(zoom);

  for (var i = 0; i < textTyped.length; i++) {
    var letter = textTyped.charAt(i);
    var letterWidth = textWidth(letter);

    // ------ letter rule table ------
    switch (letter) {
    case ' ': // space
      // 50% left, 50% right
      let dir = floor(random(0, 2));
   // let dir = 0;
     
      if (dir == 0) {
       // image(shapeSpace, 1, -15);
        translate(8, 8);
        rotate(QUARTER_PI);
      }
      if (dir == 1) {
        //image(shapeSpace2, 1, -15);
        translate(22, -5);
        rotate(-QUARTER_PI);
      }
      break;

    case ',':
      
        image(shapeComma, -10, -15);
         translate(35, 50);
       // translate(55,50)
        rotate(PI/3)
      
     
      break;

    case '.':
      image(shapePeriod, 1, -77);
      translate(77, -77);
      rotate(-HALF_PI);
      break;

    case '!':
      image(shapeExclamationmark, 1, -45);
      translate(70, -47);
      rotate(-QUARTER_PI);
      break;

    case '?':
      image(shapeQuestionmark, 1, -27);
      translate(70, -20);
      rotate(-QUARTER_PI);
      break;

    case '\n': // return
      image(shapeReturn, 3, -15);
      translate(3, 20);
      rotate(PI);
      break;

    default: // all others
      text(letter, 0, 0);
      translate(letterWidth, 0);
    }
  }

  // blink cursor after text
 // setTimeout(rect(0, 0, 15, 2), 1000)
  if (frameCount  % 60 == 0) rect(0, 0, 15, 2);
}

function mousePressed() {
  offsetX = mouseX - centerX;
  offsetY = mouseY - centerY;
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
  if (keyCode == ALT) actRandomSeed++;
}

function keyPressed() {
  switch (keyCode) {
  case DELETE:
  case BACKSPACE:
    textTyped = textTyped.substring(0, max(0, textTyped.length - 1));
    print(textTyped);
    break;
  case ENTER:
  case RETURN:
    // enable linebreaks
    textTyped += '\n';
    break;
  case UP_ARROW:
    zoom += 0.05;
    break;
  case DOWN_ARROW:
    zoom -= 0.05;
    break;
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    print(textTyped);
  }
}
