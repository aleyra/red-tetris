const express = require('express');
const http = require('http');
const socketIo = require("socket.io");

const { Player, Game, Grid, Piece} = require('./game.js')

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


let rooms = {};
let grid;
let player;


io.on("connection", (socket) => {
  // each socket.on("message") defined is a route for a particular socket.emit() from the client side
  socket.on("startGame", () =>{

    player = new Player();
    grid = new Grid(player);

    //start the game
    function updateGame() {
        grid.updateGame();
    }
    setInterval(updateGame, 1000);

    //send the grid to the front for display
    function sendGameData() {
      socket.emit("gameData", JSON.stringify(grid.getJsonGrid()));
    }
    setInterval(sendGameData, 100);
  });

  // more advanced version of start game with lobbies and IDs, still WIP
  // socket.on("startGame1", (playerId) => {
  //   console.log("got a request to start game from " + playerId);
  //   var gameId = Date.now();
  //   socket.join(gameId);
  //   rooms[gameId] = "New game";
  //   console.log(rooms);
  //   socket.emit("startGame2", JSON.parse(`{"newGameId" : "` + gameId + `"}`));
  // });
  socket.on("keydown", (key) => {
    console.log(key);
        if(key == "q") grid.rotatePiece(-1);
        if(key == "e") grid.rotatePiece(1);
        if(key == "a") grid.movePieceHorizontally(-1);
        if(key == "d") grid.movePieceHorizontally(1);
        if(key == "s") grid.slamPiece();
        if(key == "n") player.setMalus(true);
        grid.printGrid();
  });
  socket.on("disconnect", (e) => {
    console.log(e);
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
