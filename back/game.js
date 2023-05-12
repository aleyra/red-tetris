const readline = require('readline');
 

function getKeyPress(ref, playe)
{
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
     
    // listen to keypress
     
    process.stdin.on("keypress", (str, key) => {
        if(key.name == "a") ref.movePieceHorizontally(-1);
        if(key.name == "d") ref.movePieceHorizontally(1);
        if(key.name == "s") ref.slamPiece();
        if(key.name == "n") p.setMalus(true);
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
    this.score = 0;
    this.hasMalus = false;
    this.setMalus = (b) =>
    {
        this.hasMalus = b; 
    }
}

function Game()
{
    this.playerCount = 0;
    this.id = totalGames + 1;
}



function Grid(player) {
    this.width = 10;
    this.height = 20;
    this.player = player;
    this.currentPiece = new Piece("O");
    this.grid = Array(this.height).fill().map(() => Array(this.width).fill().map(() => "X"));
    this.movePieceHorizontally = (direction) =>
    {
        if (this.currentPiece.x > 0 && this.currentPiece < this.height)
        this.currentPiece.x += direction;
    }
    this.checkForFullLine = () =>
    {
        for (var y = this.height - 1; y >= 0; y--)
        {
            var lineIsFull = true;
            for (var x = 0; x < this.width; x++)
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
                    previousRow = Array.from(tmp);
                }
            }
        }
    }
    this.placePiece = () =>
    {
        this.grid[this.currentPiece.y][this.currentPiece.x] = this.currentPiece.type;
        this.checkForFullLine();
        if (this.player.hasMalus)
        {
            this.addPlayerMalus();
            this.player.setMalus(false);
        }
        this.currentPiece = new Piece("O");
        this.printGrid();
    }
    this.slamPiece = () => {
        var y = this.currentPiece.y;
        var x = this.currentPiece.x;
        while (y + 1 < this.height && this.grid[y + 1][x] == "X")
        {
            y += 1;
        }
        this.currentPiece.y = y;
        this.placePiece();
    }
    this.checkForCollision = () =>
    {
        if (this.currentPiece.y + 1 >= this.height
            || this.grid[this.currentPiece.y + 1][this.currentPiece.x] != "X")
            return false;
        else
            return true;
    }
    this.gameOver = () =>
    {
        process.exit(0);
    }
    this.addPlayerMalus = () =>
    {
        for (var x = 0; x < this.width; x++)
        {
            if (this.grid[0][x] != "X")
                this.gameOver();
        }
        // move all rows up to insert the null row
        var previousRow = Array.from(this.grid[this.height - 1]);
        for (var y = this.height - 2; y >= 0; y--)
        {
            var tmp = Array.from(this.grid[y]);
            this.grid[y] = previousRow;
            previousRow = Array.from(tmp);
        }

        this.grid[this.height - 1] = Array(this.width).fill().map(() => "N"); 
    }
    this.printGrid = () =>
    {
        console.log('\033[2J');
        for (var y = 0; y < this.height; y++)
        {
            for (var x = 0; x < this.width; x++)
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

var p = new Player();
// console.log(totalGames);
var g = new Grid(p);

getKeyPress(g, p);

function updateGame() {
    g.updateGame()
}
setInterval(updateGame, 1000);
