import fs from 'fs';

// Create readable stream
const readStream = fs.createReadStream('./texts/large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024, // 64KB chunks (default: 16KB)
});

// Listen to events
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length, 'bytes');
  // Process chunk
});

readStream.on('end', () => {
  console.log('✅ Finished reading file');
});

readStream.on('error', (error) => {
  console.error('❌ Error reading file:', error);
});

// Pause/resume control
readStream.pause();
setTimeout(() => {
  readStream.resume();
}, 1000);
