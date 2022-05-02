

let cell = 5;
let walkers = [];


let pos = {
  x: 0,
  y: 0
}

let target = {
  x: 0,
  y: 100
}

let userCount = 0;
let userDotPalette;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  
  colorMode(RGB);
   
  walkers.push(new Walker());

  
}

class Walker{
    constructor(x,y){
      this.pos = createVector(x,y);
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(10))
      this.alph = 90;
      this.palette = [
        color(28, 38, 30,this.alph),
        color(50, 64, 44,this.alph),
        color(75, 89, 45,this.alph),
        color(126, 140, 74,this.alph),
        color(128, 140, 35,this.alph),
        color(12, 250, 0,this.alph)
      ];
      this.userDotX = x;
      this.userDotY = y;
      this.userDotPalette = [
        color(252, 140, 3),
        color(255, 21, 0),
        color(0, 166, 255),
        color(4, 0, 255),
        color(4, 0, 255)
      ]
  
    }
  
    getRandomStrokeFromPalette(){
      let randStroke = floor(random(0,this.palette.length))
      return this.palette[randStroke]
    }

   
    getRandomUserDotCol(){
      let randCol = floor(random(0,this.userDotPalette.length))
      return this.userDotPalette[randCol]
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
      this.fillColor = this.getRandomStrokeFromPalette(); 
      noStroke();
      fill(this.fillColor);
      ellipse(this.pos.x,this.pos.y,cell,cell);
    }

    drawUserDot(){
      this.userFill = this.getRandomUserDotCol();
      fill(this.userFill);
      ellipse(this.userDotX, this.userDotY, cell*1.5, cell*1.5);
    }
     
  
  }







function draw() {
  
   // walkers.push(new Walker(target.x, target.y));
    walkers.forEach(walker =>{ if(!walker.isOut()){
    walker.move();
    walker.show();
    walker.drawUserDot();
  }
  });

  
}




function mouseClicked(){
   const x = mouseX - (mouseX % cell);
   const y = mouseY - (mouseY % cell);

  //  let userDotFill = getRandomUserDotCol();
  //   fill(userDotFill);
  //   ellipse(x,y, cell*2, cell*2)
 
  
   newWalkerPos(x, y);
   walkers = [];
 
  
 sendTargetToServer();

  
}

function newWalkerPos(tx, ty){
    
   // walkers.push(new Walker(tx,ty))
  target = {
    x: tx,
    y: ty
  }
}

function sendTargetToServer(){
  let str = JSON.stringify(target);

   serverConnection.send(str);
   
 
}


//websocket stuff
const serverAddress = "wss://simple-glitch.glitch.me";

const serverConnection = new WebSocket(serverAddress);

serverConnection.onopen = function(){
  console.log("p5 just connected to the server" + serverAddress);
  userCount++;
  console.log(userCount + " human(s) online");
  // serverConnection.send("hello server from p5");
}

serverConnection.onmessage = function(event){

    if (event.data instanceof Blob) {
        reader = new FileReader();

        reader.onload = () => {
            console.log("Result: " + reader.result);
            let obj = JSON.parse(reader.result);
            
            let clientX = reader.result.x;
            let clientY = reader.result[1];
            
           // walkers.push(new Walker(obj))
            console.log("obj: " + obj);
            target = obj;
            walkers.push(new Walker(obj.x, obj.y))
        };

        reader.readAsText(event.data);
    
       // target = event.data;
    } else {
        console.log("Result: " + event.data);
    }
}

serverConnection.onclose = function(event){
  console.log("someone left");
}

function windowResized(){
  
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}