
let axiom = "X";
let sentence = axiom;
let len = 500;
let angle;
let rules = [];
let myCanvas;
let count = 0;
let limit = 5;

let secretText = document.getElementById("secretText");

secretText.style.display = "none";
secretText.style.color = "red";

rules[0] = {
  a: "X",
  b: "F+[[X]-X]-F[-FX]+X"
 // b: "FF+[+F-F-F]-[-F+F+F]"
 //b:"F[+F]F[-F][F]"
    //b:"F[+F]F[-F][FF]"
  // b:"FF[F+FF]F[-F+F]"
  //b:"FF[+F]F[F-F]"
   //b:"F[F]+F[F+F]"
}

rules[1] = {
  a: "F",
  b: "FF"
}


function generate(){
  len *= 0.4;
  let nextSentence = "";
  for(let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    let found = false;
  
   for(let j = 0; j < rules.length; j++){
     if(current == rules[j].a){
       found = true;
       nextSentence += rules[j].b;
       break;
     }
   }
   if(!found){
    nextSentence += current;
   } 
  }
  sentence = nextSentence;
   createP(sentence);
   turtle();
   count++;
   console.log(count);
   if(count >= 5){ // remove() gives bugs iwth createP, resetSketch doesnt reset count/turtle
      //remove();
     
    resetSketch();
    sentence = "";
    secretText.style.display = "block";
   }
   
}


function turtle(){
  background(255)
  resetMatrix();
  translate(width/2,height)
  stroke(255,0,0,70)
  strokeWeight(1)
  noFill()
  
    for(let i = 0; i < sentence.length; i++){
      let current = sentence.charAt(i);
      if(current == "F"){
        line(0,0,0,-len)
        ellipse(0,0,5);
      // ellipse(0,0,-len,-len)
        translate(0,-len)
      }else if (current == "+"){
        rotate(angle);
      }else if (current == "-"){
        rotate(-angle)
      }else if (current == "["){
        push()
      }else if (current == "]"){
        pop()
      }
    
  }
  
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  background(255);
  angle = radians(23)
  createP(axiom)
  turtle();
  let button = createButton("generate")

  button.mousePressed(generate);
  

  //reasoning behind 380 seconds: given current emission trends, the earth is estimated to reach 1.5 degrees
  // of global warming by july 28 2028. inspired by the climate clock in new york, the tree is counting down 
      //  from may 2 2022 to july 28 2028, which is 2280 days. 
      // i've adopted this number into the project, so that the tree grows a full cycle every 2280 seconds.
      // the tree generates in 6 stages, and 2280/6 = 380. 

 doSomethingSyncedEveryXseconds(3, 5, function(currentStage){
   generate();
  })
    
  

  
}



function resetSketch(){
  myCanvas.clear();
  background(255);
  resetMatrix();
}

function doSomethingSyncedEveryXseconds(x, numStages, callback){
  let currentTimeInSeconds = Math.floor(Date.now()/1000);
  let stage = Math.floor(currentTimeInSeconds/x)%numStages; //
  callback(stage);
  let changed = false;
  setInterval(function(){
     let currentTimeInSeconds = Math.floor(Date.now()/1000);
     if(currentTimeInSeconds%x==0&&!changed){
         stage = Math.floor(currentTimeInSeconds/x)%numStages; //
         callback(stage);
         changed = true;
     }else{
         changed = false;
     }
  }, 500)
}

// doSomethingSyncedEveryXseconds(5, 5, function(currentStage){
//   generate();
//   console.log("current synced stage is: ", currentStage)
// })