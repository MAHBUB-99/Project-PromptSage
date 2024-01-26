import { User } from "../models/userSchema.js";
import ErrorHandler from "../error/error.js";

// Controller function to create a new user
export const createUser = async (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User created successfully", newUser });
    // console.log(newUser._id);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );
      return next(new ErrorHandler(messages.join(", "), 400));
    }
    return next(error);
  }
};

// // Controller function to get all users
// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Controller function to get a specific user by ID
// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.status(200).json(user);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Controller function to update a specific user by ID
// const updateUserById = async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//         });
//         if (!updatedUser) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.status(200).json(updatedUser);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Controller function to delete a specific user by ID
// const deleteUserById = async (req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id);
//         if (!deletedUser) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.status(200).json({ message: 'User deleted successfully' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     createUser,
//     getUsers,
//     getUserById,
//     updateUserById,
//     deleteUserById,
// };
