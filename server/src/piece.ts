export type types = "O" | "S" | "Z" | "T" | "J" | "L" | "I" | "-";

export type coordinate = { "x": number, "y": number };

const boardSizeX = 10;
const boardSizeY = 20;

export class Piece {
  private readonly _pieceType: types;
  private _coord: coordinate;
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
    this._coord.x = Math.floor((boardSizeX - this._shape.length) / 2);
    this._coord.y = 0;
  }

  private turnRight() {
    const newShape: number[][] = [];
    const size: number = this._shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this._shape[size - 1 - j][i];
      }
    }
    return newShape;
  }

  private turnLeft() {
    const newShape: number[][] = [];
    const size: number = this._shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this._shape[i][size - 1 - i];
      }
    }
    return newShape;
  }

  turn(direction: "right" | "left") {
    const newPiece = new Piece(this._pieceType);
    newPiece._coord = this._coord;
    if (direction === "left") {
      newPiece._shape = this.turnLeft();
    } else {
      newPiece._shape = this.turnRight();
    }
    return newPiece;
  }

  private shiftRight() {
    if (this._coord.x + this._shape.length + 1 === boardSizeX) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this._coord.x + 1, y: this._coord.y };
  }

  private shiftLeft() {
    if (this._coord.x === 0) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this._coord.x - 1, y: this._coord.y };
  }

  private shiftDown() {
    if (this._coord.y + this._shape.length + 1 === boardSizeY) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this._coord.x, y: this._coord.y + 1 };
  }

  shift(direction: "right" | "left" | "down") {
    const newPiece = new Piece(this._pieceType);
    newPiece._shape = this._shape;
    try {
      if (direction === "right") {
        newPiece._coord = this.shiftRight();
      } else if (direction === "left") {
        newPiece._coord = this.shiftLeft();
      } else {
        newPiece._coord = this.shiftDown();
      }
    } catch (error) {
      if (error instanceof RangeError) {
        return;
      } else {
        console.log(error);
      }
    }
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

  // private set shape(shape: number[][]) {
  //   this._shape = shape;
  // }

  // private set coord(newCoord: coordinate) {
  //   this._coord = newCoord;
  // }

  static generateNewPiece() {
    if (this.pieces.length === 0) {
      this.pieces = ["O", "S", "Z", "T", "J", "L", "I"];
    }
    const randomIndex = Math.floor(Math.random() * this.pieces.length);
    const randomType = this.pieces[randomIndex];
    this.pieces.splice(randomIndex, 1);
    return randomType;
  }
}