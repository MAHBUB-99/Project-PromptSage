import { Discussion } from "../models/discussionSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

// Controller function to create a new discussion
export const createDiscussion = catchAsyncError(async (req, res, next) => {
    const { title, content } = req.body;

    // Check if title and content are provided
    if (!title || !content) {
        return next(new ErrorHandler("Please provide title and content", 400));
    }

    // Create new discussion
    const newDiscussion = await Discussion.create({
        title,
        content,
        user: req.user._id // Assuming user is authenticated and user ID is available in request
    });

    res.status(201).json({
        success: true,
        message: "Discussion created successfully",
        newDiscussion,
    });
});

// Controller function to get all discussions
export const getAllDiscussions = catchAsyncError(async (req, res, next) => {
    const discussions = await Discussion.find();
    res.status(200).json({
        success: true,
        discussions,
    });
});

// Controller function to get a discussion by its ID
export const getDiscussionById = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const discussion = await Discussion.findById(id);
    if (!discussion) {
        return next(new ErrorHandler("Discussion not found", 404));
    }
    res.status(200).json({
        success: true,
        discussion,
    });
});

// Controller function to update a discussion
export const updateDiscussion = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    let discussion = await Discussion.findById(id);
    if (!discussion) {
        return next(new ErrorHandler("Discussion not found", 404));
    }
    // Check if the user updating the discussion is the owner of the discussion
    if (discussion.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler("You are not authorized to update this discussion", 401));
    }
    discussion = await Discussion.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        message: "Discussion updated successfully",
        discussion,
    });
});

// Controller function to delete a discussion
export const deleteDiscussion = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const discussion = await Discussion.findById(id);
    if (!discussion) {
        return next(new ErrorHandler("Discussion not found", 404));
    }
    // Check if the user deleting the discussion is the owner of the discussion
    if (discussion.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler("You are not authorized to delete this discussion", 401));
    }
    await discussion.deleteOne();
    res.status(200).json({
        success: true,
        message: "Discussion deleted successfully",
    });
});

// Controller function to upvote a discussion
export const upvoteDiscussion = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    let discussion = await Discussion.findById(id);
    if (!discussion) {
        return next(new ErrorHandler("Discussion not found", 404));
    }
    discussion.upvotes += 1;
    await discussion.save();
    res.status(200).json({
        success: true,
        message: "Discussion upvoted successfully",
        discussion,
    });
});

// Controller function to downvote a discussion
export const downvoteDiscussion = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    let discussion = await Discussion.findById(id);
    if (!discussion) {
        return next(new ErrorHandler("Discussion not found", 404));
    }
    discussion.downvotes += 1;
    await discussion.save();
    res.status(200).json({
        success: true,
        message: "Discussion downvoted successfully",
        discussion,
    });
});
