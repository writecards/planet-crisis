
let CHAINDETAILS = {
	text:"ExxonMobil aims to achieve net-zero emissions from its operated assets by 2050 and is taking a comprehensive approach centered on developing detailed emission-reduction roadmaps for major operated assets.",
	textR:0,
	textG:0,
	textB:0,
	textsize:18,
	textspacing:2
};


var x = [];
var y = [];
var segLength = 200;
var numSegs = 20;


//graph variables
let table;

let myCanvas;

let year = []; 
let mean = [];
let boxSize = 400;
let font1;
let img;

function preload(){
	table = loadTable("assets/monthly_csv.csv", "csv", "header")
	font1 = loadFont("assets/mons.ttf")
	img = loadImage("icon2.png");
  }

  
function setup(){
	let canvasW = windowWidth;
	let canvasH = windowHeight;
    var canvas = createCanvas(canvasW, canvasH, WEBGL);
   // canvas.parent("canvasParent");
   canvas.position(0, (windowHeight-canvasH)/2);


   box(boxSize);
   
    strokeWeight(2);
    textAlign(CENTER,CENTER);
    //reload();
	textFont(font1);



	createEasyCam();
  	document.oncontextmenu = ()=> false;
  
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
	  translate(-width/2, -height/2, -boxSize/2);
	//   dragSegment(0, mouseX, mouseY);
  	//   for(var i=0; i < CHAINDETAILS.text.length-1; i++) {
	//    dragSegment(i+1, x[i], y[i]);
  	//   }


		push();
			translate(-width/2, -height/2, -boxSize/2);
			mainGraph();
  		pop();
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
     

    
   
  }
  
 
}







// function dragSegment(i, xin, yin){
// 	var dx = xin - x[i];
// 	var dy = yin - y[i];
// 	var angle = atan2(dy,dx);
	
// 	var thisLetter = CHAINDETAILS.text[i];
// 	var prevLetter = CHAINDETAILS.text[i-1];
// 	if(! prevLetter) {
// 	  prevLetter = " ";
// 	}
// 	var w = (
// 		 textWidth(thisLetter)
// 		 +
// 		 textWidth(prevLetter)
// 		 ) * (CHAINDETAILS.textspacing / 2);
// 	x[i] = xin - cos(angle) * w;
// 	y[i] = yin - sin(angle) * w;
// 	segment(CHAINDETAILS.text[i],w,x[i],y[i],angle);
// }
// function segment(c,w,x,y,a){
//   push();
//   translate(x, y);
//   rotate(a+PI);
//   // line(0, 0, -w, 0);
//   // ellipse(0,0,10,10);
  
  
//   text(c,0,0);
//   pop();
// }


// function reload(){
//   // eval("CHAINDETAILS = "+document.getElementById('setup').value);
//   stroke(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
//   fill(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
//   for(var i=0; i < CHAINDETAILS.text.length; i++) {
//     	x.push(width/2);
//     	y.push(height/2);
//    }
//  textSize(CHAINDETAILS.textsize);
// }

