// variables: F+-[]
// axiom: F
// rules F -> FF+[+F-F-F]-[-F+F+F]
var angle;
var axiom = "F";
var sentence = axiom;
var len = 400;
var rules = [];
 rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
 //b:"F[+F]F[-F][F]"
    //b:"F[+F]F[-F][FF]"
  // b:"FF[F+FF]F[-F+F]"
   //b:"FF[+F]F[F-F]"
   //b:"F[F]+F[F+F]"
   
}

function generate() {
  len *= 0.5
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
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
}

function turtle(){
  background(255)
  resetMatrix();
 translate(width/2,height)
  stroke(0,100)
  strokeWeight(1)
  noFill()
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    if(current == "F"){
      line(0,0,0,-len)
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
  createCanvas(windowWidth, windowHeight);
//  createCanvas(595,1)
  angle = radians(28)
  background(51)
  createP(axiom)
  turtle();
  var button = createButton("generate")
  button.mousePressed(generate);
}