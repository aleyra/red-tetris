import { Socket } from "socket.io";
import User from "./user";
import AUserController from "./user.controller.abstract";

class UserController extends AUserController {
  protected _users: User[];

  constructor(_users: User[] = []) {
    super();
    this._users = _users;
  }

  addUser(user: User) {
    if (this.findUser(user))
      return;
    this._users.push(user);
  }

  createAndAddUser(username: string, socket: Socket): User {
    const user = new User(username, socket);
    this.addUser(user);
    return user;
  }
}

export default UserController;