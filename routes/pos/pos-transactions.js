import express from 'express';
import POSController from '../../controllers/pos-controller.js';

const router = express.Router();

router.post('/', (req, res) => {});

router.get('/', POSController.find);

export default router;

