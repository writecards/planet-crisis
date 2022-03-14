let x = 20;
let y = 30;
let wind;
let lineOfText;
let randomInterval =
  2000;

let svg = [];
let randomSVG = 0;
let drawingX = 700;
let drawingY = 500;

let sentences = ['when I was three', 
                 'she taught me the word for', 
                 'the long streaks of clouds', 
                 'left behind airplanes: ',
                 'contrails.',
                 'back then, I also impressed the adults', 
                 'around me by remembering the word for', 
                 'why planes fly:',
                 'areodynamics.',
                 'those planes with four seats in the middle',
                 'were the best because we could all sit together',
                 'me and Michael in the middle',
                 'she and my dad on either side.',
                 'watching endless movies in between servings',
                 'of American breakfast and then Chinese dinner.',
                 'a route I have flown at least 23 times.',
                 'Greta says that it is not',
                 'environmentally responsible to fly,',
                 'and she is right.',
                 'now I sit torn between ignorance and despair',
                 'on my escape from city to paradise.',
                 'the last time we spoke was in a sterilized room',
                 'with a view of the eucalyptus trees on Mount Sutro',
                 'in between pumps of morphine',
                 'her yellowed eyes wandered past her swollen belly',
                 'before slowly fixing on me.',
                 'a heavy fog swallowed us in that silent space',
                 'and I cannot remember what she said.',
                 ' ',
                 ' ',
                 'it has been a long time since I have seen her.',
                 
                ];




function setup() {
  createCanvas(displayWidth,displayHeight);
  
  wind = createAudio('wind.mp3');
 // wind.autoplay(true);
  textFont("le-monde-livre-classic-byol");
  textSize(displayWidth/40);
  lineOfText = random(sentences);
  getRandomInterval();
  setInterval(randomText, 2650);
  setInterval(randomDrawing, 2650);
  fill(0)
  
  
  
}

function draw() {
  background(255);
   text(lineOfText, x, y)
  
  // console.log("drawX: " + drawingX, ", drawY:" + drawingY);
  //  console.log("textX: " + x, ", textX:" + y);
 image(svg[randomSVG],0,0, displayWidth,displayHeight);
  
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