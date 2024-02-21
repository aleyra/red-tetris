import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import config from './config.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(config.DIR_PATH));

app.get('/', (req, res) => {
  res.sendFile(config.FILE_PATH);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(config.PORT, () => {
  console.log(`server running at http://localhost:${config.PORT}`);
});