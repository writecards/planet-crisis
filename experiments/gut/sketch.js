var inc = 0.11;
var scl = 2;
var rows, cols;
var zoff = 0;
var fr;
var particles = [];
var flowField;
let palette = [];

let randomNum;
function setup() {
  //noprotect
  createCanvas(windowWidth,windowHeight);
   //background(242, 235, 223);
   background(255);
  
  palette = [
   
    //  color(154, 151, 166),
     //color(63, 65, 89),
    color(155,0,0,10),
   // color(0,10)
    // color(181, 191, 159),
    // color(242, 235, 223),
    // color(242, 235, 223),//2 dont shows
    // color(22, 16, 64),
  ]
  
  cols = round(width / scl);
  rows = round(height / scl)
  fr = createP('');
  
  flowField = new Array(cols*rows);
  for (var i = 0; i <200; i++){
  particles[i] = new Particle();
    }
   
  // setInterval(resetSketch, 3500)
}

function resetSketch(){
  randomNum = floor(random(10,2000));
  console.log(randomNum)
   background(242, 235, 223);
  flowField = new Array(cols*rows);
  for (var i = 0; i < randomNum; i++){
  particles[i] = new Particle();
    }
 
}

function draw() {
 //drawText();
  var yoff = 0;
  //randomSeed(10);
  noFill()

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      var angleMult = radians(960)
      var angle = noise(xoff, yoff,zoff) * angleMult;
     
      var v = p5.Vector.fromAngle(angle);
       v.setMag(1);
      flowField[index] = v;
      
      xoff += inc;
//       stroke(0,50);
//       push()
//       translate(x * scl, y * scl)
//       rotate(v.heading());
      
//      line(0, 0, scl, 0)
     
//       pop()
      
    }
    yoff += inc;
    zoff += 0.4;
  
  }
  
  for (var i = 0; i < particles.length; i++){
    
    if (millis()>30000) {
     console.log('its been 2 secs');
     // redraw();
     break;
                       
          }
    particles[i].follow(flowField);
     particles[i].edges();
  particles[i].show();
  particles[i].update();
 
  
    
  }
  
  
   
  
 fr.html(floor(frameRate()));
 // noLoop();
}

function mousePressed(){
  console.log('mouse be pressed')
  redraw();
}





