import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config({ path: 'config.env' });

console.log(process.env.DATABASE_URL);
console.log(process.env.DATABASE_PASS);

// ENTER THE DB PASSWORD
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

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Define routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
