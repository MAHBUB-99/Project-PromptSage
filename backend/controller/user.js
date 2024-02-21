import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { sendToken } from "../utils/jwtToken.js";

/**
 * Controller function to create a new user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<void>} - Promise representing the operation completion
 */
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



/**
 * Controller function to authenticate user login
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<void>} - Promise representing the operation completion
 */
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

/**
 * Controller function to log out a user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {void}
 */
export const logout = catchAsyncError(async (req, res, next) => {
  res.status(201).cookie("token", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  }).json({
    success: true,
    message: "Logged out",
  });
});


/**
 * Controller function to get current user details
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<void>} - Promise representing the operation completion
 */
export const currentUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});


/**
 * Controller function to add a bought prompt to user's profile
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<void>} - Promise representing the operation completion
 */
export const addBoughtPrompt = catchAsyncError(async (req, res, next) => {
  const { boughtBy, promptId } = req.body;
  const user = await User.findById(boughtBy);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  user.boughtPrompts.push(promptId);
  await user.save();
  res.status(201).json({
    success: true,
    message: "Prompt successfully added to user's bought prompts",
  });
});

export const getUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  
  res.status(200).json({
    success: true,
    data: user
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
