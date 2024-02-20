import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const port = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});