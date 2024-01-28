import { Prompt } from "../models/promptSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

// Controller function to create a new Prompt
export const createPrompt = catchAsyncError(async (req, res, next) => {
  const {role} = req.user;
  if(role === "admin") {
    return next(new ErrorHandler("You are not allowed to sell prompts", 400));
  }

  const {title,description,type,price,prompt,engine,tipsToUse} = req.body;
  if (!title || !description || !type ||!price||!prompt||!engine) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  const uploadedBy = req.user._id;
  try {
    const newPrompt = await Prompt.create({
      title,
      description,
      type,
      price,
      prompt,
      engine,
      tipsToUse,
      uploadedBy
    });
    res.status(201).json({ success:true, message: "Prompt created successfully", newPrompt });
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
});

export const getAllPrompts = catchAsyncError(async (req,res,next)=>{
  const prompts = await Prompt.find();
  res.status(200).json({
    success: true,
    prompts,
  });
});