import { v4 as uuid } from "uuid";
import { Socket } from "socket.io";

export class User {
  name: string;
  readonly id: string;
  readonly socket;

  constructor(name: string, socket: Socket) {
    this.name = name;
    this.id = uuid();
    this.socket = socket;
  }
}

export class UserController {
  private users: User[];

  constructor() {
    this.users = [];
  }

  findOrCreateUser(username: string, socket: Socket) {
    const match = this.users.find((u) => (u.name === username && u.socket.id === socket.id));
    if (match) {
      return match;
    }

    while (this.users.find((u) => u.name === username)) {
      username = `${username}(${Math.floor(Math.random() * 1000)})`;
    }
    const user = new User(username, socket);
    this.users.push(user);
    return user;
  }

  findUser(username: string) {
    const user = this.users.find((user) => user.name === username);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }


}

export default User;