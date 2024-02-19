import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: 'config.env' });

console.log(process.env.DATABASE_URL);
console.log(process.env.DATABASE_PASS);

//ENTER THE DB PASSWORD
const DB = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASS,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successfully!!!'))
  .catch((error) => console.error('DB connection error:', error));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
