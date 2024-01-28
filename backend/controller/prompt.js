import { Prompt } from "../models/promptSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

// Controller function to create a new Prompt
export const createPrompt = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "admin") {
    return next(new ErrorHandler("You are not allowed to sell prompts", 400));
  }

  const { title, description, type, price, prompt, engine, tipsToUse } =
    req.body;
  if (!title || !description || !type || !price || !prompt || !engine) {
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
      uploadedBy,
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Prompt created successfully",
        newPrompt,
      });
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

export const getAllPrompts = catchAsyncError(async (req, res, next) => {
  const prompts = await Prompt.find();
  res.status(200).json({
    success: true,
    prompts,
  });
});

export const getMyPrompts = catchAsyncError(async (req, res, next) => {
  const prompts = await Prompt.find({ uploadedBy: req.user._id });
  res.status(200).json({
    success: true,
    prompts,
  });
});

export const updatePrompt = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "admin") {
    return next(new ErrorHandler("You are not allowed to sell prompts", 400));
  }
  const {id} = req.params;
  let prompt = await Prompt.findById(id);
  if (!prompt) {
    return next(new ErrorHandler("Oops! Prompt not found", 404));
  }
  if (prompt.uploadedBy.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("You are not authorized to update this prompt", 401));
  }
  prompt = await Prompt.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Prompt updated successfully",
    prompt,
  });
});

export const deletePrompt = catchAsyncError(async (req, res, next) => {
  const {id} = req.params;
  let prompt = await Prompt.findById(id);
  if (!prompt) {
    return next(new ErrorHandler("Oops! Prompt not found", 404));
  }
  if (prompt.uploadedBy.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("You are not authorized to delete this prompt", 401));
  }
  await prompt.deleteOne();
  res.status(200).json({
    success: true,
    message: "Prompt deleted successfully",
  });
});