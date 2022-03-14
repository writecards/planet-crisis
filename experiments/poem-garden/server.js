const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
// const port = process.env.PORT; // for glitch
const secret = "capybara";

let word1_list = [];
let word2_list = [];
let word3_list = [];
let word4_list = [];
let word5_list = [];

app.use(express.static("public"));
app.get('/secret', (req, res) => {
  let query = req.query;
  let guess = query.word;
  console.log(guess);
  if(guess == secret){
    console.log("let them into the garden")
   // res.sendFile(__dirname + '/public/garden/index.html')
    res.redirect('/garden');
  }else{
    console.log("soemthing is fishy");
    res.redirect('/fishy');
  }

    console.log("-----")
  })


  app.get('/word1', (req, res) => {
    let query = req.query;
    let word1 = query.word1;
    word1_list.push(word1);
    
    console.log("received: ", word1);
    console.log("all the word 1's", word1_list)
    console.log("-----")
    })

 app.get('/word2', (req, res) => {
    let query = req.query;
    let word2 = query.word2;
    word2_list.push(word2);
    
    console.log("received: ", word2);
    console.log("all the word 2's", word2_list)
    console.log("-----")
    })

  app.get('/word3', (req, res) => {
    let query = req.query;
    let word3 = query.word3;
    word3_list.push(word3);
    
    console.log("received: ", word3);
    console.log("all the word 3's", word3_list)
    console.log("-----")
    })

  app.get('/word4', (req, res) => {
    let query = req.query;
    let word4 = query.word4;
    word4_list.push(word4);
    
    console.log("received: ", word4);
    console.log("all the word 4's", word3_list)
    console.log("-----")
    })

  app.get('/word5', (req, res) => {
    let query = req.query;
    let word5 = query.word5;
    word5_list.push(word5);
    
    console.log("received: ", word5);
    console.log("all the word 5's", word5_list)
    console.log("-----")
    })

//this is what is called wehn click look button
    app.get('/getWords', (req, res) => {
      console.log("someone wants to see all the words");
      res.json({content1: word1_list, 
                content2: word2_list, 
                content3: word3_list, 
                content4: word4_list,
                content5: word5_list,
                sender:"poets around now"});

      console.log("-----")
      })
  



// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})