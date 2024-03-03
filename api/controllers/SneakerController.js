import Sneaker from '../models/sneakerModel.js';

export const createSneaker = async (req, res, next) => {
  try {
    const sneaker = await Sneaker.create(req.body);
    return res.status(201).json(sneaker);
  } catch (error) {
    next(error);
  }
};
