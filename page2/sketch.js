// const { text } = require("stream/consumers");


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


let userDotPalette;

let userCountP = document.getElementById("usercount");
let you = document.getElementById("colorfulYou");

let ranNum;
let userCount;
let dotFill;
let youTextCol;

function setup() {
  createCanvas(windowWidth, windowHeight+1);
  background(0)
  
  colorMode(RGB);
   
  walkers.push(new Walker());
  dotFill = color(255, 0, 195);
  
  
}

class Walker{
    constructor(x,y){ //add userdot color to instructor, first make sure it can be assigned in server
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
      
  
    }
  
    getRandomStrokeFromPalette(){
      let randStroke = floor(random(0,this.palette.length))
      return this.palette[randStroke]
    }

   
    // getRandomUserDotCol(){
    //   let randCol = floor(random(0,this.userDotPalette.length))
    //   return this.userDotPalette[randCol]
    // }
    
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

    drawUserDot(dotFill){
      
      fill(dotFill)
      ellipse(this.userDotX, this.userDotY, cell*1.5, cell*1.5);
    }
     
  
  }







function draw() {
  if(ranNum == 0){
    dotFill =  color(252, 140, 3);
  }else if(ranNum == 1){
    dotFill =  color(255, 21, 0);
  }else if(ranNum == 2){
    dotFill = color(0, 166, 255);
  }else if(ranNum == 3){
    dotFill = color(0, 166, 255);
  }else if(ranNum == 4){
    dotFill = color(4, 0, 255);
  }
  
   // walkers.push(new Walker(target.x, target.y));
    walkers.forEach(walker =>{ if(!walker.isOut()){
    walker.move();
    walker.show();
    walker.drawUserDot(dotFill);
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
  document.body.style.cursor = "pointer";
  // userCount++;
  // console.log(userCount + " human(s) online");
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
      let userInfo = JSON.parse(event.data);
       userCount = userInfo.userCount;
       ranNum = userInfo.randomNum;
      // let userCount = event.data["userCount"];
      // let ranNum = event.data["randomNum"];
        console.log("userCount = " + userCount);
        console.log("ranNum: " + ranNum);
        console.log("event.data: " + event.data);
        
        if(ranNum == 0){
          youTextCol = "rgb(252, 140, 3)";
        }else if(ranNum == 1){
          youTextCol = "rgb(255, 21, 0)";
        }else if(ranNum == 2){
          youTextCol = "rgb(0, 166, 255)";
        }else if(ranNum == 3){
          youTextCol = "rgb(0, 166, 255)";
        }else if(ranNum == 4){
          youTextCol = "rgb(4, 0, 255)";
        }
        you.style.color = youTextCol;
         userCountP.innerHTML = userCount-1;
    }
    //console.log(event.data + " event data");
}



serverConnection.onclose = function(event){
  console.log("someone left");
}

function windowResized(){
  
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}