import Player from "./player";
import User from "./user";

abstract class AUserController {
  protected users: (User | Player)[];

  constructor(users: User[] | Player[] = []) {
    this.users = users;
  }

  createUniqueUsername(username: string) {
    while (this.users.find((u) => u.name === username)) {
      username = `${username}(${Math.floor(Math.random() * 1000)})`;
    }
    return username;
  }

  findUserByName(username: string) {
    return this.users.find((u) => u.name === username);
  }

  findUserBySocketId(socketId: string) {
    return this.users.find((u) => u.socket.id === socketId);
  }

  findUser(user: User | Player) {
    return this.users.find((u) => u.id === user.id);
  }

  removeUser(user: User | Player) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }
}

export default AUserController;