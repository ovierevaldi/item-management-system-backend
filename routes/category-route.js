import express from 'express';
import itemCategory from '../configs/config.js';

const router = express.Router();
/**
 * @swagger
 * tags:
 *   - name: Categories
 *     description: Endpoints related to item categories
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Retrieve categories
 *     description: Returns a list of item categories and the total count of categories.
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: A list of categories and the count.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of item categories.
 *                 count:
 *                   type: integer
 *                   description: Total number of categories.
 *               example:
 *                 categories: ["Electronics", "Clothing", "Books"]
 *                 count: 3
 */
router.get('/', (req, res) => {
    res.json({categories: itemCategory.list, count: itemCategory.list.length});
})

export default router;