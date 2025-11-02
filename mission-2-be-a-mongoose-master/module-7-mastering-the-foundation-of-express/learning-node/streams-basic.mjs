// ❌ BAD: Reading 1GB video file
import fs from 'fs';
import fsPromise from 'fs/promises';

// Loads entire 1GB into RAM! Your server crashes or slows to a crawl
const data = await fsPromise.readFile('large-video-file.mp4');
res.send(data);

// ✅ GOOD: Streaming 1GB video file
const videoStream = fs.createReadStream('large-video-file.mp4');
videoStream.pipe(res); // Sends chunks as they're read

// Uses ~64KB of RAM at a time instead of 1GB

/*
  Types of Streams
  Node.js has 4 types:

  1. Readable Streams - Read data FROM

  File reads: fs.createReadStream()
  HTTP requests: req (incoming request body)
  Process input: process.stdin

  2. Writable Streams - Write data TO

  File writes: fs.createWriteStream()
  HTTP responses: res (outgoing response)
  Process output: process.stdout

  3. Duplex Streams - Both read AND write

  TCP sockets: net.Socket
  WebSockets

  4. Transform Streams - Modify data while streaming

  Compression: zlib.createGzip()
  Encryption
  Data parsing
*/
