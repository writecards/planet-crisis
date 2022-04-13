const Y_AXIS = 1;
const X_AXIS = 2;
let line2x, line2y, line3x, line3y, line4x, line4y;



function setup() {
    createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}
let mons;

function preload(){
    mons = loadFont("mons.ttf");
}

function draw() {
    changeCursors();
    background(255);
    let  c1 = color(0, 43, 16);
    let  c2 = color(0, 102, 153);
   line2y = 375;
   line2x = (width/3);
    line3x = (2*width/3);
   line3y = 262.5
   line4y = 525.75
    //setGradient(line2x, 150, width-line2x, 112.5, c1, c2, X_AXIS)
   // filter(BLUR, 3);

  stroke(0)
    push();
        strokeWeight(1);
        textSize(32);  
        textAlign(CENTER,CENTER);
        textFont(mons);
        text("SUTRO TOWER", width/2, 40);
        textSize(56)
        text("INTRO", 225, 582)
        text("1", 720, 394)
        text("2", 1200, 394)
        text("3", 720, 657.3)
        text("4", 1200, 657.3)
     pop();

    

    strokeWeight(1.5)
    line(0,80,width,80);
    line(0, 150, width, 150);

    
   
    
  
    line(line2x,80,line2x,height)
    
    
    line(0, line2y, line2x, line2y)
  


    line(line2x, line3y, width, line3y);
    
 

    line(line2x, line4y, width, line4y);
    
   

    line(line3x, line3y, line3x, height);

    //line(0, height-50, width, height-50);

    noFill()
    for(let i = 0; i < 15; i++){
        ellipse(90 + i*20,262,95,225)
       
    }
  

   
}


function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }

function changeCursors(){
    if(mouseX < line2x && mouseY > line2y){
       cursor('pointer');
    }else if(mouseX >line2x && mouseX < line3x && mouseY > line3y && mouseY < line4y){
        cursor('help');
    }else if(mouseX > line3x && mouseY > line3y && mouseY < line4y){
        cursor('vertical-text')

    }else if(mouseX >line2x && mouseX < line3x && mouseY > line3y){
        cursor('zoom-in')
    }else if(mouseX > line3x && mouseY > line3y){
        cursor('context-menu')

    }else{
        cursor('default');
    }
}

  function mousePressed(){
    if(mouseX < line2x && mouseY > line2x){
        console.log("clicked intro section");
        // window.open('experiments/intro/index.html');
       location.replace('experiments/intro/index.html');
     
    }
    if(mouseX >line2x && mouseX < line3x && mouseY > line3y && mouseY < line4y){
        location.replace('experiments/fractal-tree/index.html');
        
    }
    if(mouseX > line3x && mouseY > line3y && mouseY < line4y ){
        location.replace('experiments/mold-walker/index.html');
    }
    if(mouseX > line2x && mouseX < line3x && mouseY > line3y){
        location.replace('experiments/haylike-viz/index.html');
    }
    if(mouseX > line3x && mouseY > line3y){
        location.replace('exquisite-database/public/index.html');
    }
}
  