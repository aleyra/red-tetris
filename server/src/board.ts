import Piece, { types } from "./piece/piece";
import Coordinate from "./piece/coordinate";

class Board {
  private pieces: Piece[];
  private current: Piece;
  private grid: types[][];
  static readonly boardSizeX = 10;
  static readonly boardSizeY = 20;

  constructor(piece: Piece) {
    this.pieces = [piece];
    this.current = piece;
    this.grid = new Array(Board.boardSizeY).fill(new Array(Board.boardSizeX).fill("-"));
  }

  isEmpty(coord: Coordinate) {
    return this.grid[coord.x][coord.y] === "-";
  }

  isNoCollision(newPiece: Piece) {
    const { coord, shape } = newPiece;
    const shapeSize = shape.length;
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x]) {
          if (!this.isEmpty(new Coordinate(coord.x + x, coord.y + y))) {
            return false;
          }
        }
      }
    }
    return true;
  }

  addPieceToGrid(grid: types[][]) {
    const { coord, shape, pieceType } = this.current;
    const shapeSize = shape.length;
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x]) {
          grid[coord.x + x][coord.y + y] = pieceType;
        }
      }
    }
  }

  addNewPieceToList(newPiece: Piece) {
    this.pieces.push(newPiece);
  }

  moveDownPiece() {
    const shiftedPiece = this.current.predictShift("down");
    if (shiftedPiece && this.isNoCollision(shiftedPiece)) {
      this.current.shift("down");
      return ;
    }

    this.addPieceToGrid(this.grid);

    if (this.pieces.length == 0)
      throw new Error("Logic error: No more pieces 4 you!");

    this.current = this.pieces[0];
    this.pieces.shift();

  }

  turnPiece() {
    const direction = "right"; //get key input
    const turnedPiece = this.current.predictTurn(direction);
    if (this.isNoCollision(turnedPiece)) {
      this.current.turn(direction);
    }
  }

  screenShot() {
    const currentGrid = this.grid;
    this.addPieceToGrid(currentGrid);
    return currentGrid;
  }

  get numOfPieces() {
    return this.pieces.length;
  }

}

export default Board;