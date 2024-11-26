import express from 'express';
import ItemController from '../controllers/item-controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Items
 *     description: Endpoints related to Item DB
 */

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     description: Creates a new item using the provided data. Validates the input and handles duplicate or invalid entries.
 *     tags:
 *       - Items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 description: Name of the item (unique).
 *               harga:
 *                 type: integer
 *                 description: Price of the item.
 *               stok:
 *                 type: integer
 *                 description: Stock quantity of the item.
 *               kategori:
 *                 type: string
 *                 description: Category of the item.
 *               url_gambar:
 *                 type: string
 *                 description: URL of the item image.
 *             required:
 *               - nama
 *               - harga
 *               - stok
 *               - kategori
 *               - url_gambar
 *             example:
 *               nama: "Example Item"
 *               harga: 100
 *               stok: 50
 *               kategori: "Electronics"
 *               url_gambar: "https://example.com/item-image.jpg"
 *     responses:
 *       200:
 *         description: Item successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success Creating Item"
 *       400:
 *         description: Invalid input data or other creation issues.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid Data Provided"
 *       403:
 *         description: Duplicate field detected.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Duplicated field Item. nama already exists"
 *       500:
 *         description: Unexpected error during item creation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot Create Items"
 */
router.post('/', ItemController.createItem);

/**
 * @swagger
 * /api/items/stock:
 *   get:
 *     summary: Get item stock information
 *     description: Retrieves a list of items with their stock information, including whether they are in stock or out of stock.
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: A list of items with stock information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier of the item.
 *                   nama:
 *                     type: string
 *                     description: Name of the item.
 *                   stok:
 *                     type: integer
 *                     description: Stock quantity of the item.
 *                   harga:
 *                     type: integer
 *                     description: Price of the item.
 *                   onStock:
 *                     type: boolean
 *                     description: Indicates if the item is in stock.
 *                 example:
 *                   id: 1
 *                   nama: "Example Item"
 *                   stok: 50
 *                   harga: 100
 *                   onStock: true
 *       400:
 *         description: Error retrieving the items.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot Show Items"
 */
router.get('/stock', ItemController.getStock);

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     description: Retrieves a list of all items from the database.
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: A list of items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier of the item.
 *                   nama:
 *                     type: string
 *                     description: Name of the item.
 *                   harga:
 *                     type: integer
 *                     description: Price of the item.
 *                   stok:
 *                     type: integer
 *                     description: Stock quantity of the item.
 *                   kategori:
 *                     type: string
 *                     description: Category of the item.
 *                   url_gambar:
 *                     type: string
 *                     description: URL of the item image.
 *                 example:
 *                   id: 1
 *                   nama: "Example Item"
 *                   harga: 100
 *                   stok: 50
 *                   kategori: "Electronics"
 *                   url_gambar: "https://example.com/item-image.jpg"
 *       400:
 *         description: Error retrieving the items.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot Show Items"
 */
router.get('/', ItemController.showItems);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get an item by ID
 *     description: Retrieves a single item by its unique identifier (ID).
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the item.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single item.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the item.
 *                 nama:
 *                   type: string
 *                   description: Name of the item.
 *                 harga:
 *                   type: integer
 *                   description: Price of the item.
 *                 stok:
 *                   type: integer
 *                   description: Stock quantity of the item.
 *                 kategori:
 *                   type: string
 *                   description: Category of the item.
 *                 url_gambar:
 *                   type: string
 *                   description: URL of the item image.
 *               example:
 *                 id: 1
 *                 nama: "Example Item"
 *                 harga: 100
 *                 stok: 50
 *                 kategori: "Electronics"
 *                 url_gambar: "https://example.com/item-image.jpg"
 *       404:
 *         description: Item not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not exist"
 *       400:
 *         description: Error retrieving the item.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot get Item with id: 1"
 */
router.get('/:id', ItemController.getItem);

/**
 * @swagger
 * /api/items{id}:
 *   patch:
 *     summary: Update an item by ID
 *     description: Updates the details of an item using the provided data. The `id` field is excluded from updates.
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the item to be updated.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 description: The name of the item.
 *               harga:
 *                 type: integer
 *                 description: The price of the item.
 *               stok:
 *                 type: integer
 *                 description: The stock quantity of the item.
 *               kategori:
 *                 type: string
 *                 description: The category of the item.
 *               url_gambar:
 *                 type: string
 *                 description: The URL of the item image.
 *             example:
 *               nama: "Updated Example Item"
 *               harga: 150
 *               stok: 100
 *               kategori: "Home Appliances"
 *               url_gambar: "https://example.com/updated-item-image.jpg"
 *     responses:
 *       200:
 *         description: Item successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success update data"
 *                 new_item:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The unique identifier of the updated item.
 *                     nama:
 *                       type: string
 *                       description: The name of the updated item.
 *                     harga:
 *                       type: integer
 *                       description: The updated price of the item.
 *                     stok:
 *                       type: integer
 *                       description: The updated stock quantity of the item.
 *                     kategori:
 *                       type: string
 *                       description: The updated category of the item.
 *                     url_gambar:
 *                       type: string
 *                       description: The updated URL of the item image.
 *                   example:
 *                     id: 1
 *                     nama: "Updated Example Item"
 *                     harga: 150
 *                     stok: 100
 *                     kategori: "Home Appliances"
 *                     url_gambar: "https://example.com/updated-item-image.jpg"
 *       404:
 *         description: Item not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not exist"
 *       400:
 *         description: Error updating the item or invalid data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Record not found for the provided condition."
 *       500:
 *         description: Unexpected error during the update process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot get Item with id: 1"
 */
router.patch('/:id', ItemController.updateItem)

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Delete an item by ID
 *     description: Deletes an item by its unique identifier (ID).
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the item to be deleted.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Delete Item Success"
 *       404:
 *         description: Item not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not exist"
 *       400:
 *         description: Error deleting the item.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot get Item with id: 1"
 */
router.delete('/:id', ItemController.deleteItem);


export default router;