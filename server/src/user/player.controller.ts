import Player  from "./player";
import  AUserController  from "./user.controller.abstract";
import User from "./user";
import Piece from "src/piece/piece";

class PlayerController extends AUserController {
  protected users: Player[];

  constructor(users: User[] = []) {
    super();
    this.users = users.map((user) => new Player(user));
  }

  addPlayer(user: User) {
    if (this.findUser(user))
      return;
    this.users.push(new Player(user));
  }

  notifyAllPlayers(event: string, data: any) {
    this.users.forEach((player) => player.socket.emit(event, data));
  }

  isNewPieceNeeded() {
    return this.users.some((player) => {return player.isNewPieceNeeded();});
  }

  distributeNewPiece(piece: Piece) {
    this.users.forEach((player) => player.addNewPieceToList(piece));
  }
}

export default PlayerController;