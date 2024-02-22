import express from 'express';
import { createTransaction, getAllTransactions, getTransactionById } from '../controller/transaction.js';

const router = express.Router();

router.post('/create', createTransaction);
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);

export default router;
