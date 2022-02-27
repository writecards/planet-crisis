const express = require('express')
const app = express()
const port = 3000;
const port = process.env.PORT; // for glitch

app.use(express.static("public"));

let counter = 0;


app.get('/add', (req, res) => {
    counter++;
    console.log("someone added one ", counter );
  res.json({value: counter})
})

app.get('/getCurrent', (req, res) => {
  res.json({value: counter})
})





app.listen(port, () => {
  console.log(`amazing app listening on port ${port}`)
})