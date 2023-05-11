const readline = require('readline');
 

function getKeyPress(ref)
{
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
     
    // listen to keypress
     
    process.stdin.on("keypress", (str, key) => {
        if(key.name == "a") ref.currentPiece.x -= 1;
        if(key.name == "d") ref.currentPiece.x += 1;
        if(key.name == "s") ref.slamPiece();
        if(key.ctrl && key.name == "c") process.exit(0);
        ref.printGrid();
    });
}

console.log("game start");

var totalGames = 0;

var shapes = {
    "L": [],
}
function Piece(type) {
    this.shape = [];
    this.x = 0;
    this.y = 0;
    this.type = type;
}

function Game()
{
    this.playerCount = 0;
    this.id = totalGames + 1;
}

function Grid() {
    this.boardWidth = 10;
    this.boardHeight = 20;
    this.currentPiece = new Piece("O");
    this.grid = Array(this.boardHeight).fill().map(() => Array(this.boardWidth).fill().map(() => "X"));
    this.placePiece = function placePiece()
    {
        this.grid[this.currentPiece.y][this.currentPiece.x] = this.currentPiece.type;
        this.currentPiece = new Piece("O");
        this.printGrid();
    }
    this.slamPiece = function slamPiece() {
        var y = this.currentPiece.y;
        var x = this.currentPiece.x;
        while (y + 1 < this.boardHeight && this.grid[y + 1][x] == "X")
        {
            y += 1;
        }
        this.currentPiece.y = y;
        this.currentPiece.x = x;
        this.placePiece();
    }
    this.checkForCollision = function checkForCollision()
    {
        if (this.currentPiece.y + 1 >= this.boardHeight
            || this.grid[this.currentPiece.y + 1][this.currentPiece.x] != "X")
            return false;
        else
            return true;
    }
    this.printGrid = function printGrid()
    {
        console.log('\033[2J');
        for (var y = 0; y < this.boardHeight; y++)
        {
            for (var x = 0; x < this.boardWidth; x++)
            {
                if (this.currentPiece.x == x && this.currentPiece.y == y)
                    process.stdout.write(this.currentPiece.type);
                else
                    process.stdout.write("" + this.grid[y][x]);
            }
            console.log("");
        }
    }
    totalGames += 1;
}

// console.log(totalGames);
var g = new Grid();

getKeyPress(g);

function updateGame() {
    if (g.checkForCollision())
        g.currentPiece.y += 1;
    else
        g.placePiece();
    g.printGrid();
}
setInterval(updateGame, 1000);
