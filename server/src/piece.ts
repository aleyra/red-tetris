export type types = "O" | "S" | "Z" | "T" | "J" | "L" | "I" | "-";

export class coordinate {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  isShiftOutOfBounds(direction: "right" | "left" | "down") {
    if (direction === "right") {
      return this._x + 1 >= boardSizeX;
    } else if (direction === "left") {
      return this._x - 1 < 0;
    } else if (direction === "down") {
      return this._y + 1 >= boardSizeY;
    }
    return true;
  }

  shiftRight() {
    if (this.isShiftOutOfBounds("right")) {
      return false;
    }
    this._x += 1;
    return true;
  }

  shiftLeft() {
    if (this.isShiftOutOfBounds("left")) {
      return false;
    }
    this._x -= 1;
    return true;
  }

  shiftDown() {
    if (this.isShiftOutOfBounds("down")) {
      return false;
    }
    this._y += 1;
    return true;
  }


  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

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

  shift(direction: "right" | "left" | "down") {
    if (direction === "right") {
      return this.coord.shiftRight();
    } else if (direction === "left") {
      return this.coord.shiftLeft();
    } else {
      return this.coord.shiftDown();
    }
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