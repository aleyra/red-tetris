const readline = require('readline');
 

function getKeyPress(ref, playe)
{
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
     
    // listen to keypress
     
    process.stdin.on("keypress", (str, key) => {
        if(key.name == "q") ref.rotatePiece(-1);
        if(key.name == "e") ref.rotatePiece(1);
        if(key.name == "a") ref.movePieceHorizontally(-1);
        if(key.name == "d") ref.movePieceHorizontally(1);
        if(key.name == "s") ref.slamPiece();
        if(key.name == "n") p.setMalus(true);
        if(key.ctrl && key.name == "c") process.exit(0);
        ref.printGrid();
    });
}

var totalGames = 0;

var tetrominoes = ["I", "L", "J", "S", "Z", "O", "T"];
var shapes = {
    "I": [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    "L": [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    "J": [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    "S": [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    "Z": [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    "O": [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ],
    "T": [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
}
function Piece(type, startingX) {
    this.shape = shapes[type];
    this.x = startingX;
    this.y = 0;
    this.type = type;
    this.rotate = (direction) => {
        for (var y = 0; y < this.shape.length; y++)
        {
            for (var x = 0; x < y; x++)
            {
                [
                    this.shape[x][y],
                    this.shape[y][x] 
                ] = [
                    this.shape[y][x],
                    this.shape[x][y]
                ]
            }
        }
        if (direction > 0)
            this.shape.forEach(row => row.reverse());
        else
            this.shape.reverse();
    }
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
    this.currentPiece = new Piece("L", Math.round(this.width / 2));
    this.grid = Array(this.height).fill().map(() => Array(this.width).fill().map(() => "X"));
    this.movePieceHorizontally = (direction) =>
    {
        this.currentPiece.x += direction;
        if (this.checkForCollision())
            this.currentPiece.x -= direction;
    }
    this.rotatePiece = (direction) =>
    {
        this.currentPiece.rotate(direction);
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
        var p = this.currentPiece;
        for (var y = 0; y < p.shape.length; y++)
        {
            for (var x = 0; x < p.shape[0].length; x++)
            {
                if (p.shape[y][x] == 1)
                    this.grid[p.y + y][p.x + x] = p.type;
            }
        }

        this.checkForFullLine();

        if (this.player.hasMalus)
        {
            this.addPlayerMalus();
            this.player.setMalus(false);
        }
        // pick a shape at random
        this.currentPiece = new Piece(tetrominoes[Math.floor(Math.random() * tetrominoes.length)], Math.round(this.width / 2) - 1);
        // If there is not enough room for the newly generated piece, trigger game over
        if (this.checkForCollision())
        {
            this.gameOver();
        }
        this.printGrid();
    }
    this.slamPiece = () => {
        var y = this.currentPiece.y;
        var x = this.currentPiece.x;
        while (!this.checkForCollision())
            this.currentPiece.y += 1;
        this.currentPiece.y -= 1;
        this.placePiece();
    }
    this.checkForCollision = () =>
    {
        const p = this.currentPiece;
        for (var y = 0; y < p.shape.length; y++)
        {
            for (var x = 0; x < p.shape[0].length; x++)
            {
                if (p.shape[y][x] === 1 &&
                    (!this.grid[y + p.y] || !this.grid[y + p.y][x + p.x] || this.grid[y + p.y][x + p.x] !== "X"))
                {
                    return true;
                }
            }
        }
        return false;
    }
    this.gameOver = () =>
    {
        process.exit(0);
    }
    this.addPlayerMalus = () =>
    {
        // if the top row is not empty, end the game immediately since it will be pushed beyond the limit
        if (this.grid[0] != Array(this.width).fill().map(() => "X"))
            this.gameOver();
        // move all rows up one rank then insert the null row
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
        // duplicate the grid to add the current piece to it before printing
        var displayGrid = JSON.parse(JSON.stringify(this.grid));

        var p = this.currentPiece;
        for (var y = 0; y < p.shape.length; y++)
        {
            for (var x = 0; x < p.shape[0].length; x++)
            {
                if (p.shape[y][x] == 1)
                    displayGrid[p.y + y][p.x + x] = p.type;
            }
        }
        for (var y = 0; y < this.height; y++)
        {
            for (var x = 0; x < this.width; x++)
            {
                    process.stdout.write("" + displayGrid[y][x]);
            }
            console.log("");
        }
    }
    this.getJsonGrid = () => {
        var displayGrid = JSON.parse(JSON.stringify(this.grid));

        var p = this.currentPiece;
        for (var y = 0; y < p.shape.length; y++)
        {
            for (var x = 0; x < p.shape[0].length; x++)
            {
                if (p.shape[y][x] == 1)
                    displayGrid[p.y + y][p.x + x] = p.type;
            }
        }
        var ret = "";
        for (var y = 0; y < this.height; y++)
        {
            for (var x = 0; x < this.width; x++)
            {
                    ret += ("" + displayGrid[y][x]);
            }
            ret += " ";
        }
        return (ret);
    }
    this.updateGame = () =>
    {
        this.currentPiece.y += 1;
        if (this.checkForCollision())
        {
            this.currentPiece.y -= 1;
            this.placePiece();
        }
        this.printGrid();
    }
    totalGames += 1;
}

// for local debug 
// var p = new Player();
// // console.log(totalGames);
// var g = new Grid(p);

// getKeyPress(g, p);

// function updateGame() {
//     g.updateGame()
// }
// setInterval(updateGame, 1000);

module.exports = {
    Player,
    Game,
    Grid,
    Piece
};