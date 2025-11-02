import { createServer } from 'node:http';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
  // req = Readable stream (incoming request)
  // res = Writable stream (outgoing response)

  console.log(`${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from raw Node.js server!');
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
