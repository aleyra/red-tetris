import Room from "./room";
import User from "src/user/user";

class RoomController {
  private _rooms: Room[];

  constructor() {
    this._rooms = [];
  }

  private createUniqueRoomName(roomName: string): string{
    while (this._rooms.find((room) => room.name === roomName)) {
      roomName = `${roomName}(${Math.floor(Math.random() * 1000)})`;
    }
    return roomName;
  }

  private createRoom(roomName: string, user: User): Room {
    this.createUniqueRoomName(roomName);
    const room = new Room(roomName, user);
    this._rooms.push(room);
    return room;
  }

  findRoom(room: Room): Room | undefined {
    return this._rooms.find((r) => r.id === room.id);
  }

  findRoomByName(roomName: string) : Room | undefined {
    return this._rooms.find((room) => room.name === roomName);
  }

  joinRoom(roomName: string, user: User): Room {
    const room = this.findRoomByName(roomName);
    if (room) {
      room.addMember(user);
      return room;
    } else {
      return this.createRoom(roomName, user);
    }
  }

  removeRoom(id: string) {
    this._rooms = this._rooms.filter((room) => room.id !== id);
  }

  getRoom(id: string) {
    return this._rooms.find((room) => room.id === id);
  }
}

export default RoomController;