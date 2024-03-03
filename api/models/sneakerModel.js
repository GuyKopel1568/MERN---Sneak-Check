import mongoose from 'mongoose';

const sneakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    usSize: {
      type: Number,
      required: true,
    },
    euSize: {
      type: Number,
      required: true,
    },
    ukSize: {
      type: Number,
      required: true,
    },
    condition: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    trade: {
      type: Boolean,
      required: true,
    },
    homeDelivery: {
      type: String,
      enum: ['yes', 'no'],
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Sneaker = mongoose.model('Sneaker', sneakerSchema);
export default Sneaker;
