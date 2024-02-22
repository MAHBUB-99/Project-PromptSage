import mongoose from 'mongoose'; // Import mongoose

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Please provide the user who made this transaction!"],
    },
    prompt: {
        type: mongoose.Schema.ObjectId,
        ref: "Prompt",
        required: [true, "Please provide the prompt this transaction is for!"],
    },
    amount: {
        type: Number,
        required: [true, "Please provide the amount of this transaction!"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
