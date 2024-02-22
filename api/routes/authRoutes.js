import express from 'express';
import { register, signin, google } from '../controllers/authController.js';
const router = express.Router();

router.post('/register', register);
router.post('/signin', signin);
router.post('/google', google);

export default router;
