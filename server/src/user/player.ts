import Board from "../board";
import  User from "./user";
import Piece from "../piece/piece";

class Player extends User {
  private _board: Board;

  constructor(user: User) {
    super(user.name, user.socket, user.id);
  }

  initBoard(piece: Piece) {
    this._board = new Board(piece);
  }

  addNewPieceToList(piece: Piece) {
    this._board.addNewPieceToList(piece);
  }

  isNewPieceNeeded() {
    return this._board.numOfPieces <= 1;
  }

  async loopCheck() {
    if (this._board.isTimeout()) {
      this.movePiece("shift", "down");
    }

    const sleepTime = this._board.timeLeft() / 2;
    setTimeout(() => {
      this.loopCheck();
    }, sleepTime);
  }

  async startLoop() {
    setTimeout(() => this.loopCheck(), this._board.timeLeft() / 2);
  }

  movePiece(movement: "shift" | "rotation", direction: "left" | "right" | "down") {
    let isMoved = false;

    if (movement === "shift") {
      isMoved = this._board.shiftPiece(direction);
    } else if (movement === "rotation" && direction !== "down") {
      isMoved = this._board.turnPiece(direction);
    } else {
      throw new Error("Invalid movement"); // rotation down is not allowed
    }

    if (!isMoved)
      return;
    const boardCurrentState = this._board.screenShot();
    this.socket.emit("board", boardCurrentState);
  }
}

export default Player;