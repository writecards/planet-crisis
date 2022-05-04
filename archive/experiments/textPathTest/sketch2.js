
let CHAINDETAILS = {
	text:"ExxonMobil leverages its core capabilities to meet society’s needs for products essential for modern life, while addressing the challenge of climate change. Our strategy uses our advantages in scale, integration, technology and people to build globally competitive businesses that lead industry in earnings and cash flow growth across a broad range of scenarios. We plan to play a leading role in the energy transition, while retaining investment flexibility across a portfolio of evolving opportunities to maximize shareholder returns.",
	textR:0,
	textG:0,
	textB:0,
	textsize:3,
	textspacing:1
};


var x = [];
var y = [];
var segLength = 1000;
var numSegs = 20;



///graph vars

let table;

let myCanvas;

let year = []; 
let mean = [];
 let boxSize = 400;
let font1;

let graphics;
let img;

function preload(){
    table = loadTable("assets/monthly_csv.csv", "csv", "header")
    font1 = loadFont("assets/mons.ttf")
    img = loadImage("icon2.png")
  }


function setup(){
    let canvasW = windowWidth;
    let canvasH = windowHeight;
    myCanvas = createCanvas(canvasW, canvasH, WEBGL);
    myCanvas.position(0, (windowHeight-canvasH)/2);
    graphics = createGraphics(boxSize, boxSize);
    graphics.background(255)
    
    //setting up camera
    createEasyCam();
    document.oncontextmenu = ()=> false;
   // canvas.parent("canvasParent");
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    reload();


    //get basic info of data
    numRows = table.getRowCount();
    numCols = table.getColumnCount();

    for(let i = 0; i < table.getRowCount(); i++){
        year[i] = table.getNum(i,1);
        mean[i] = table.getNum(i,2);
        }
   
    
    cursor(HAND);
    textFont(font1);
};


function draw(){
      background(255);
      fill(255,0,0)
      ambientLight(100);
      directionalLight(255,255,255,0,0,1)
      
    

      graphics.fill(225,0,222);
//       graphics.textSize(14);
//     graphics.textFont(font1)
//    // graphics.text(CHAINDETAILS.text, 10,20);
//    graphics.ellipse(5,5,100);
    
//        texture(graphics);
     // box(boxSize);

      push();
        translate(-width/2, -height/2, -boxSize/2);
mainGraph();

      
     pop();

	//   dragSegment(0, mouseX, mouseY);
  	//   for(var i=0; i < CHAINDETAILS.text.length-1; i++) {
	//    dragSegment(i+1, x[i], y[i]);
  	//   }
}



function dragSegment(i, xin, yin){
	var dx = xin - x[i];
	var dy = yin - y[i];
    
	var angle = atan2(dy,dx);
  
   
	
	var thisLetter = CHAINDETAILS.text[i];
	var prevLetter = CHAINDETAILS.text[i-1];
	if(! prevLetter) {
	  prevLetter = " ";
	}
	var w = (
		 textWidth(thisLetter)
		 +
		 textWidth(prevLetter)
		 ) * (CHAINDETAILS.textspacing / 2);
	x[i] = xin - cos(angle) * w;
	y[i] = yin - sin(angle) * w;
    
	segment(CHAINDETAILS.text[i], w, x[i], y[i], angle);
}


function segment(c,w,x,y,a){
  push();
  translate(x, y);
  rotate(a+PI);
  // line(0, 0, -w, 0);
  // ellipse(0,0,10,10);
  
  
  text(c,0,0);
  pop();
}


function reload(){
  // eval("CHAINDETAILS = "+document.getElementById('setup').value);
  stroke(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
  fill(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
  for(var i=0; i < CHAINDETAILS.text.length; i++) {
    	x.push(width/2);
    	y.push(height/2);
   }
 textSize(CHAINDETAILS.textsize);
}





function mainGraph(){

    let numRowsGraph = numRows/12; //adjusting for months
   
    
    let gapX = boxSize / (year[0] - year[numRows - 1]);
    let gapZ = boxSize / 11;
    for(let i = 0; i < table.getRowCount(); i++){
      let x = width/2-boxSize/2 + gapX*abs((i)/12/2); //not quite sure why divide by 2 works but it fixes width
      let y = map(mean[i], -0.78, 1.35, height/2+boxSize/2, height/2-boxSize/2);
      let z = gapZ*(i%12);
    //datapoints
    let size = map(mean[i], -0.78, 1.35, 1, 5);
       //strokeWeight(size);
       stroke(255,0,0);
       graphics.fill(225,0,222);
   
  
     point(x,y,z);
     
  
      
      //tag
      push();
      translate(0, 0, z);
      textSize(5);
      fill(0);
      textAlign(CENTER);
      //text(mean[i], x, y+20);
     // text(CHAINDETAILS.text, x, y)
      pop();
      
      
      //connecting the points
      
      if(i < numRows-1){
        nextX = width/2-boxSize/2 + gapX*abs((i+1)/12/2);
        nextY = map(mean[i+1], -0.78, 1.35, height/2+boxSize/2, height/2-boxSize/2);
        nextZ = gapZ*((i+1)%12);
      }
      strokeWeight(1);
      beginShape();
      if(i%12 !=11){
       
      
         
         
        // vertex(x,y,z);
        // vertex(nextX, nextY, nextZ);
     
      }
      endShape();
       
     
   
      //this was kind of working, letters at end, misisng z

    //   push()
    //   if(i%12 !=11){
    //       translate(0,0,z);
    //     dragSegment(0, x, y);
  	//     for(var j=0; j < CHAINDETAILS.text.length-1; j++) {
	//         dragSegment(j+1, nextX, nextY);
            
  	//          }
    
    //  }
    //  pop()

      if(i == 22){
          
          fill(0,0,255)
        dragSegment(0, x, y);
            push()
                for(var j=0; j < CHAINDETAILS.text.length-1; j++) {
                    translate(0,0,z/100)
                  
                    dragSegment(j+1, x, y);
                    
                    }
                    pop()

                  beginShape()
                   vertex(x,y,z);
                    vertex(nextX, nextY, nextZ);
                  endShape()
    
        }

  
      
      
     
    }
    
   
  }
  