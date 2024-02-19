const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: 'string',
      required: true,
      trim: true,
    },
    lastName: {
      type: 'string',
      required: true,
      trim: true,
    },
    username: {
      type: 'string',
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
      min: 6,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
