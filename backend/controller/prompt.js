import { Prompt } from "../models/promptSchema.js";
import ErrorHandler from "../error/error.js";

// Controller function to create a new Prompt
export const createPrompt = async (req, res, next) => {
  if (!req.body.title || !req.body.prompt || !req.body.uploadedBy) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  try {
    const newPrompt = await Prompt.create(req.body);
    res.status(201).json({ message: "Prompt created successfully", newPrompt });
    // console.log(newPrompt._id);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );
      return next(new ErrorHandler(messages.join(", "), 400));
    }
    return next(error);
  }
};