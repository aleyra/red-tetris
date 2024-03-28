import express from 'express';
import { createServer } from 'node:http';
import { Server as SocketIoServer } from 'socket.io';
import config from './config';

class SocketServer {
  private is_production: boolean;
  private readonly server;
  private readonly io: SocketIoServer;

  constructor() {
    if (config.NODE_ENV == 'production') {
      this.is_production = true;
    } else {
      this.is_production = false;
    }
    if (this.is_production) {
      const app = express();
      app.use(express.static(config.DIR_PATH));
      app.get('/', (req, res) => {
        res.sendFile(config.FILE_PATH);
      });
      this.server = createServer(app);
      this.io = new SocketIoServer(this.server);
    } else {
      this.server = createServer();
      this.io = new SocketIoServer(this.server, {
        cors: {
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST']
        }
      });
    }
  }

  startListening() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
    this.server.listen(config.PORT, () => {
      if (this.is_production)
        console.log(`production server running at http://localhost:${config.PORT}`);
      else
        console.log(`development server running at http://localhost:${config.PORT}`);
    });
  }
}


const socketServer = new SocketServer();
socketServer.startListening();