import { Server as SocketIoServer } from "socket.io";
import { Server as HttpServer } from "node:http";
import RoomController from "./room/room.controller";
import UserController from "./user/user.controller";

export class SocketServer {
  private readonly socketIoServer: SocketIoServer;

  private roomController: RoomController;
  private userController: UserController;

  constructor(httpServer: HttpServer, is_production: boolean = false) {
    if (is_production) {
      this.socketIoServer = new SocketIoServer(httpServer);
    } else {
      this.socketIoServer = new SocketIoServer(httpServer, {
        cors: {
          origin: "http://localhost:3000",
          methods: ["GET", "POST"]
        }
      });
    }
    this.roomController = new RoomController();
    this.userController = new UserController();
  }

  startListening() {
    this.socketIoServer.on("connect", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });

      socket.on("createRoom", (roomName: string, username: string) => {
        console.log("createRoom", roomName);
        const user = this.userController.findOrCreateUser(username, socket);
        const room = this.roomController.createRoom(roomName, user);
        console.log("room", room);
      });

      socket.on("joinRoom", (roomName: string, username: string) => {
        console.log("joinRoom", roomName);
        const user = this.userController.findOrCreateUser(username, socket);
        const room = this.roomController.joinRoom(roomName, user);
        console.log("room", room);
      });

      socket.on("startGame", (roomName: string) => {
        console.log("startGame", roomName);
        const room = this.roomController.getRoom(roomName);
        if (!room) {
          throw new Error("Room not found");
        }
        room.game.startGame();
      });
    });
  }
}

export default SocketServer;