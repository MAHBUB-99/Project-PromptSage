import mongoose from "mongoose";
import validator from "validator";

//  If you want to handle file uploads in your application, you might want to look into using a file upload library or middleware to manage file storage and retrieval. Popular choices include multer for Express.js applications.

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Prompt Name!"],
    minLength: [6, "Prompt Title Must Be Longer Than 6 Characters!"],
    maxLength: [40, "Prompt Title Cannot Exceed 40 Characters!"],
  },
  prompt: {
    type: String,
    required: [true, "Please Enter Your Prompt!"],
    minLength: [10, "Prompt Must Be Longer Than 10 Characters!"],
  },
  // created by a user (username)
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide the user who uploaded this prompt!"],
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Prompt = mongoose.model("Prompt", promptSchema);
