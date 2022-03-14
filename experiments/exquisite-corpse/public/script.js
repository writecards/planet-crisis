let sendWord1 = document.getElementById("sendWord1");
let word1input = document.getElementById("word1");
let viewButton = document.getElementById("viewButton");

sendWord1.addEventListener("click", ()=>{
    let word1 = word1input.value;
    console.log("click word1send");
    fetch("/word1?word1="+word1);
    word1input.value = "";

})


viewButton.addEventListener("click", ()=>{
   let word1 = word1input.value;

   fetch("/word1")
            .then(data => data.json())
            .then(data => {
                console.log("got the first word, ", data);
                let words = data.content;
               //  placeWords(words);

                })
})

