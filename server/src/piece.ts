type types = "O" | "S" | "Z" | "T" | "J" | "L" | "I";

type coordinate = { "x": number, "y": number };

export interface Piece {
  type: types;
  coord: coordinate;
}

export class PieceClass {
  private readonly type: types;
  private coord: coordinate;
  private shape: number[][];

  constructor(type: types) {
    this.type = type;
    switch (type) {
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
  }

  turnRight() {
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

  turnLeft() {
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
    if (direction === "left") {
      return this.turnLeft();
    }
    return this.turnRight();
  }

  shiftRight() {
    return { x: this.coord.x + 1, y: this.coord.y };
  }

  shiftLeft() {
    return { x: this.coord.x - 1, y: this.coord.y };
  }

  shiftDown() {
    return { x: this.coord.x, y: this.coord.y + 1 };
  }

  shift(direction: "right" | "left" | "down") {
    if (direction === "right") {
      return this.shiftRight();
    } else if (direction === "left") {
      return this.shiftLeft();
    }
    return this.shiftDown();
  }

  setShape(shape: number[][]) {
    this.shape = shape;
  }

  setCoord(newCoord: coordinate) {
    this.coord = newCoord;
  }
}