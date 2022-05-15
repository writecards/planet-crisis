let intro = document.getElementById("intro");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");


// intro.addEventListener("click",()=>{
//     console.log("intro clicked")
//     location.href = "intro/index.html"
// })

box1.addEventListener("mouseenter", ()=>{
    document.getElementById("pagetitle1").innerHTML = "the algorithmic beauty of slow violence"
})

box1.addEventListener("mouseleave",()=>{
    document.getElementById("pagetitle1").innerHTML = "1";
})

box2.addEventListener("mouseenter", ()=>{
    document.getElementById("pagetitle2").innerHTML = "understanding our interconnected world"
})

box2.addEventListener("mouseleave",()=>{
    document.getElementById("pagetitle2").innerHTML = "2";
})

box3.addEventListener("mouseenter", ()=>{
    document.getElementById("pagetitle3").innerHTML = "corporate rhetoric as reassurance"
})

box3.addEventListener("mouseleave",()=>{
    document.getElementById("pagetitle3").innerHTML = "3";
})

box4.addEventListener("mouseenter", ()=>{
    document.getElementById("pagetitle4").innerHTML = "naming emotions is a start"
})

box4.addEventListener("mouseleave",()=>{
    document.getElementById("pagetitle4").innerHTML = "4";
})