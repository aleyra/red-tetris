import { Piece, coordinate, types } from "./piece";

export interface Board {
  pieces: Piece[];
  current: Piece;

  grid: types[][];
}

export class BoardClass {
  private pieces: Piece[];
  private current: Piece;
  private grid: types[][];
  static readonly boardSizeX = 10;
  static readonly boardSizeY = 20;

  constructor(piece: Piece) {
    this.pieces = [piece];
    this.current = piece;
    this.grid = new Array(BoardClass.boardSizeY).fill(new Array(BoardClass.boardSizeX).fill("-"));
  }

  isEmpty(coord: coordinate) {
    return this.grid[coord.x][coord.y] === "-";
  }

  isNoCollision(newPiece: Piece) {
    const { coord, shape } = newPiece;
    const shapeSize = shape.length;
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x]) {
          if (!this.isEmpty(new coordinate(coord.x + x, coord.y + y))) {
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

  moveDownPiece() {
    const shiftedPiece = this.current.predictShift("down");
    if (shiftedPiece && this.isNoCollision(shiftedPiece)) {
      this.current.shift("down");
      return ;
    }

    this.addPieceToGrid(this.grid);

    if (this.pieces.length > 0) {
      this.current = this.pieces[0];
      this.pieces.shift();
    } else {
      const newPiece = Piece.generateNewPiece();
      this.current = newPiece;
      // send new piece to all players
    }
  }

  screenShot() {
    const currentGrid = this.grid;
    this.addPieceToGrid(currentGrid);
    return currentGrid;
  }

}
