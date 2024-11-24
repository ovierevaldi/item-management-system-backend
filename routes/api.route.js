import express from 'express';

import authRouter from './auth.route.js';
import itemRouter from './item-route.js';
import posRouter from './pos/pos-route.js';
import userRouter from './user-route.js';


const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/item', itemRouter);
router.use('/pos', posRouter);


export default router;