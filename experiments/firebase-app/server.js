let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let userCount = 0;
app.use(express.static('public'))



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
// let database = firebaseApp.database();
// // Create a new post reference with an auto-generated id
// let messageListRef = database.ref('mymessages');
//  messageListRef.push("goodbye");
 



io.on('connection', (socket) => {
  console.log('a user connected');
  userCount += 1;
  io.emit('new-user-count', {count: userCount});


  socket.on('message-from-one', (data) => {
    //messageListRef.push(data);
    io.emit('message-to-all', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount -= 1;
    io.emit('new-user-count', {count: userCount});
  });

});
http.listen(3000, () => {
  console.log('listening on *:3000');
});
