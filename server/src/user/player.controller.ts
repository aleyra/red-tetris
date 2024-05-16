import Player  from "./player";
import  UserController  from "./user.controller";
import User from "./user";

class PlayerController extends UserController {

  constructor(users: User[] = []) {
    super(users.map((user) => new Player(user)));
  }

  addPlayer(user: User) {
    this.addUser(new Player(user));
  }
}

export default PlayerController;