//following https://www.youtube.com/watch?v=RL_E56NPSN0
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 3030;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(data){
        wss.clients.forEach(function each(client){
            if(client != ws && client.readyState == WebSocket.OPEN){
                client.send(data);
            }
        })
    })
})

server.listen(port, function(){
    console.log("Server listening on port 3030");
})