import express from 'express';
import {
  register,
  signin,
  google,
  signout,
} from '../controllers/authController.js';
const router = express.Router();

router.post('/register', register);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;
