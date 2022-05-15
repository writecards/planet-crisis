let socket = io();
let messagebox1 = document.getElementById("messagebox1")
let sendbutton1 = document.getElementById("send1")
let word1 = document.getElementById("chat1")

let usercount = document.getElementById("usercount")


sendbutton1.addEventListener("click", ()=>{
  let text = messagebox1.value.trim();
  console.log("click button 1")
  if(text!=""){
    // console.log("message", text)
    let data = {content: text};
    socket.emit('message-from-one', data);
    messagebox1.value = ""
  }
})

let testButton = document.getElementById("send8");
testButton.addEventListener("click", ()=>{
  console.log("clicked test button")
})


function randomFromArray(arrayName){
  return arrayName[Math.floor(Math.random()*arrayName.length)];
}



// function appendMessage1(message){
//   let text = message.content;
//   let li = document.createElement("li");
//   let p = document.createElement("p");
 
//   p.innerHTML = text;
  
//   li.appendChild(p);

  

//   // make sure the new messages appear on top of the previous ones:
//   // from: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
//   word1.prepend(li);
//   word1.scrollTop = 0;
//   for (let i = word1.children.length; i >= 0; i--) {
//     word1.appendChild(word1.children[Math.random() * i | 0]);
//   }
// }



function updateUserCount(data){
  let count = data.count;
  usercount.innerHTML = count-1; // minus 1 because because that 1 is us :)
  
}

socket.on('message-to-all', (data)=>{
  console.log("a new message arrived", data)
  //appendMessage1(data);


})

socket.on('new-user-count', (data)=>{
  updateUserCount(data);
})



// socket.on('word1-archive', (data)=>{
  
//   //send previous messages to new users
//   let keys = Object.keys(data);
//   for(let i = 0; i < keys.length; i++){
//     let key = keys[i];
//     let datapoint = data[key]
//     console.log(datapoint)
//     appendMessage1(datapoint)
//   }
// })


// // from: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// // Execute a function when the user releases a key on the keyboard
// messagebox1.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     // event.preventDefault();
//     // Trigger the button element with a click
//     sendbutton1.click();
//   }
// });

