import express from 'express';
import ItemController from '../controllers/item-controller.js';

const router = express.Router();

router.post('/', ItemController.createItem);

router.get('/', ItemController.showItems);

router.patch('/', ItemController.updateItem)

router.delete('/', ItemController.deleteItem)

export default router;