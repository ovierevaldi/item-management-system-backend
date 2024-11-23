import express from 'express';
import AuthController from '../controllers/auth-controller.js';
import { passportProvider } from '../middleware/passport-strategy.js';

const router = express.Router();

router.post('/', passportProvider.signIn)

export default router;