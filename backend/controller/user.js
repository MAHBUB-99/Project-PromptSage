import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { sendToken } from "../utils/jwtToken.js";

// Controller function to create a new user
export const createUser = catchAsyncError(async (req, res, next) => {
  const { username, email, password, role } = req.body;
  if (!req.body.username || !req.body.email || !req.body.password) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  try {
    const existingUsersCount = await User.countDocuments();
    const userRole = existingUsersCount === 0 ? "admin" : role || "user";
    const newUser = await User.create({
      username,
      email,
      password,
      role: userRole,
    });
    sendToken(newUser, 201, res, "User Registered successfully");
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
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!req.body.email || !req.body.password) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res, "Login Successful");
});

export const logout = catchAsyncError(async (req, res, next) => {
  res.status(201).cookie("token", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  }).json({
    success: true,
    message: "Logged out",
  });
});

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
