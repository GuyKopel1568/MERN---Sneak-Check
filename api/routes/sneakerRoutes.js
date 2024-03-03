import express from 'express';
import { createSneaker } from '../controllers/SneakerController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createSneaker);

export default router;
