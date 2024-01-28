import express from "express";
import { createUser, login, logout } from "../controller/user.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

// POST /users
router.post("/create", createUser);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);

// GET /users
// router.get('/users', (req, res) => {
//     // Logic to fetch all users from the database
//     // ...
//     res.send('Get all users');
// });

// // GET /users/:id
// router.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     // Logic to fetch a specific user from the database based on the userId
//     // ...
//     res.send(`Get user with id ${userId}`);
// });

// PUT /users/:id
// router.put('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     // Logic to update a specific user in the database based on the userId
//     // ...
//     res.send(`Update user with id ${userId}`);
// });

// // DELETE /users/:id
// router.delete('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     // Logic to delete a specific user from the database based on the userId
//     // ...
//     res.send(`Delete user with id ${userId}`);
// });

// module.exports = router;
export default router;
