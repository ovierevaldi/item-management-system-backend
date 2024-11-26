import express from 'express';
import AuthController from '../controllers/auth-controller.js';
import { passportProvider } from '../middleware/passport-strategy.js';

const router = express.Router();
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Endpoints related to Authentication
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Sign In Method for User Authentication
 *     description: Give the user access with access token and data if the credentials valid. Otherwise reject it
 *     tags: 
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Sign In SuccessFully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                 access_token:
 *                   type: string
 *               example:
 *                 user:
 *                   username: "admin"
 *                 access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzMyNTk1ODczLCJleHAiOjE3MzI1OTY3NzN9.quv6xo70OcquUv1DSvh6lE46SZPe0xSb5dvCcllP2AE"
 *       401:
 *         description: Invalid Credentials. Either Username or Password is wrong.
 *       404:
 *         description: User Not Found. Means User doesn't exist in database table.
 */
router.post('/', passportProvider.signIn)

export default router;