import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

const successMessage = `File written successfully`;

// Asynchronous version
const content = `Hello, World!, Async!\n`;
const filePath = `./texts/write.txt`;

fs.writeFile(filePath, content, { flag: 'a+' }, (err) => {
  if (err) return console.error(err);
  console.log(successMessage);
});

// Synchronous version
try {
  const content = `Hello, World!, Sync!\n`;
  const filePath = `./texts/write-sync.txt`;

  fs.writeFileSync(filePath, content, { flag: 'a+' });
  console.log(successMessage);
} catch (err) {
  console.error(err);
}

// Promise-based version
async function example() {
  try {
    const content = `Hello, World!, Promise!\n`;
    const filePath = `./texts/write-promise.txt`;

    await fsPromise.writeFile(filePath, content, { flag: 'a+' });
    console.log(successMessage);
  } catch (err) {
    console.error(err);
  }
}

example();

// NOTE: By default, this API will replace the contents of the file if it does already exist.
