import express from "express";
import { createUser, login, logout, currentUser, addBoughtPrompt, getUser, getUsersForChatSidebar } from "../controller/user.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/chats", isAuthorized, getUsersForChatSidebar);
router.get("/current", isAuthorized, currentUser);
router.post("/create", createUser);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);
router.post("/buy", addBoughtPrompt);
router.get("/:id", getUser);

export default router;
