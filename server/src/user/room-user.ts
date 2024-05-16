import { v4 as uuid } from "uuid";
import { Socket } from "socket.io";
import User from "./user";

export class RoomUser extends User {
  constructor(name: string, socket: Socket, id = uuid()) {
    super(name, socket, id);
  }
}

export default RoomUser;