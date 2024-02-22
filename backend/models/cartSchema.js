import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    prompt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prompt',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Cart = mongoose.model('Cart', cartSchema);
