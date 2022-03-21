let cell = 5;
let walkers = [];


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
   
  walkers.push(new Walker());
  
   //background(4, 8, 51);
   //background(250,225,167)
  background(0);
  
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


function randomSelectTwo(){
  let rando = random(1)
   
  if(rando > 0.5){
   return true;
  }else{
    return false;
  }
}



class Walker{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(10))
    //this.strokeColor = getRandomFromPalette();
    
//this.strokeColor = random(palette)
this.alph = 90;
    this.palette = [
      color(28, 38, 30,this.alph),
      color(50, 64, 44,this.alph),
      color(75, 89, 45,this.alph),
      color(126, 140, 74,this.alph),
      color(128, 140, 35,this.alph),
      color(12, 250, 0,this.alph)
    ]
    this.wordList = [
      "regulating",
      "tendencies",
      "of",
      "microscopic",
      "fungi"
    ]

  }

  getRandomStrokeFromPalette(){
    let randStroke = floor(random(0,this.palette.length))
    return this.palette[randStroke]
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
    this.strokeColor = this.getRandomStrokeFromPalette();
    
    fill(this.strokeColor);
    // fill(255,50);
   
    ellipse(this.pos.x,this.pos.y,cell,cell);
    //text(this.wordList[floor(random(this.wordList.length))], this.pos.x,this.pos.y)

    // if(randomSelectTwo()){
    //   beginShape(LINES)
    //     vertex((this.pos.x)-cell/2, (this.pos.y)-cell/2);
    //     vertex((this.pos.x)+cell/2, (this.pos.y)+cell/2);
    //     vertex((this.pos.x)-cell/2, (this.pos.y)+cell/2);
    //     vertex((this.pos.x)+cell/2, (this.pos.y)-cell/2);

    //     endShape()
    // }else{
    //   noStroke();
    //   fill(this.strokeColor);
    //   ellipse(this.pos.x,this.pos.y,cell)
    // }
  
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
    


