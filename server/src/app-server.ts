import express from 'express';
import { Server as HttpServer, createServer } from 'node:http';
import SocketServer from './socket-server';
import config from './config';
import Room from './room';

export class AppServer {
  private is_production: boolean;
  private readonly httpServer: HttpServer;
  private readonly socketServer: SocketServer;

  private rooms: Room[];

  constructor() {
    if (config.NODE_ENV == 'production') {
      this.is_production = true;
    } else {
      this.is_production = false;
    }

    if (this.is_production) {
      const app: express.Express = express();
      app.use(express.static(config.DIR_PATH));
      app.get('/', (req, res) => {
        res.sendFile(config.FILE_PATH);
      });
      this.httpServer = createServer(app);
    } else {
      this.httpServer = createServer();
    }

    this.socketServer = new SocketServer(this.httpServer, this.is_production);
    this.rooms = [];
  }

  startServer() {
    this.socketServer.startListening();

    this.httpServer.listen(config.PORT, () => {
      if (this.is_production)
        console.log(`production server running at http://localhost:${config.PORT}`);
      else
        console.log(`development server running at http://localhost:${config.PORT}`);
    });
  }
}

export default AppServer;