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
}

export default Player;