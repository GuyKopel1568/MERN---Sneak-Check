import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
export const register = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    res.status(500).json(error.message);
  }
};
