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



let usercount = document.getElementById("usercount")




sendbutton1.addEventListener("click", ()=>{
  let text = messagebox1.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-one', data);
    messagebox1.value = ""
  }

   //nextWord(text, word1);
})

sendbutton2.addEventListener("click", ()=>{
  let text = messagebox2.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-two', data);
    messagebox2.value = ""
  }
nextWord(text, word2);
})



sendbutton3.addEventListener("click", ()=>{
  let text = messagebox3.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-three', data);
    messagebox3.value = ""
  }
  nextWord(text, word3);
})



function randomFromArray(arrayName){
  return arrayName[Math.floor(Math.random()*arrayName.length)];
}



function appendMessage1(message){
  let text = message.content;

 // nextWord(text, word1);

  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word1.prepend(li);
  word1.scrollTop = 0;

  // let ul = document.querySelectorAll('ul li');
  
  // ul.addEventListener("click", ()=>{
  //   console.log("clicked on ul");
  // })
  document.querySelectorAll('ul li').forEach(item =>{
    item.addEventListener("click", ()=>{
      console.log("clicked on li");
      nextWord(text,word1)
    })
  })


//   let lis1 = word1.getElementsByTagName('li');
// for(let i = 0; i < lis1.length; i ++){
//   console.log("lis are: " +lis1[i]);
// } 
}

function appendMessage2(message){
  let text = message.content;
  //nextWord(text, word2);
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word2.prepend(li);
  word2.scrollTop = 0;
  document.querySelectorAll('ul li').forEach(item =>{
    item.addEventListener("click", ()=>{
      console.log("clicked on li");
      nextWord(text,word2)
    })
  })
}

function appendMessage3(message){
  let text = message.content;
 // nextWord(text, word3);
  
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word3.prepend(li);
  word3.scrollTop = 0;
  document.querySelectorAll('ul li').forEach(item =>{
    item.addEventListener("click", ()=>{
      console.log("clicked on li");
      nextWord(text,word3)
    })
  })
}

// function nextWord(inputData, wordListNum){ //just gets a similar word
//   let li = document.createElement("li");
//   let p = document.createElement("p");
//   let randomWordArray = RiTa.soundsLike(inputData, {minDistance: 1, limit: 20, shuffle: true});
// //console.log("RiTa randWords:" + randomWordArray);
//    let displayWord = randomFromArray(randomWordArray);
//   console.log("replace " + inputData + " -> " + displayWord);
  
//   p.innerHTML = displayWord;
  
  
//   li.appendChild(p);
//   wordListNum.prepend(li);
//    wordListNum.scrollTop = 0;
 
// }


function updateUserCount(data){
  let count = data.count;
  usercount.innerHTML = count-1; // minus 1 because because that 1 is us :)
  
}

socket.on('message-to-all', (data)=>{
  console.log("a new message arrived", data)
 appendMessage1(data);

 
    //appendMessage2(data);
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
   // console.log("key from 1: " +key)
    setTimeout(appendMessage1(datapoint), 2000);
  }
})

socket.on('word2-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
  //  console.log(datapoint)
    appendMessage2(datapoint)
  }
})

socket.on('word3-archive', (data)=>{
  
  //send previous messages to new users
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let datapoint = data[key]
    //console.log(datapoint)
    appendMessage3(datapoint)
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



function nextWord(inputData, wordListNum) {
  let li = document.createElement("li");
  let p = document.createElement("p");
     // let txt = messagebox1.value.trim();
    let txt = inputData;
    let words = RiTa.tokenize(txt); // split into words

    // loop from a random spot
    let r = Math.floor(Math.random(0, words.length));
   // let r = randomFromArray(words);

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
    //background(255)
    // fill(255,0,0)


     p.innerText = txt;
     p.style.color = "yellow";
    li.appendChild(p);
    wordListNum.prepend(li);
    wordListNum.scrollTop = 0;

  
 }