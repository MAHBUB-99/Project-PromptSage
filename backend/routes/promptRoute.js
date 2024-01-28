import { createPrompt, getAllPrompts } from "../controller/prompt.js";
import express from "express";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthorized, createPrompt);
router.get("/getAll", getAllPrompts);

export default router;