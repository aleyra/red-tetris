const readline = require('readline');
 

function getKeyPress(ref)
{
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
     
    // listen to keypress
     
    process.stdin.on("keypress", (str, key) => {
        if(key.name == "a") ref.movePieceHorizontally(-1);
        if(key.name == "d") ref.movePieceHorizontally(1);
        if(key.name == "s") ref.slamPiece();
        if(key.name == "n") ref.addPlayerMalusNextTurn = true;
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

function Player()
{
    this.hasMalus = false;
}

function Game()
{
    this.playerCount = 0;
    this.id = totalGames + 1;
}



function Grid() {
    this.boardWidth = 10;
    this.boardHeight = 20;
    this.addPlayerMalusNextTurn = false;
    this.currentPiece = new Piece("O");
    this.grid = Array(this.boardHeight).fill().map(() => Array(this.boardWidth).fill().map(() => "X"));
    this.movePieceHorizontally = (direction) =>
    {
        this.currentPiece.x += direction;
    }
    this.checkForFullLine = () =>
    {
        for (var y = this.boardHeight - 1; y >= 0; y--)
        {
            var lineIsFull = true;
            for (var x = 0; x < this.boardWidth; x++)
            {
                if (this.grid[y][x] == "X" || this.grid[y][x] == "N")
                {
                    lineIsFull = false;
                    break;
                }
            }

            // move all upper row
            if (lineIsFull)
            {
                var previousRow = Array.from(this.grid[0]);
                for (var y2 = 1; y2 <= y; y2++)
                {
                    var tmp = Array.from(this.grid[y2]);
                    this.grid[y2] = previousRow;
                    // this.grid[y2] = Array(this.boardWidth).fill().map(() => "W");
                    previousRow = Array.from(tmp);
                }
            }
        }
    }
    this.placePiece = () =>
    {
        this.grid[this.currentPiece.y][this.currentPiece.x] = this.currentPiece.type;
        this.checkForFullLine();
        if (this.addPlayerMalusNextTurn)
        {
            this.addPlayerMalus();
            this.addPlayerMalusNextTurn = false;
        }
        this.currentPiece = new Piece("O");
        this.printGrid();
    }
    this.slamPiece = () => {
        var y = this.currentPiece.y;
        var x = this.currentPiece.x;
        while (y + 1 < this.boardHeight && this.grid[y + 1][x] == "X")
        {
            y += 1;
        }
        this.currentPiece.y = y;
        this.placePiece();
    }
    this.checkForCollision = () =>
    {
        if (this.currentPiece.y + 1 >= this.boardHeight
            || this.grid[this.currentPiece.y + 1][this.currentPiece.x] != "X")
            return false;
        else
            return true;
    }
    this.addPlayerMalus = () =>
    {
        for (var x = 0; x < this.boardWidth; x++)
        {
            if (this.grid[0][x] != "X")
                this.gameOver();
        }
        // move all rows up to insert the null row
        var previousRow = Array.from(this.grid[this.boardHeight - 1]);
        for (var y = this.boardHeight - 2; y >= 0; y--)
        {
            var tmp = Array.from(this.grid[y]);
            this.grid[y] = previousRow;
            previousRow = Array.from(tmp);
        }

        this.grid[this.boardHeight - 1] = Array(this.boardWidth).fill().map(() => "N"); 
    }
    this.printGrid = () =>
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
    this.updateGame = () =>
    {
        if (this.checkForCollision())
            this.currentPiece.y += 1;
        else
            this.placePiece();
        this.printGrid();
    }
    totalGames += 1;
}

// console.log(totalGames);
var g = new Grid();

getKeyPress(g);

function updateGame() {
    g.updateGame()
}
setInterval(updateGame, 1000);
