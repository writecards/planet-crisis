let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let userCount = 0;
app.use(express.static('public'))
const port = 3030;
//const port = process.env.PORT; //glitch 



//  let firebase = require('firebase-admin');
 let firebase = require('firebase');

let firebaseConfig = {
  apiKey: "AIzaSyAZHbeDWipnnJ-JoxWe7jPF1fdWw1ZFmbE",
  authDomain: "earth-poem.firebaseapp.com",
  databaseURL: "https://earth-poem-default-rtdb.firebaseio.com",
  projectId: "earth-poem",
  storageBucket: "earth-poem.appspot.com",
  messagingSenderId: "553643667838",
  appId: "1:553643667838:web:29272d5e553652c0c7032f"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let database = firebaseApp.database();
// Create a new post reference with an auto-generated id

let wordList1 = database.ref('wordList1');
let wordList2 = database.ref('wordList2');
let wordList3 = database.ref('wordList3');
let wordList4 = database.ref('wordList4');
let wordList5 = database.ref('wordList5');


io.on('connection', (socket) => {

  wordList1.once('value').then((snapshot) =>{
    let archivalData = snapshot.val();
    socket.emit('word1-archive', archivalData);
  })
  
  wordList2.once('value').then((snapshot) =>{
    let archivalData = snapshot.val();
    socket.emit('word2-archive', archivalData);
  })

  wordList3.once('value').then((snapshot) =>{
    let archivalData = snapshot.val();
    socket.emit('word3-archive', archivalData);
  })

  wordList4.once('value').then((snapshot) =>{
    let archivalData = snapshot.val();
    socket.emit('word4-archive', archivalData);
  })

  wordList5.once('value').then((snapshot) =>{
    let archivalData = snapshot.val();
    socket.emit('word5-archive', archivalData);
  })

  console.log('a user connected');
  userCount += 1;
  io.emit('new-user-count', {count: userCount});


  socket.on('message-from-one', (data) => {
    //messageListRef.push(data);
    wordList1.push(data)
    io.emit('message-to-all', data);
  });

  socket.on('message-from-two', (data) => {
    wordList2.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('message-from-three', (data) => {
    wordList3.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('message-from-four', (data) => {
    wordList4.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('message-from-five', (data) => {
    wordList5.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount -= 1;
    io.emit('new-user-count', {count: userCount});
  });

});
http.listen(port, () => {
  console.log('listening on *:3030');
});