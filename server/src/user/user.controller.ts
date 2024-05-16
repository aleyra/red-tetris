import { Socket } from "socket.io";
import User from "./user";
import AUserController from "./user.controller.abstract";

class UserController extends AUserController {

  constructor(users: User[] = []) {
    super(users);
  }

  addUser(user: User) {
    if (this.findUser(user))
      return;
    this.users.push(user);
  }

}

export default UserController;