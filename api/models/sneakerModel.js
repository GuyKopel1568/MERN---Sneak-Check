import mongoose from 'mongoose';

const sneakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Sneaker name is required.'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required.'],
    },
    gender: {
      type: String,
      enum: ['male', 'female','youth', 'other'],
      required: [true, 'Gender is required.'],
    },
    euSize: {
      type: Number,
      required: [true, 'EU size is required.'],
    },
    condition: {
      type: Number,
      min: [1, 'Condition must be at least 1.'],
      max: [10, 'Condition cannot be greater than 10.'],
      required: [true, 'Condition is required.'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
    },
    discountPrice: {
      type: Number,
      required: [true, 'Discount price is required.'],
    },
    trade: {
      type: Boolean,
      required: [true, 'Trade option is required.'],
    },
    homeDelivery: {
      type: String,
      enum: ['yes', 'no'],
      required: [true, 'Home delivery option is required.'],
    },
    images: {
      type: Array,
      required: [true, 'Images are required.'],
    },
    category: {
      type: String,
      required: [true, 'Category is required.'],
    },
    address: {
      type: String,
      required: [true, 'Address is required.'],
    },
  },
  { timestamps: true },
);

const Sneaker = mongoose.model('Sneaker', sneakerSchema);
export default Sneaker;
