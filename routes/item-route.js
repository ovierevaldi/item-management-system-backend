import express from 'express';
import ItemController from '../controllers/item-controller.js';

const router = express.Router();

router.post('/', ItemController.createItem);

router.get('/', ItemController.showItems);

router.get('/:id', ItemController.getItem);

router.patch('/:id', ItemController.updateItem)

router.delete('/:id', ItemController.deleteItem)

export default router;