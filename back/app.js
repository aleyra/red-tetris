const express = require('express');
const http = require('http');
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

// creating a server with the express apps is the same as the code below but with a lot of things better handled
const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   if (req.url == '/') { //check the URL of the current request
        
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//         // set response content    
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
    
//     }
//     if (req.url == '/tetris')
//     {
//         res.writeHead(200, { 'Content-Type': 'application/json' }); 
        
//         // set response content    
//         res.write(`{"game": "ok"}`);
//         res.end();

//     }
// });``

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    credentials: false
  }
});

let interval;

let rooms = {};

io.on("connection", (socket) => {
  // each socket.on("message") defined is a route for a particular socket.emit() on the client side
  socket.on("startGame1", (playerId) => {
    console.log("got a request to start game from " + playerId);
    var gameId = Date.now();
    socket.join(gameId);
    rooms[gameId] = "New game";
    console.log(rooms);
    socket.emit("startGame2", JSON.parse(`{"newGameId" : "` + gameId + `"}`));
  });
  socket.on("keydown", (key) => {
    console.log(key);
  });
  socket.on("disconnect", (e) => {
    console.log(e);
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });