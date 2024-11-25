import express from 'express';
import POSController from '../../controllers/pos-controller.js';

const router = express.Router();

router.get('/:id', POSController.findOne);

router.post('/', POSController.createTransaction);

export default router;

