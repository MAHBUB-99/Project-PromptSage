import { Cart } from '../models/cartSchema.js';

// Create a new cart
export const createCart = async (req, res) => {
    try {
        const { prompt, userId } = req.body;
        const cart = await Cart.create({ prompt, userId });
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all carts
export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get cart by ID
export const getCartById = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findById(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a cart by ID
export const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByIdAndDelete(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
