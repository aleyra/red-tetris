import Player  from "./player";
import  AUserController  from "./user.controller.abstract";
import User from "./user";
import Piece from "src/piece/piece";

class PlayerController extends AUserController {
  protected _users: Player[];

  constructor(_users: User[] = []) {
    super();
    this._users = _users.map((user) => new Player(user));
  }

  addPlayer(user: User) {
    if (this.findUser(user))
      return;
    this._users.push(new Player(user));
  }

  initPlayersBoards(piece: Piece) {
    this._users.forEach((player) => player.initBoard(piece));
  }

  startPlayersGame() {
    this._users.forEach((player) => player.startLoop());
    this._users.forEach((player) => player.emitCurrentBoard());
  }

  notifyAllPlayers(event: string, data: any) {
    this._users.forEach((player) => player.socket.emit(event, data));
  }

  isNewPieceNeeded() {
    return this._users.some((player) => {return player.isNewPieceNeeded();});
  }

  distributeNewPiece(piece: Piece) {
    this._users.forEach((player) => player.addNewPieceToList(piece));
  }
}

export default PlayerController;