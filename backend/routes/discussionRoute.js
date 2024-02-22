import express from "express";
import {
    createDiscussion,
    deleteDiscussion,
    getAllDiscussions,
    getDiscussionById,
    upvoteDiscussion,
    downvoteDiscussion,
    updateDiscussion
} from "../controller/discussion.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

// Route to create a new discussion
router.post("/create", isAuthorized, createDiscussion);

// Route to get all discussions
router.get("/all-discussions", getAllDiscussions);

// Route to get a discussion by its ID
router.get("/:id", getDiscussionById);

// Route to update a discussion
router.put("/update/:id", isAuthorized, updateDiscussion);

// Route to delete a discussion
router.delete("/delete/:id", isAuthorized, deleteDiscussion);

// Route to upvote a discussion
router.post("/upvote/:id", isAuthorized, upvoteDiscussion);

// Route to downvote a discussion
router.post("/downvote/:id", isAuthorized, downvoteDiscussion);

export default router;
