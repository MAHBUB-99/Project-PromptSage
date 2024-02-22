import { Transaction } from '../models/transactionSchema.js';

// Create a new transaction
export const createTransaction = async (req, res) => {
    try {
        const { user, prompt, amount } = req.body;
        const transaction = await Transaction.create({ user, prompt, amount });
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all transactions
export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get transaction by ID
export const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findById(id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
