
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

//let string = "ExxonMobil leverages its core capabilities to meet society’s needs for products essential for modern life, while addressing the challenge of climate change. Our strategy uses our advantages in scale, integration, technology and people to build globally competitive businesses that lead industry in earnings and cash flow growth across a broad range of scenarios. We plan to play a leading role in the energy transition, while retaining investment flexibility across a portfolio of evolving opportunities to maximize shareholder returns.";
//let splitStringArr = string.split('');

let string = "We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system.\
We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry. It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices. While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society. We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed. We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need. We understand the tremendous challenge represented by climate change and have fully supported the Paris Agreement since its inception. Our scientists are working to develop innovative solutions to help reduce emissions, with a focus on the highest emitting and most difficult to decarbonize sectors of the economy: commercial transportation, power generation and heavy industry.It is in these areas where we believe ExxonMobil can best contribute to the challenge of climate change. For example, through our new ExxonMobil Low Carbon\
Solutions business we are advancing plans for large-scale emission reductions with new carbon capture and storage opportunities around the world. We are also leveraging ExxonMobil’s significant experience in the production of hydrogen which, when coupled with carbon capture and storage, is likely to play a critical role in a lower-carbon energy system. We’re investing $3 billion on lower-emission energy solutions through 2025 on top of $10 billion we’ve spent over the past two decades. As we develop additional value-added opportunities, I expect these investments to grow. We believe a price on carbon emissions is essential to achieving net zero emissions. Carbon pricing would send a clear signal through the market, creating incentives to reduce emissions, fostering investment in R&D to advance solutions and providing consumers with transparency to make the best choices.\
While there is some resistance to a carbon tax, we are actively and publicly discussing other options, including lower-carbon fuels and other sector-based approaches that would place a uniform, predictable cost on carbon. Today, through government regulation and incentives, we are paying to reduce carbon throughout the economy. Unfortunately, most of us don’t know what it’s costing. We think it’s vitally important for the cost of reducing carbon to be more transparent to enable comparisons of the various options to help policy makers reduce emissions at the lowest overall cost to society.\
We are actively working to reduce our own emissions. Overall, we have reduced operated greenhouse gas emissions by 11 percent from 2016 to 2020, and we’ve laid out plans for significant further reductions by 2025. We are also working to find new and better ways to monitor and reduce methane emissions, including collaborations with universities, environmental groups and other industry partners. Through 2020, we reduced methane emissions nearly 34 percent across our U.S. unconventional operations, compared to 2016 when the Paris Agreement was signed.\
We have great respect for policy makers, elected officials and organizations across the political spectrum who are grappling to effectively address climate change, one of the greatest challenges of our time. ExxonMobil’s position is clear: we want to be part of the solution while responsibly providing affordable energy required to power the economy. We have the experience, capabilities, capacity and commitment to help meet this critical need."
//let string = "we-un-der-stand-the-tre-men-dous-chall-enge-re-pre-sent-ed-by-cli-mate-change-and-have-fully-sup-ported-the-Paris-Agree-ment-since-its-in-cep-tion-Our-sci-entists-are-work-ing-to-dev-elop-inno-va-tIve-sol-u-tions-to-help-re-duce-em-iss-ions-with-a-fo-cus-on-the-high-est-emit-ting-and-most-diff-icult-to-de-car-bon-ize-sec-tors-of-the-economy: com-mer-cial-trans-port-ation-power-gen-eration-and-heavy-ind-ustry."

let splitStringArr = string.split(' ');
console.log(splitStringArr.length); 

//let string2 = "ExxonMobil leverages its core capabilities to meet society’s needs for products"
let _text;

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
    //font1 = loadFont("assets/mons.ttf")
    font1 = loadFont("opensans.ttf")
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
   

      graphics.fill(225,0,222);


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
     
  
     
      
   
      
      
      //connecting the points
      
      if(i < numRows-1){
        nextX = width/2-boxSize/2 + gapX*abs((i+1)/12/2);
        nextY = map(mean[i+1], -0.78, 1.35, height/2+boxSize/2, height/2-boxSize/2);
        nextZ = gapZ*((i+1)%12);
      }
      strokeWeight(0.5);
      beginShape();
      if(i%12 !=11){
         
        vertex(x,y,z);
        vertex(nextX, nextY, nextZ);
     
      }
      endShape();

      //tag
      push();
  
      translate(0, 0, z);
      
      textSize(3);
      fill(0);
      textAlign(CENTER);
      fill(255,0,0)
    
      text(splitStringArr[i], x, y+3) /// this works
      
      //text(mean[i], x, y+20);
     // text(CHAINDETAILS.text, x, y)
      pop();
       
     
   
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

      // if(i == 22){
          
      //     fill(0,0,255)
      //   dragSegment(0, x, y);
      //       push()
      //           for(var j=0; j < CHAINDETAILS.text.length-1; j++) {
      //               translate(0,0,z/100)
                  
      //               dragSegment(j+1, x, y);
                    
      //               }
      //               pop()

      //             beginShape()
      //              vertex(x,y,z);
      //               vertex(nextX, nextY, nextZ);
      //             endShape()
    
      //   }

  
      
      
     
    }
    
   
  }
  
