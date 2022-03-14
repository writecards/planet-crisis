const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000;

let wordArray1 = [];
// const port = process.env.PORT; // for glitch

app.use(express.static("public"));



// app.get('/getWord1', (req, res) => {
//     let query = req.query;
//     let word1 = query.word1;
//     console.log("someone requests the /getWord1 route" );
//     res.redirect("/user-poems");
//     //res.sendFile(__dirname + '/public/user-poems/index.html');
    
// })


app.get('/word1', (req, res) => {
    let query = req.query;
    let word1 = query.word1;
    wordArray1.push(word1);
    console.log("received word1 as ", word1 );
    res.json({value: word1})
   // res.redirect("/user-poems");
    //res.sendFile(__dirname + '/public/user-poems/index.html');
    
})


app.get('/getCurrent', (req, res) => {
  res.json({value: counter})
})





app.listen(port, () => {
  console.log(`app listening at ${port}`)
})