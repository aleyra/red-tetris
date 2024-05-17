import Piece, { types } from "./piece/piece";
import Coordinate from "./piece/coordinate";

class Board {
  private _pieces: Piece[];
  private _current: Piece;
  private _grid: types[][];
  private _lastTimeStamp: Date;

  static readonly boardSizeX = 10;
  static readonly boardSizeY = 20;
  static readonly timeoutMs = 1000; //ms

  constructor(piece: Piece) {
    this._pieces = [piece];
    this._current = piece;
    this._grid = new Array(Board.boardSizeY).fill(new Array(Board.boardSizeX).fill("-"));
  }

  isEmpty(coord: Coordinate): boolean {
    return this._grid[coord.x][coord.y] === "-";
  }

  isNoCollision(newPiece: Piece): boolean {
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

  addPieceToGrid(_grid: types[][]) {
    const { coord, shape, pieceType } = this._current;
    const shapeSize = shape.length;
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x]) {
          _grid[coord.x + x][coord.y + y] = pieceType;
        }
      }
    }
  }

  isTimeout(): boolean{
    const now = new Date();
    return (now.getTime() - this._lastTimeStamp.getTime()) > (Board.timeoutMs - 10);
  }

  timeLeft() : number {
    const now = new Date();
    const timeLeft = Board.timeoutMs - (now.getTime() - this._lastTimeStamp.getTime());
    return timeLeft > 0 ? timeLeft : 0;
  }

  updateLastTimeStamp() {
    this._lastTimeStamp = new Date();
  }

  addNewPieceToList(newPiece: Piece) {
    this._pieces.push(newPiece);
  }

  onPieceLanding() {
    this.addPieceToGrid(this._grid);

    if (this._pieces.length == 0)
      throw new Error("Logic error: No more _pieces 4 you!");

    this._current = this._pieces[0];
    this._pieces.shift();

    this.updateLastTimeStamp();
  }

  shiftPiece(direction: "left" | "right" | "down"): boolean {
    const shiftedPiece = this._current.predictShift(direction);
    if (shiftedPiece && this.isNoCollision(shiftedPiece)) {
      this._current.shift(direction);
      if (direction === "down") {
        this.updateLastTimeStamp();
      }
      return true;
    }

    if (direction === "down") {
      this.onPieceLanding();
    }
    return false;
  }

  rotatePiece(direction: "left" | "right"): boolean {
    const rotatedPiece = this._current.predictRotate(direction);
    if (this.isNoCollision(rotatedPiece)) {
      this._current.rotate(direction);
      return true;
    }
    return false;
  }

  screenShot(): types[][] {
    const _current_grid = this._grid;
    this.addPieceToGrid(_current_grid);
    return _current_grid;
  }

  get numOf_Pieces() : number {
    return this._pieces.length;
  }

}

export default Board;