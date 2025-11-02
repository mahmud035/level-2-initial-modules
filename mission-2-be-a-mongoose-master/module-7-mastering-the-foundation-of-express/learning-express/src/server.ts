import type { Server } from 'http';
import app from './app.js';

const port = 5000;

let server: Server;

async function startServer() {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

startServer();
