let cell = 5;
let walkers = [];
function setup() {
  
  createCanvas(windowWidth, windowHeight);
   
  walkers.push(new Walker());
  
   background(4, 8, 51);
   background(250,225,167)
  
 // drawGrid();
 
  
}


function mouseClicked(){
  const x = mouseX - (mouseX % cell);
   const y = mouseY - (mouseY % cell);
  walkers = [];
  walkers.push(new Walker(x,y))
  //clear();
  //drawGrid();
  
  
}

class Walker{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(10))
    
    this.show();
  }
  
  isOut(){
    return(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
  
  move(){
    const direction = random();
    
    if(direction < 0.25){
      // go up
      this.pos.y -= cell;
    }else if(direction < 0.5){
      this.pos.y += cell;
    }else if(direction < 0.75){
      this.pos.x -= cell;
    }else if(direction < 1){
      this.pos.x += cell;
    }     
    //this.pos.add(this.vel);
   
  }
  
  show(){
   // fill(random(150),random(120),random(100))
    stroke(16, 46, 19,90)
 
    // ellipse(this.pos.x,this.pos.y,cell,cell);
  
    beginShape(LINES)
      vertex((this.pos.x)-cell/2, (this.pos.y)-cell/2);
      vertex((this.pos.x)+cell/2, (this.pos.y)+cell/2);
      vertex((this.pos.x)-cell/2, (this.pos.y)+cell/2);
      vertex((this.pos.x)+cell/2, (this.pos.y)-cell/2);

      endShape()
  }
   
  
}

function drawGrid(){
    translate(0.5,0.5) // hack to avoid blurry lines
   stroke(80)

   for(let y = cell; y <height; y += cell){
     line(0,y,width,y)
   }
  for(let x = cell; x < width; x += cell){
    line(x,0,x,height)
  }
  resetMatrix();
    }


function draw(){
 
  //drawGrid();
 
    walkers.forEach(walker =>{ if(!walker.isOut()){
      walker.move();
      walker.show();
    }
    });
  
}
    