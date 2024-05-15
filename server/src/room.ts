import { Game, GameClass } from "./game";
import { User } from "./user";
import { v4 as uuid } from "uuid";

export class Room {
  id: string;
  name: string;
  owner: User;
  members: User[];
  game: GameClass;

  constructor(name: string, user: User) {
    this.id = uuid();
    this.name = name;
    this.owner = user;
    this.members = [user];
    this.game = new GameClass(this.members);
  }
}

export class RoomController {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  createRoom(roomName: string, user: User) {
    while (this.rooms.find((room) => room.name === roomName)) {
      roomName = `${roomName}(${Math.floor(Math.random() * 1000)})`;
    }
    const room = new Room(roomName, user);
    this.rooms.push(room);
    return room;
  }

  joinRoom(roomName: string, user: User) {
    const room = this.rooms.find((room) => room.name === roomName);
    if (room) {
      room.members.push(user);
    } else {
      throw new Error("Room not found");
    }
  }

  removeRoom(id: string) {
    this.rooms = this.rooms.filter((room) => room.id !== id);
  }

  getRoom(id: string) {
    return this.rooms.find((room) => room.id === id);
  }
}

export default Room;