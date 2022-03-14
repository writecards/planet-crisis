console.log("this is the garden script");
let lookButton = document.getElementById("look");

let input1 = document.getElementById("word1");
let sendWord1 = document.getElementById("sendWord1");

let input2 = document.getElementById("word2");
let sendWord2 = document.getElementById("sendWord2");

let input3 = document.getElementById("word3");
let sendWord3 = document.getElementById("sendWord3");

let input4 = document.getElementById("word4");
let sendWord4 = document.getElementById("sendWord4");

let input5 = document.getElementById("word5");
let sendWord5 = document.getElementById("sendWord5");

let word1Spot = document.getElementById("word1Spot");
let word2Spot = document.getElementById("word2Spot");
let word3Spot = document.getElementById("word3Spot");
let word4Spot = document.getElementById("word4Spot");
let word5Spot = document.getElementById("word5Spot");

sendWord1.addEventListener("click", ()=>{
    let word1 = input1.value;
    fetch("/word1?word1=" + word1);
    input1.value = "";
})

sendWord2.addEventListener("click", ()=>{
    let word2 = input2.value;
    fetch("/word2?word2=" + word2);
    input2.value = "";
})

sendWord3.addEventListener("click", ()=>{
    let word3 = input3.value;
    fetch("/word3?word3=" + word3);
    input3.value = "";
})

sendWord4.addEventListener("click", ()=>{
    let word4 = input4.value;
    fetch("/word4?word4=" + word4);
    input4.value = "";
})

sendWord5.addEventListener("click", ()=>{
    let word5 = input5.value;
    fetch("/word5?word5=" + word5);
    input5.value = "";
})





function placeWord1(word){
    let p = document.createElement("p");
    p.innerHTML = word;
    p.style.position = "absolute";
    p.style.left = Math.random()*window.innerWidth + "px";
    p.style.top = Math.random()*window.innerHeight + "px";
    p.style.color = "red";
    word1Spot.appendChild(p); 
}

function placeWord2(word){
    let p = document.createElement("p");
    p.innerHTML = word;
    p.style.position = "absolute";
    p.style.left = Math.random()*window.innerWidth + "px";
    p.style.top = Math.random()*window.innerHeight + "px";
    p.style.color = "orange";
   
    word2Spot.appendChild(p); 
}

function placeWord3(word){
    let p = document.createElement("p");
    p.innerHTML = word;
    p.style.position = "absolute";
    p.style.left = Math.random()*window.innerWidth + "px";
    p.style.top = Math.random()*window.innerHeight + "px";
    p.style.color = "green";
   
    word3Spot.appendChild(p); 
}

function placeWord4(word){
    let p = document.createElement("p");
    p.innerHTML = word;
    p.style.position = "absolute";
    p.style.left = Math.random()*window.innerWidth + "px";
    p.style.top = Math.random()*window.innerHeight + "px";
    p.style.color = "blue";
   
    word4Spot.appendChild(p); 
}


function placeWord5(word){
    let p = document.createElement("p");
    p.innerHTML = word;
    p.style.position = "absolute";
    p.style.left = Math.random()*window.innerWidth + "px";
    p.style.top = Math.random()*window.innerHeight + "px";
    p.style.color = "purple";
   
    word5Spot.appendChild(p); 
}



function placeFirstWords(words){
    word1Spot.innerHTML = "";
    for(let i = 0; i < words.length; i++){
        placeWord1(words[i]);
    }  
}

function placeSecondWords(words){
    word2Spot.innerHTML = "";
    for(let i = 0; i < words.length; i++){
        placeWord2(words[i]);
    }  
}

function placeThirdWords(words){
    word3Spot.innerHTML = "";
    for(let i = 0; i < words.length; i++){
        placeWord3(words[i]);
    }  
}

function placeFourthWords(words){
    word4Spot.innerHTML = "";
    for(let i = 0; i < words.length; i++){
        placeWord4(words[i]);
    }  
}

function placeFifthWords(words){
    word5Spot.innerHTML = "";
    for(let i = 0; i < words.length; i++){
        placeWord5(words[i]);
    }  
}

lookButton.addEventListener("click", ()=>{
    console.log("looking at poem")
    fetch("/getWords")
                .then(data => data.json())
                .then(data =>{
                    let word1s = data.content1;
                    let word2s = data.content2;
                    let word3s = data.content3;
                    let word4s = data.content4;
                    let word5s = data.content5;
                    
                    console.log(word1s);
                    console.log(word2s);
                    console.log(word3s);
                    console.log(word4s);
                    console.log(word5s);
                    
                    //  placeFirstWords(word1s);
                    //  placeSecondWords(word2s);
                    //  placeThirdWords(word3s);
                   
                   
                });
                
})