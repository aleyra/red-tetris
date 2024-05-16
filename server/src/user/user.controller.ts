import { Socket } from "socket.io";
import User from "./user";

abstract class UserController {
  private users: User[];

  constructor(users: User[] = []) {
    this.users = users;
  }

  createUniqueUsername(username: string) {
    while (this.users.find((u) => u.name === username)) {
      username = `${username}(${Math.floor(Math.random() * 1000)})`;
    }
    return username;
  }

  findUserByName(username: string, socket: Socket) {
    return this.users.find((u) => (u.name === username && u.socket.id === socket.id));
  }

  findUser(user: User) {
    return this.users.find((u) => u === user);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(user: User) {
    this.users = this.users.filter((u) => u.name !== user.name);
  }
}

export default UserController;