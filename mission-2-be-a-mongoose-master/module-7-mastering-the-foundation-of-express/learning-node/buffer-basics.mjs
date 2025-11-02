// 1. Create buffer from string
const buf1 = Buffer.from('Hello World', 'utf8');
console.log(buf1); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log(buf1.toString()); // 'Hello World'

// 2. Create empty buffer (10 bytes)
const buf2 = Buffer.alloc(10);
console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3. Create buffer from array of bytes
const buf3 = Buffer.from([72, 101, 108, 108, 111]); // ASCII codes
console.log(buf3.toString()); // 'Hello'

// 4. Write to buffer
const buf4 = Buffer.alloc(20);
buf4.write('Node.js', 'utf8');
console.log(buf4.toString()); // 'Node.js'

// 5. Buffer length
console.log(buf1.length); // 11 bytes

// 6. Concatenate buffers
const buf5 = Buffer.concat([buf1, buf3]);
console.log(buf5.toString()); // 'Hello WorldHello'
