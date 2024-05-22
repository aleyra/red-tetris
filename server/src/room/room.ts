import UserController from "../user/user.controller";
import Game from "../game";
import User from "../user/user";
import { v4 as uuid } from "uuid";

class Room {
  private _id: string;
  private _name: string;
  private _owner: User;
  private _members: UserController;
  private _game: Game;

  constructor(name: string, user: User) {
    this._id = uuid();
    this._name = name;
    this._owner = user;
    this._members = new UserController([user]);
    this._game = new Game([user]);
  }

  addMember(user: User) {
    this._members.addUser(user);
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get game() {
    return this._game;
  }
}

export default Room;