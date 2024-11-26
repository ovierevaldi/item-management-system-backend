import express from 'express';
import POSController from '../../controllers/pos-controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/pos/transactions/{id}:
 *   get:
 *     summary: Get a transaction by ID
 *     description: Retrieves a transaction by its unique identifier (ID) along with related item details.
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the transaction.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single transaction with item details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the transaction.
 *                 jumlah_item:
 *                   type: integer
 *                   description: The number of items in the transaction.
 *                 total_harga:
 *                   type: integer
 *                   description: The total price of the transaction.
 *                 item_data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Unique identifier of the item.
 *                       kategori:
 *                         type: string
 *                         description: Category of the item.
 *                       harga:
 *                         type: integer
 *                         description: Price of the item.
 *                   description: A list of items in the transaction.
 *               example:
 *                 id: 1
 *                 jumlah_item: 3
 *                 total_harga: 450
 *                 item_data:
 *                   - id: 101
 *                     kategori: "Electronics"
 *                     harga: 150
 *                   - id: 102
 *                     kategori: "Electronics"
 *                     harga: 150
 *                   - id: 103
 *                     kategori: "Accessories"
 *                     harga: 150
 *       404:
 *         description: Transaction not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Transaction not found"
 *       400:
 *         description: Error retrieving the transaction.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot get transaction with id: 1"
 */
router.get('/:id', POSController.findOne);

/**
 * @swagger
 * /api/pos/transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: Creates a new transaction by validating the item stock and calculating the total price based on the quantity of items purchased.
 *     tags:
 *       - Transactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The unique identifier of the item being purchased.
 *               jumlah_item:
 *                 type: integer
 *                 description: The number of items being purchased.
 *             required:
 *               - id
 *               - jumlah_item
 *           example:
 *             id: 1
 *             jumlah_item: 3
 *     responses:
 *       200:
 *         description: Transaction successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success Input Transaction."
 *                 ref:
 *                   type: integer
 *                   description: The reference ID of the newly created transaction.
 *                   example: 123
 *       400:
 *         description: Error with the provided transaction data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Stok habis"
 *       404:
 *         description: Item not found in the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not found"
 *       409:
 *         description: The requested quantity exceeds the available stock.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Pembelian melebihi stok."
 */
router.post('/', POSController.createTransaction);

export default router;

