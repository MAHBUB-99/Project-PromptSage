import { createPrompt, deletePrompt, getAllPrompts, getMyPrompts, getPromptById, updatePrompt } from "../controller/prompt.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthorized, createPrompt);
router.get("/all-prompts", getAllPrompts);
router.get("/my-prompts", isAuthorized, getMyPrompts);
router.put("/update/:id", isAuthorized, updatePrompt);
router.delete("/delete/:id", isAuthorized, deletePrompt);
router.get("/:id", getPromptById);

export default router;