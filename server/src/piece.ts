type types = "O" | "S" | "Z" | "T" | "J" | "L" | "I";

type coordinate = { "x": number, "y": number };

const boardSizeX = 10;
const boardSizeY = 20;

export interface Piece {
  pieceType: types;
  coord: coordinate;
  shape: number[][];
}

export class PieceClass {
  private readonly pieceType: types;
  private coord: coordinate;
  private shape: number[][];

  static pieces: types[] = ["O", "S", "Z", "T", "J", "L", "I"];

  constructor(pieceType: types) {
    this.pieceType = pieceType;
    switch (pieceType) {
    case "O":
      this.shape =
        [[1, 1],
          [1, 1]];
      break;
    case "S":
      this.shape =
        [[0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]];
      break;
    case "Z":
      this.shape =
        [[0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]];
      break;
    case "T":
      this.shape =
        [[0, 1, 0],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "J":
      this.shape =
        [[1, 0, 0],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "L":
      this.shape =
        [[0, 0, 1],
          [1, 1, 1],
          [0, 0, 0]];
      break;
    case "I":
      this.shape =
        [[0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0]];
      break;
    }
    this.coord.x = Math.floor((boardSizeX - this.shape.length) / 2);
    this.coord.y = 0;
  }

  private turnRight() {
    const newShape: number[][] = [];
    const size: number = this.shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this.shape[size - 1 - j][i];
      }
    }
    return newShape;
  }

  private turnLeft() {
    const newShape: number[][] = [];
    const size: number = this.shape.length;
    for (let i = 0; i < size; i++) {
      newShape.push([]);
      for (let j = 0; j < size; j++) {
        newShape[i][j] = this.shape[i][size - 1 - i];
      }
    }
    return newShape;
  }

  turn(direction: "right" | "left") {
    const newPiece = new PieceClass(this.pieceType);
    newPiece.coord = this.coord;
    if (direction === "left") {
      newPiece.shape = this.turnLeft();
    } else {
      newPiece.shape = this.turnRight();
    }
    return newPiece;
  }

  private shiftRight() {
    if (this.coord.x + this.shape.length + 1 === boardSizeX) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this.coord.x + 1, y: this.coord.y };
  }

  private shiftLeft() {
    if (this.coord.x === 0) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this.coord.x - 1, y: this.coord.y };
  }

  private shiftDown() {
    if (this.coord.y + this.shape.length + 1 === boardSizeY) {
      throw new RangeError("Piece will be out of bounds");
    }
    return { x: this.coord.x, y: this.coord.y + 1 };
  }

  shift(direction: "right" | "left" | "down") {
    const newPiece = new PieceClass(this.pieceType);
    newPiece.shape = this.shape;
    try {
      if (direction === "right") {
        newPiece.coord = this.shiftRight();
      } else if (direction === "left") {
        newPiece.coord = this.shiftLeft();
      } else {
        newPiece.coord = this.shiftDown();
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

  setShape(shape: number[][]) {
    this.shape = shape;
  }

  setCoord(newCoord: coordinate) {
    this.coord = newCoord;
  }

  setPiece(newPiece: Piece) {
    this.coord = newPiece.coord;
    this.shape = newPiece.shape;
  }

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