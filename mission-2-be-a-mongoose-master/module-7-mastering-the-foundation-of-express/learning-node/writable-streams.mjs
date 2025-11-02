import fs from 'fs';

const writeStream = fs.createWriteStream('./texts/output-file.txt');

writeStream.write('Line 1\n');
writeStream.write('Line 2\n');
writeStream.write('Line 3\n');

writeStream.end(); // Close stream

writeStream.on('finish', () => {
  console.log('✅ All data written');
});

writeStream.on('error', (error) => {
  console.error('❌ Error writing:', error);
});
