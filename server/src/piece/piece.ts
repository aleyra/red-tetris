import Board from "../board";
import Coordinate from "./coordinate";

export type types = "O" | "S" | "Z" | "T" | "J" | "L" | "I" | "-";

class Piece {
  private readonly _pieceType: types;
  private _coord: Coordinate;
  private _shape: number[][];

  static pieces: types[] = ["O", "S", "Z", "T", "J", "L", "I"];

  constructor(pieceType: types) {
    this._pieceType = pieceType;
    switch (pieceType) {
    case "O":
      this._shape =
        [[1, 1],
          [1, 1]];
      break;
    case "S":
      this._shape =
        [[0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]];
      break;
    case "Z":
      this._shape =
        [[0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]];
      break;
    case "T":
      this._shape =
        [[0, 1, 0],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "J":
      this._shape =
        [[1, 0, 0],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "L":
      this._shape =
        [[0, 0, 1],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "I":
      this._shape =
        [[0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0]];
      break;
    }
    const coordX = Math.floor((Board.boardSizeX - this._shape.length) / 2);
    this._coord = new Coordinate(coordX, 0);
  }

  private rotateRight() {
    const newShape: number[][] = [];
    const size: number = this._shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this._shape[size - 1 - j][i];
      }
    }
    this._shape = newShape;
  }

  private rotateLeft() {
    const newShape: number[][] = [];
    const size: number = this._shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this._shape[i][size - 1 - i];
      }
    }
    this._shape = newShape;
  }

  rotate(direction: "right" | "left") {
    if (direction === "left") {
      this.rotateLeft();
    } else {
      this.rotateRight();
    }
  }

  predictRotate(direction: "right" | "left") {
    const newPiece = new Piece(this._pieceType);
    newPiece._coord = this.coord;
    newPiece._shape = this._shape;
    newPiece.rotate(direction);
    return newPiece;
  }

  // rien fait si le déplacement est impossible
  shift(direction: "right" | "left" | "down") {
    if (direction === "right") {
      this.coord.shiftRight();
    } else if (direction === "left") {
      this.coord.shiftLeft();
    } else {
      this.coord.shiftDown();
    }
  }

  predictShift(direction: "right" | "left" | "down") {
    if (!this.coord.isShiftable(direction))
      return undefined;
    const newPiece = new Piece(this._pieceType);
    newPiece._coord = this.coord;
    newPiece._shape = this._shape;
    newPiece.shift(direction);
    return newPiece;
  }

  get pieceType() {
    return this._pieceType;
  }

  get shape() {
    return this._shape;
  }

  get coord() {
    return this._coord;
  }

  static generateNewPiece() {
    if (this.pieces.length === 0) {
      this.pieces = ["O", "S", "Z", "T", "J", "L", "I"];
    }
    const randomIndex = Math.floor(Math.random() * this.pieces.length);
    const randomType = this.pieces[randomIndex];
    this.pieces.splice(randomIndex, 1);
    return new Piece(randomType);
  }
}

export default Piece;