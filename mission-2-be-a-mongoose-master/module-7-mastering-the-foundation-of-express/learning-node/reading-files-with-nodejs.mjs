import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

// Asynchronous version
const filePath = `./texts/read.txt`;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// Synchronous version
try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// Promise-based version
try {
  const data = await fsPromise.readFile(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// NOTE: All three of `fs.readFile()`, `fs.readFileSync()` and `fsPromises.readFile()` read the full content of the file in memory before returning the data.
