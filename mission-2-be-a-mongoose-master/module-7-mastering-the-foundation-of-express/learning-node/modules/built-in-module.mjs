import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import url from 'node:url';
import util from 'node:util';

// Important Node.js built-in modules
console.log('OS module =>', os);
console.log('Path module =>', path);
console.log('File System module (Async) =>', fsPromises);
console.log('File System module (Sync) =>', fs);
console.log('HTTP module =>', http);
console.log('URL module =>', url);
console.log('Utility module =>', util);
