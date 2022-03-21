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

let usercount = document.getElementById("usercount")

sendbutton1.addEventListener("click", ()=>{
  let text = messagebox1.value.trim();
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-one', data);
    messagebox1.value = ""
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


function appendMessage1(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);

  // make sure the new messages appear on top of the previous ones:
  // from: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
  word1.prepend(li);
  word1.scrollTop = 0;

}

function appendMessage2(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word2.prepend(li);
  word2.scrollTop = 0;
}

function appendMessage3(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word3.prepend(li);
  word3.scrollTop = 0;
}

function appendMessage4(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word4.prepend(li);
  word4.scrollTop = 0;
}

function appendMessage5(message){
  let text = message.content;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = text;
  li.appendChild(p);
  word5.prepend(li);
  word5.scrollTop = 0;
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