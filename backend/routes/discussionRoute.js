import express from "express";
import { createDiscussion, getDiscussionByTopic } from "../controller/discussion.js";

const router = express.Router();

router.post("/create", createDiscussion);
router.get("/:topic", getDiscussionByTopic);

export default router;
