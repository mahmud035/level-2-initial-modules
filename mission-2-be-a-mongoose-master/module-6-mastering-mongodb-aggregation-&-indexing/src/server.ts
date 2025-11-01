import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;
const colors = require('colors');

//* Database Connection
const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log(`Database Connected`.yellow.italic);

    app.listen(port, () => {
      console.log(`Server Up and Running`.cyan.bold);
    });
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold, error.stack);
  }
};
dbConnect();
