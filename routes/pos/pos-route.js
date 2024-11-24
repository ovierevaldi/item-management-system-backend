import express from 'express';
import posTransactionRoute from './pos-transactions.js';
import posReportRoute from './pos-reports.js';

const router = express.Router();

router.use('/transactions', posTransactionRoute);
router.use('/reports', posReportRoute)

export default router;