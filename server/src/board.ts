import { Piece } from "./piece";

export interface Board {
  pieces: Piece[];
  current: Piece;

  map: number[][];
}

const boardSizeX = 10;
const boardSizeY = 20;

export class BoardClass {
  private pieces: Piece[];
  private current: Piece;
  private grid: number[][];

  constructor(piece: Piece) {
    this.pieces = [piece];
    this.current = piece;
    this.grid = new Array(boardSizeY).fill(new Array(boardSizeX).fill(0));
  }

  iNoCollision(newPiece: Piece) {
    const { coord, shape } = newPiece;
    const shapeSize = shape.length;
    if (coord.x < 0 || coord.x + shapeSize >= boardSizeX || coord.y + shapeSize >= boardSizeY) {
      return false;
    }
    for (let y = 0; y < shapeSize; y++) {
      for (let x = 0; x < shapeSize; x++) {
        if (shape[y][x] === 1) {
          if (this.grid[coord.x + x][coord.y + y] === 1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  updateBoard() {
  }

}
