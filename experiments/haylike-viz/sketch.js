//author: shengli
// following https://www.youtube.com/watch?v=ZeVbsZQiHdU&list=PLnyhHTSmcsEncMbNDVre2nh3OLXSW9LH2&index=2&ab_channel=weidi

// description: 3d data viz 
// how to interact: click and drag around this 3d data viz



let table;

let myCanvas;

let year = []; 
let mean = [];
 let boxSize = 400;
let font1;


function preload(){
  table = loadTable("assets/monthly_csv.csv", "csv", "header")
  font1 = loadFont("assets/mons.ttf")
}

function setup() {
  let canvasW = windowWidth;
  let canvasH = windowHeight;
  myCanvas = createCanvas(canvasW, canvasH, WEBGL);
  myCanvas.position(0, (windowHeight-canvasH)/2);
  
  //setting up camera
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
  box(boxSize);
  
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