import express from 'express';
import itemCategory from '../configs/config.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({categories: itemCategory.list, count: itemCategory.list.length});
})

export default router;