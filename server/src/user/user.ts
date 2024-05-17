import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

class User {
  private _name: string;
  private readonly _id: string;
  private readonly _socket: Socket;

  constructor(_name: string, socket: Socket, _id = uuid()) {
    this._name = _name;
    this._id = _id;
    this._socket = socket;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get socket() {
    return this._socket;
  }
}

export default User;