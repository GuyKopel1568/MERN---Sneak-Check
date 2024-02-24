import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    photo: {
      type: String,
      default: 'client/src/assets/img/profileImg.jpg',
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);
export default User;
