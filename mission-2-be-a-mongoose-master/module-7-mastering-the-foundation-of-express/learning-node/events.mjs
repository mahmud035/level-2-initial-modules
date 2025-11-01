import { EventEmitter } from 'node:events';

const myEmitter = new EventEmitter();

/*
This object exposes, among many others, the `on` and `emit` methods.

- `emit` is used to trigger an event
- `on` is used to add a callback function that's going to be executed when the event is triggered
*/

// First listener
myEmitter.on('event', () => {
  console.log('Hello! first listener');
});

// Second listener
myEmitter.on('event', (param1, param2) => {
  console.log(`event with parameters ${param1}, ${param2} in second listener`);
});

// Third listener
myEmitter.on('event', (...args) => {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Hello! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
