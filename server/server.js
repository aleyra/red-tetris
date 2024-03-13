import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import config from './config.js';

if (config.NODE_ENV == 'production') {
  const app = express();
  app.use(express.static(config.DIR_PATH));
  app.get('/', (req, res) => {
    res.sendFile(config.FILE_PATH);
  });

  const server = createServer(app);
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  server.listen(config.PORT, () => {
    console.log(`production server running at http://localhost:${config.PORT}`);
  });
}
else if (config.NODE_ENV == 'development') {
  const server = createServer();
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  server.listen(config.PORT, () => {
    console.log(`development server running at http://localhost:${config.PORT}`);
  });
}
else {
  console.log('Error: NODE_ENV not set');
}
