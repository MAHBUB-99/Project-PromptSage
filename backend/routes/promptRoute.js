import { createPrompt } from "../controller/prompt.js";
import express from "express";

const router = express.Router();

router.post("/create", createPrompt);

export default router;