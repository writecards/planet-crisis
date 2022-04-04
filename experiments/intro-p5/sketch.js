let x = 20;
let y = 30;
let wind;
let counter = 0;
let lineOfText;
let randomInterval =
  2000;

  let str = "Click to Begin. \\ there’s this netflix film called Don’t Look Up, \\ where two astronomers go on a media tour to warn \\ mankind of a comet that’s to destroy the earth,\\and no one takes the warning seriously. \\the film ends with them sitting around a rumbling dinner table,\\randall saying, “we really did have everything, didn’t we?”\\before the comet swallows the earth whole.\\even though the film never mentions it,\\ if you’re aware of the climate crisis,\\then it’s clear that\\the film is about the impending doom of climate change.\\America is obsessed with these apocalyptic narratives\\with a quick timescale and famous white actors.\\but there’s something a bit off about this analogy.\\in reality\\climate change is not a dramatic singularity, \\something we can just close our eyes and brace for.\\rather, the climate crisis is systemic, multifaceted.\\systems that have enabled decades of carbon emissions: \\a profit-maximizing mindset that has led to so much destruction.\\a lot of people know about the climate crisis,\\but don’t take any actionable steps about it.\\maybe it’s because of the narratives that seem to paralyze us in place:\\it’s the top 100 corporations fault. we as consumers don’t have any power to do anything.\\or, “It’s up to the politicians, the people in power to take leadership.”\\what we forget is, these politicians and corporations \\are embedded in systems we are all apart of.\\so should solutions stop at reducing individual carbon footprint\\or shopping more sustainably?\\no, but it starts with a personal reckoning that can then be transformed into\\a collective movement."

 let sentences = str.split("\\");
 //let textOnScreen = document.getElementById("text");

let svg = [];
let randomSVG = 0;
let drawingX = 700;
let drawingY = 500;



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  wind = createAudio('wind.mp3');
 // wind.autoplay(true);

  textSize(displayWidth/40);
  
  getRandomInterval();
  setInterval(randomText, 2650);
  setInterval(randomDrawing, 2650);
  fill(0)
  
  
  
}
// function mousePressed(){
//   if(wind.isPlaying()){
//     wind.stop();
//   }else{
//     wind.play();
//   }
// }
function draw() {
  background(255);
  
  
  // console.log("drawX: " + drawingX, ", drawY:" + drawingY);
  //  console.log("textX: " + x, ", textX:" + y);
//  image(svg[randomSVG],0,0, displayWidth,displayHeight);
  
}

function mousePressed() {
 
    let fs = fullscreen();
    fullscreen(!fs);
  
}

function getRandomInterval(){
  randomInterval = random(1000, 2250);
}

function randomText(){
   x = random(10, width-800);
   y = random(20, height-200);
  lineOfText = random(sentences);
  
}

function randomDrawing(){
  drawingX = random(10, width-800);
   drawingY = random(20, height-200);
  randomSVG = floor(random(svg.length));
  
}

function displayText(){

for(let i = 0; i < sentences.length; i++){
  
}
  text(lineOfText, x, y)
   
  counter++;
  textOnScreen.innerHTML = sentences[counter];
  if(counter == sentences.length-1){
      counter = 0;
  }
  textOnScreen.style.position = Math.random()*innerWidth;
}