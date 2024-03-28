import { Server as SocketIoServer } from 'socket.io';
import { Server as HttpServer } from 'node:http'

export class SocketServer {
  private readonly socketIoServer: SocketIoServer;

  constructor(httpServer: HttpServer, is_production: boolean = false) {
    if (is_production) {
      this.socketIoServer = new SocketIoServer(httpServer);
    } else {
      this.socketIoServer = new SocketIoServer(httpServer, {
        cors: {
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST']
        }
      });
    }
  }

  startListening() {
    this.socketIoServer.on('connectsocketIoServern', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
}