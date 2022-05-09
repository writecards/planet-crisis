let socket = io();
let messagebox1 = document.getElementById("messagebox1")
let sendbutton1 = document.getElementById("send1")
let word1 = document.getElementById("chat1")

let messagebox2 = document.getElementById("messagebox2")
let sendbutton2 = document.getElementById("send2")
let word2 = document.getElementById("chat2")

let messagebox3 = document.getElementById("messagebox3")
let sendbutton3 = document.getElementById("send3")
let word3 = document.getElementById("chat3")

let messagebox4 = document.getElementById("messagebox4")
let sendbutton4 = document.getElementById("send4")
let word4 = document.getElementById("chat4")

let messagebox5 = document.getElementById("messagebox5")
let sendbutton5 = document.getElementById("send5")
let word5 = document.getElementById("chat5")

let filler1 = document.getElementById("filler1");
let filler2 = document.getElementById("filler2");

let usercount = document.getElementById("usercount")


let filler1array = ['the', 'a']
let filler2array = ['at','in', 'with', 'onto', 'into', 'with',
                  'without', 'under',  'for', 'for', 'for']


let randomWordArray;


sendbutton1.addEventListener("click", ()=>{
  let text = messagebox1.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-one', data);
    messagebox1.value = ""
  }
  //nextWord();
})

sendbutton2.addEventListener("click", ()=>{
  let text = messagebox2.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-two', data);
    messagebox2.value = ""
  }
})

sendbutton2.addEventListener("click", ()=>{
  let text = messagebox2.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-two', data);
    messagebox2.value = ""
  }
})

sendbutton3.addEventListener("click", ()=>{
  let text = messagebox3.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-three', data);
    messagebox3.value = ""
  }
})

sendbutton4.addEventListener("click", ()=>{
  let text = messagebox4.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-four', data);
    messagebox4.value = ""
  }
})

sendbutton5.addEventListener("click", ()=>{
  let text = messagebox5.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-five', data);
    messagebox5.value = ""
  }
})

function randomFromArray(arrayName){
  return arrayName[Math.floor(Math.random()*arrayName.length)];
}



function appendMessage1(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
 
  let filler1p = document.createElement("p");
  let filler1li = document.createElement("li");


  // filler1p.innerHTML = randomFromArray(filler1array);
  // filler1li.appendChild(filler1p);
  // filler1.prepend(filler1li);
  
  //uncomment here
   p.innerHTML = text;

   randomWordArray = RiTa.soundsLike(text, {minDistance: 1, limit: 20, shuffle: true});
  console.log("RiTa randWords:" + randomWordArray);
   let displayWord = randomFromArray(randomWordArray);
  console.log("1 word from ritalist: " + displayWord);
  
 p.innerHTML = displayWord;


  li.appendChild(p);
//to here

  //setInterval(getSimilarWord(), 3000);

  // make sure the new messages appear on top of the previous ones:
  // from: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
  word1.prepend(li);
  word1.scrollTop = 0;
  // for (let i = word1.children.length; i >= 0; i--) {
  //   word1.appendChild(word1.children[Math.random() * i | 0]);
  // }
}

// setInterval(function getSimilarWord(){
//   //let w = messagebox1.value.trim();
//   let w = "cheese";
//   randomWordArray = RiTa.soundsLike(w, {minDistance: 1, limit: 20, shuffle: true});

//   randomWord = randomFromArray(randomWordArray);

//   console.log("randword from function " + randomWord);
//   word1.innerHTML = randomWord;
//   setInterval(getSimilarWord(), 3000);
  

// }, 2000);

function nextWord() {
    let txt = messagebox1.value.trim();
    //let txt = message.content;

    let words = RiTa.tokenize(txt); // split into words
    
    // loop from a random spot
    //let r = floor(random(0, words.length));
    let r = randomFromArray(words);
    console.log(r);
    for (let i = r; i < words.length + r; i++) {
      let idx = i % words.length;
      
      let word = words[idx].toLowerCase();
      if (word.length < 3) continue; // len >= 3

      // find related words
      let pos = RiTa.tagger.allTags(word)[0];
      let rhymes = RiTa.rhymes(word, { pos });
      let sounds = RiTa.soundsLike(word, { pos });
      let spells = RiTa.spellsLike(word, { pos });
      let similars = [...rhymes, ...sounds, ...spells];

      // only words with 2 or more similars
      if (similars.length < 2) {
        console.log("No sims for " + word);
        continue;
      }

      // pick a random similar
      let next = RiTa.random(similars);

      if (next.includes(word) || word.includes(next)) {
        
        continue;                     // skip substrings
      }
      if (/[A-Z]/.test(words[idx][0])) {
        next = RiTa.capitalize(next); // keep capitals
        
      }

      console.log("replace(" + idx + "): " + word + " -> " + next);

      words[idx] = next;             // do replacement
      
      break;
    }

    // recombine into string and display

    txt = RiTa.untokenize(words); 
    //let display = txt.join("\n");
    // background(255)
    // fill(255,0,0)

    
    word1.innerHTML = txt;

    // text(txt, 50, 30, 500, height);

    setTimeout(nextWord, 2000);
}

















function appendMessage2(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word2.prepend(li);
  word2.scrollTop = 0;
  for (let i = word2.children.length; i >= 0; i--) {
    word2.appendChild(word2.children[Math.random() * i | 0]);
  }
  
}

function appendMessage3(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word3.prepend(li);
  word3.scrollTop = 0;


  // let filler2p = document.createElement("p");
  // let filler2li = document.createElement("li");
  // filler2p.innerHTML = randomFromArray(filler2array)
  // filler2li.appendChild(filler2p);
  // filler2.prepend(filler2li);


  for (let i = word3.children.length; i >= 0; i--) {
    word3.appendChild(word3.children[Math.random() * i | 0]);
  }
}

function appendMessage4(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word4.prepend(li);
  word4.scrollTop = 0;
  for (let i = word4.children.length; i >= 0; i--) {
    word4.appendChild(word4.children[Math.random() * i | 0]);
  }
}

function appendMessage5(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word5.prepend(li);
  word5.scrollTop = 0;
  for (let i = word5.children.length; i >= 0; i--) {
    word5.appendChild(word5.children[Math.random() * i | 0]);
  }
}

function updateUserCount(data){
  let count = data.count;
  usercount.innerHTML = count-1; // minus 1 because because that 1 is us :)
  
}

socket.on('message-to-all', (data)=>{
  console.log("a new message arrived", data)
 appendMessage1(data);
 
  // appendMessage2(data);
  // appendMessage3(data);
  // appendMessage4(data);
  // appendMessage5(data);

})

socket.on('new-user-count', (data)=>{
  updateUserCount(data);
})



socket.on('word1-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    console.log(datapoint)
    appendMessage1(datapoint)
  }
})

socket.on('word2-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    console.log(datapoint)
    appendMessage2(datapoint)
  }
})

socket.on('word3-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    console.log(datapoint)
    appendMessage3(datapoint)
  }
})

socket.on('word4-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    console.log(datapoint)
    appendMessage4(datapoint)
  }
})

socket.on('word5-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    console.log(datapoint)
    appendMessage5(datapoint)
  }
})

// from: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// Execute a function when the user releases a key on the keyboard
messagebox1.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    sendbutton1.click();
  }
});


messagebox2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    sendbutton2.click();
  }
});

messagebox3.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    sendbutton2.click();
  }
});

messagebox4.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    sendbutton2.click();
  }
});

messagebox5.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    sendbutton2.click();
  }
});