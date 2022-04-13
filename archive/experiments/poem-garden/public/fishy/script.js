console.log("fishy js")
let button = document.getElementById("button");
let secretInput = document.getElementById("secret");


button.addEventListener("click", ()=>{
    let secret = secretInput.value;
    console.log("secret is: ", secret);
    window.location.href = "/secret?word=" + secret;
})