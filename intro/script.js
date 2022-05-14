
 
 //let str = "Click to Begin. \\ there’s this netflix film called Don’t Look Up, \\ where two astronomers go on a media tour to warn \\ mankind of a comet that’s to destroy the earth,\\and no one takes the warning seriously. \\the film ends with them sitting around a rumbling dinner table,\\randall saying, “we really did have everything, didn’t we?”\\before the comet swallows the earth whole.\\even though the film never mentions it,\\ if you’re aware of the climate crisis,\\then it’s clear that\\the film is about the impending doom of climate change.\\America is obsessed with these apocalyptic narratives\\with a quick timescale and famous white actors.\\but there’s something a bit off about this analogy.\\in reality\\climate change is not a dramatic singularity, \\something we can just close our eyes and brace for.\\rather, the climate crisis is systemic, multifaceted.\\systems that have enabled decades of carbon emissions: \\a profit-maximizing mindset that has led to so much destruction.\\a lot of people know about the climate crisis,\\but don’t take any actionable steps about it.\\maybe it’s because of the narratives that seem to paralyze us in place:\\it’s the top 100 corporations fault. we as consumers don’t have any power to do anything.\\or, “It’s up to the politicians, the people in power to take leadership.”\\what we forget is, these politicians and corporations \\are embedded in systems we are all apart of.\\so should solutions stop at reducing individual carbon footprint\\or shopping more sustainably?\\no, but it starts with a personal reckoning that can then be transformed into\\a collective movement."
 let str = "Click to Begin. \\ there’s this netflix film called Don’t Look Up, \\ where two astronomers go on a media tour to warn \\ mankind of a comet that’s to destroy the earth, \\and no one takes the warning seriously. \\ the film ends with the actors sitting around a rumbling dinner table, \\ randall saying, “we really did have everything, didn’t we?” \\before the comet swallows the earth whole. \\  even though the film never mentions it, \\ it’s clear that \\the film is about the impending doom of climate change. \\ western media is obsessed with these apocalyptic climate change narratives \\ with a quick timescale and famous white actors. \\ when in reality, climate change is more a form of slow violence: \\ “a violence of delayed destruction that is dispersed across time and space, an attritional violence that is typically not viewed as violence at all.”* \\ rather than an immediate singularity, \\like a comet heading towards earth, \\the climate crisis is systemic, multifaceted, \\ its effects are gradual and unseen, but nonetheless persistent. \\ in an age where the emphasis is on the visibly tangible \\ how are we to grapple with decades of carbon emissions and environmental destruction? \\ how do we hold corporations, politicians, and ourselves accountable \\ when the systems we’re embedded in refuse to acknowledge this urgency?"

 //let str = "Click to Begin. \\ First Sentence. \\ Middle Sentence. \\ Last Sentence.";
 let sentences = str.split("\\");
 let textOnScreen = document.getElementById("text");
 let counter = 0;
 

 let citestr = "*Rob Nixon, Slow Violence";
 let citationText = document.getElementById("citation");
 citationText.innerHTML = citestr;

document.addEventListener("click", displayText);
textOnScreen.innerHTML = sentences[0];

let homeBtn = document.getElementById("homeButton");
let nextBtn = document.getElementById("nextButton");

homeBtn.style.display = "none";
nextBtn.style.display = "none";


document.addEventListener("click", playSound);

function playSound(){
    console.log("clicked")
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C2", "16n");

    const noise = new Tone.Noise("brown").start();
    // make an autofilter to shape the noise
    const autoFilter = new Tone.AutoFilter({
      frequency: "0n",
      baseFrequency: 20,
      octaves: 2,
      volume: -9,
      
    }).toDestination().start();
    // connect the noise
    noise.connect(autoFilter);
    // start the autofilter LFO
    autoFilter.start();
   
}


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function displayText(){
   console.log(counter);
    counter++;
    textOnScreen.innerHTML = sentences[counter];
    if(counter === 14){
      textOnScreen.style.filter = "drop-shadow(5px 10px 10px #A0522D)";
      citationText.style.display = "table";
      textOnScreen.style.color = "#A0522D";
     
      
     // textOnScreen.style.filter = "none";
      
    }else{
      citationText.style.display = "none";
      textOnScreen.style.filter = "";
      textOnScreen.style.color = "";
      
    }

    if(counter == sentences.length){
        textOnScreen.style.display = "none";
        homeBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
    
  
   
  let pad = 300;
  let bodyWidth = window.innerWidth;
  let bodyHeight = window.innerHeight;
  let randPosX = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY = randomIntFromInterval(pad/2, bodyHeight-pad);
  
 
  textOnScreen.style.left = randPosX + "px";
  textOnScreen.style.top = randPosY + "px";

    
}