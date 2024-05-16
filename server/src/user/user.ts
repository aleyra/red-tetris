import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

abstract class User {
  name: string;
  readonly id: string;
  readonly socket: Socket;

  constructor(name: string, socket: Socket, id = uuid()) {
    this.name = name;
    this.id = id;
    this.socket = socket;
  }
}

export default User;