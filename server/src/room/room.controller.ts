import Room from "./room";
import User from "src/user/user";

class RoomController {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  createUniqueRoomName(roomName: string): string{
    while (this.rooms.find((room) => room.name === roomName)) {
      roomName = `${roomName}(${Math.floor(Math.random() * 1000)})`;
    }
    return roomName;
  }

  createRoom(roomName: string, user: User): Room {
    this.createUniqueRoomName(roomName);
    const room = new Room(roomName, user);
    this.rooms.push(room);
    return room;
  }

  findRoom(room: Room): Room | undefined {
    return this.rooms.find((r) => r.id === room.id);
  }

  findRoomByName(roomName: string) : Room | undefined {
    return this.rooms.find((room) => room.name === roomName);
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
    this.rooms = this.rooms.filter((room) => room.id !== id);
  }

  getRoom(id: string) {
    return this.rooms.find((room) => room.id === id);
  }
}

export default RoomController;