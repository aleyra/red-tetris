import { v4 as uuid } from "uuid";

export interface User {
	name: string;
	id: string;
	socketId: string;
}

export class UserAccount {
  name: string;
  readonly id: string;
  readonly socketId: string;

  constructor(name: string, socketId: string) {
    this.name = name;
    this.id = uuid();
    this.socketId = socketId;
  }
}

export class UserController {
  private users: UserAccount[];

  constructor() {
    this.users = [];
  }

  findOrCreateUser(username: string, socketId: string) {
    const match = this.users.find((u) => (u.name === username && u.socketId === socketId));
    if (match) {
      return match;
    }

    while (this.users.find((u) => u.name === username)) {
      username = `${username}(${Math.floor(Math.random() * 1000)})`;
    }
    const user = new UserAccount(username, socketId);
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

  removeUser(socketId: string) {
    this.users = this.users.filter((user) => user.socketId !== socketId);
  }

  getUser(socketId: string) {
    return this.users.find((user) => user.socketId === socketId);
  }
}

export default UserAccount;