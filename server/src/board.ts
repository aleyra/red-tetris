import { Piece, coordinate, types } from "./piece";

export interface Board {
  pieces: Piece[];
  current: Piece;

  grid: types[][];
}

const boardSizeX = 10;
const boardSizeY = 20;

export class BoardClass {
  private pieces: Piece[];
  private current: Piece;
  private grid: types[][];

  constructor(piece: Piece) {
    this.pieces = [piece];
    this.current = piece;
    this.grid = new Array(boardSizeY).fill(new Array(boardSizeX).fill("-"));
  }

  // isInside(coord: coordinate, piece: Piece) {
  //   const shapeSize = piece.shape.length;
  //   if (coord.x < 0 || coord.x + shapeSize >= boardSizeX || coord.y + shapeSize >= boardSizeY) {
  //     return false;
  //   }
  //   return true;
  // }

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

  addPieceToGrid() {
    const { coord, shape, pieceType } = this.current;
    const shapeSize = shape.length;
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x]) {
          this.grid[coord.x + x][coord.y + y] = pieceType;
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

    this.addPieceToGrid();
    if (this.pieces.length > 0) {
      this.current = this.pieces[0];
      this.pieces.shift();
    } else {
      const newPiece = Piece.generateNewPiece();
      this.current = newPiece;
      // send new piece to all players
    }
  }

  updateBoard() {
  }

}
