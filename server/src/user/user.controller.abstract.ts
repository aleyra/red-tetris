import Player from "./player";
import User from "./user";

abstract class AUserController {
  protected abstract _users: (User | Player)[];

  constructor() {
  }

  createUniqueUsername(username: string) {
    while (this._users.find((u) => u.name === username)) {
      username = `${username}(${Math.floor(Math.random() * 1000)})`;
    }
    return username;
  }

  findUserByName(username: string) {
    return this._users.find((u) => u.name === username);
  }

  findUserBySocketId(socketId: string) {
    return this._users.find((u) => u.socket.id === socketId);
  }

  findUser(user: User | Player) {
    return this._users.find((u) => u.id === user.id);
  }

  removeUser(user: User | Player) {
    this._users = this._users.filter((u) => u.id !== user.id);
  }
}

export default AUserController;