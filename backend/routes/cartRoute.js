import express from 'express';
import { createCart, getAllCarts, getCartById, deleteCart } from '../controller/cart.js';

const router = express.Router();

router.post('/create', createCart);
router.get('/', getAllCarts);
router.get('/:id', getCartById);
router.delete('/delete/:id', deleteCart);

export default router;
