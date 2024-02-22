import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
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
      default:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0bsMye285e0qmhP5IVkM-Q&ust=1708716178184000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiT-PfVv4QDFQAAAAAdAAAAABAE',
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);
export default User;
