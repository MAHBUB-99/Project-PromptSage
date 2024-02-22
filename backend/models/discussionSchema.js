import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
    postContent: {
        type: String,
        required: true,
        minlength: [5, 'Post content must be at least 5 characters long'],
        maxlength: [1000, 'Post content cannot exceed 1000 characters']
    },
    // // image: String,
    // upvotes: {
    //     type: Number,
    //     default: 0 
    // },
    // downvotes: { 
    //     type: Number, 
    //     default: 0 
    // },
    comments: [{
        // commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: {
            type: String,
            required: true,
            minlength: [2, 'Comment content must be at least 2 characters long'],
            maxlength: [100, 'Comment content cannot exceed 100 characters']
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }],
    // uploadedBy: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     // required: [true, "Please provide the user who uploaded this prompt!"],
    //   },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

export const Discussion = mongoose.model('Discussion', discussionSchema);
