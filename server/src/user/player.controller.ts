import Player  from "./player";
import  AUserController  from "./user.controller.abstract";
import User from "./user";

class PlayerController extends AUserController {

  constructor(users: User[] = []) {
    super(users.map((user) => new Player(user)));
  }

  addPlayer(user: User) {
    if (this.findUser(user))
      return;
    this.users.push(new Player(user));
  }

  notifyAllPlayers(event: string, data: any) {
    this.users.forEach((player) => player.socket.emit(event, data));
  }
}

export default PlayerController;