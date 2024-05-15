import Board from "./board";
import { User } from "./user";
import Piece from "./piece/piece";

export class Player {
  private readonly _user: User;
  private _board: Board;

  constructor(user: User) {
    this._user = user;
  }

  initBoard(piece: Piece) {
    this._board = new Board(piece);
  }

  addNewPieceToList(piece: Piece) {
    this._board.addNewPieceToList(piece);
  }
}