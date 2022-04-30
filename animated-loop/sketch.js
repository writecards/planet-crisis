let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  size = windowWidth/1.75;
}

function draw() {
  background(255);
  translate(width/2, height/2);
  noFill()
  stroke(0)
  strokeWeight(1)
  for(let i = 0; i < 8; i++){
    push()
    rotate(cos(frameCount + i*30)* 5)
    rect(0, 0, size - i*3, size - i*25.5,80-i)
    pop()
  }
}

function windowResized(){
  
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}