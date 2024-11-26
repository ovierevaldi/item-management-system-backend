import express from 'express';
import POSController from '../../controllers/pos-controller.js'

const router = express.Router();

/**
 * @swagger
 * /api/pos/reports:
 *   get:
 *     summary: Retrieve all transactions
 *     description: Retrieves a list of all transactions along with item details such as category and price.
 *     tags:
 *       - Transactions
 *     responses:
 *       200:
 *         description: A list of transactions along with item details.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier of the transaction.
 *                   jumlah_item:
 *                     type: integer
 *                     description: The number of items in the transaction.
 *                   total_harga:
 *                     type: integer
 *                     description: The total price of the transaction.
 *                   item_data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: Unique identifier of the item.
 *                         kategori:
 *                           type: string
 *                           description: Category of the item.
 *                         harga:
 *                           type: integer
 *                           description: Price of the item.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time when the transaction was created.
 *               example:
 *                 - id: 1
 *                   jumlah_item: 3
 *                   total_harga: 450
 *                   item_data:
 *                     - id: 101
 *                       kategori: "Electronics"
 *                       harga: 150
 *                     - id: 102
 *                       kategori: "Electronics"
 *                       harga: 150
 *                     - id: 103
 *                       kategori: "Accessories"
 *                       harga: 150
 *                   createdAt: "2024-11-25T12:34:56Z"
 *                 - id: 2
 *                   jumlah_item: 2
 *                   total_harga: 300
 *                   item_data:
 *                     - id: 201
 *                       kategori: "Home Appliances"
 *                       harga: 150
 *                   createdAt: "2024-11-26T08:15:43Z"
 *       400:
 *         description: Error retrieving the transactions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot get transactions"
 */
router.get('/', POSController.findAll);

export default router;