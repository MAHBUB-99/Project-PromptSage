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
  description:{
    type: String,
    required: [true, "Please Enter Prompt Description!"],
    minLength: [20, "Prompt Description Must Be Longer Than 20 Characters!"],
    maxLength: [700, "Prompt Description Cannot Exceed 3000 Characters!"],
  },
  type: {
    type: String,
    required: [true, "Please Enter Prompt Type!"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Prompt Price!"],
    default: 0.0,
  },
  prompt: {
    type: String,
    required: [true, "Please Enter Your Prompt!"],
    minLength: [100, "Prompt Must Be Longer Than 10 Characters!"],
    maxLength: [5000, "Prompt Cannot Exceed 5000 Characters!"],
  },
  engine: {
    type: String,
    required: [true, "Please Select Engine!"],
  },
  tipsToUse: {
    type: String,
    required: false,
    minLength: [20, "Tips To Use Must Be Longer Than 20 Characters!"],
    maxLength: [500, "Tips To Use Cannot Exceed 500 Characters!"],
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
