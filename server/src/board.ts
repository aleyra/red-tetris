import Piece, { types } from "./piece/piece";
import Coordinate from "./piece/coordinate";

class Board {
  private pieces: Piece[];
  private current: Piece;
  private grid: types[][];
  private lastTimestamp: Date;

  static readonly boardSizeX = 10;
  static readonly boardSizeY = 20;
  static readonly timeoutMs = 1000; //ms

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

  isTimeout() {
    const now = new Date();
    return (now.getTime() - this.lastTimestamp.getTime()) > (Board.timeoutMs - 10);
  }

  timeLeft() : number {
    const now = new Date();
    const timeLeft = Board.timeoutMs - (now.getTime() - this.lastTimestamp.getTime());
    return timeLeft > 0 ? timeLeft : 0;
  }

  updateLastTimestamp() {
    this.lastTimestamp = new Date();
  }

  addNewPieceToList(newPiece: Piece) {
    this.pieces.push(newPiece);
  }

  onPieceLanding() {
    this.addPieceToGrid(this.grid);

    if (this.pieces.length == 0)
      throw new Error("Logic error: No more pieces 4 you!");

    this.current = this.pieces[0];
    this.pieces.shift();

    this.updateLastTimestamp();
  }

  shiftPiece(direction: "left" | "right" | "down"): boolean {
    const shiftedPiece = this.current.predictShift(direction);
    if (shiftedPiece && this.isNoCollision(shiftedPiece)) {
      this.current.shift(direction);
      if (direction === "down") {
        this.updateLastTimestamp();
      }
      return true;
    }

    if (direction === "down") {
      this.onPieceLanding();
    }
    return false;
  }

  rotatePiece(direction: "left" | "right"): boolean {
    const rotatedPiece = this.current.predictRotate(direction);
    if (this.isNoCollision(rotatedPiece)) {
      this.current.rotate(direction);
      return true;
    }
    return false;
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