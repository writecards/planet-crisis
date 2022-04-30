//author: shengli
// following https://www.youtube.com/watch?v=ZeVbsZQiHdU&list=PLnyhHTSmcsEncMbNDVre2nh3OLXSW9LH2&index=2&ab_channel=weidi

// description: 3d data viz 
// how to interact: click and drag around this 3d data viz



var x = [];
var y = [];
var segLength = 200;
var numSegs = 20;

let CHAINDETAILS = {
	text:"ExxonMobil aims to achieve net-zero emissions from its operated assets by 2050 and is taking a comprehensive approach centered on developing detailed emission-reduction roadmaps for major operated assets. This ambition applies to Scope 1 and Scope 2 greenhouse gas emissions. It builds on the Company’s 2030 emission-reduction plans, which include plans to reach net-zero emissions in our Permian Basin operations by 2030, and ongoing investments in lower-emission solutions, including carbon capture and storage, hydrogen and biofuels.",
	textR:0,
	textG:0,
	textB:0,
	textsize:10,
	textspacing:2
};


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
	segment(CHAINDETAILS.text[i],w,x[i],y[i],angle);
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






////////graph////

let table;

let myCanvas;

let year = []; 
let mean = [];
 let boxSize = 400;
let font1;


let strawText;

function preload(){
  table = loadTable("assets/monthly_csv.csv", "csv", "header")
  font1 = loadFont("assets/mons.ttf")
}

function setup() {
  let canvasW = windowWidth;
  let canvasH = windowHeight;
  myCanvas = createCanvas(canvasW, canvasH, WEBGL);
  myCanvas = createCanvas(canvasW, canvasH);
  myCanvas.position(0, (windowHeight-canvasH)/2);

  strokeWeight(1);
    textAlign(CENTER,CENTER);
    reload();
  
  //setting up camera uncomment line below 
  createEasyCam();
  document.oncontextmenu = ()=> false;
  
  //get basic info of data
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //console.log(numRows,numCols);
  
  
  //getMinMax();
  //loading data
  
  for(let i = 0; i < table.getRowCount(); i++){
      year[i] = table.getNum(i,1);
      mean[i] = table.getNum(i,2);
      }
 
  
  cursor(HAND);
  textFont(font1);
  
  
  
}

// function mousePressed() {
 
//     let fs = fullscreen();
//     fullscreen(!fs);
  
// }

//max value 1.35, min value -0.78

function draw() {
  background(255);
  noFill();
  noStroke();
  // box(boxSize);
  
  push();
  translate(-width/2, -height/2, -boxSize/2);
  mainGraph();
  pop();

  dragSegment(0, mouseX, mouseY);
  	  for(var i=0; i < CHAINDETAILS.text.length-1; i++) {
	   dragSegment(i+1, x[i], y[i]);
  	  }
}

let nextX, nextY, nextZ;

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
     strokeWeight(size);
     stroke(255,0,0);
  point(x,y,z);
    
    //tag
    push();
    translate(0, 0, z);
    textSize(5);
    fill(0);
    textAlign(CENTER);
    //text(mean[i], x, y+20);
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
      vertex(x,y,z);
      vertex(nextX, nextY, nextZ);
    }
    endShape();
     
    // strawText.text("sorry greta",x,y,z);
    // texture(strawText);
 
    if(i%12 !=11){
     //vertex(x,y,z);
       text("change", x, y);
    }

    
    
   
  }
  
 
}



// let dataMin, dataMax = 0;

// function getMinMax(){
//   for(let i = 0; i < numRows; i++){
//     if(table.getNum(i,2)>dataMax){
//       dataMax = table.getNum(i,2);
//     }
//   }
//   dataMin = dataMax;
//   for(let i = 0; i < numRows; i ++){
//     if(table.getNum(i,2)<dataMin){
//       dataMin = table.getNum(i,2);
//     }
//   }
//   print("max value " + dataMax + ", min value " + dataMin)
// }



