import { Board } from "../board";

class Coordinate {
  private _x: number;
  private _y: number;
  private readonly _maxX: number;
  private readonly _maxY: number;

  constructor(x: number, y: number, maxX = Board.boardSizeX, maxY = Board.boardSizeY) {
    this._x = x;
    this._y = y;
    this._maxX = maxX;
    this._maxY = maxY;
  }

  isShiftable(direction: "right" | "left" | "down") {
    if (direction === "right") {
      return this._x + 1 >= this._maxX;
    } else if (direction === "left") {
      return this._x - 1 < 0;
    } else if (direction === "down") {
      return this._y + 1 >= this._maxY;
    }
    return true;
  }

  shiftRight() {
    if (this.isShiftable("right")) {
      return false;
    }
    this._x += 1;
    return true;
  }

  shiftLeft() {
    if (this.isShiftable("left")) {
      return false;
    }
    this._x -= 1;
    return true;
  }

  shiftDown() {
    if (this.isShiftable("down")) {
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

export default Coordinate;