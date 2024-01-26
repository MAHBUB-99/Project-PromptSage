import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Username!"],
    minLength: [4, "Your Username Must Be Longer Than 4 Characters!"],
    maxLength: [20, "Your Username Cannot Exceed 20 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email!"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email Address!"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password!"],
  },
  // avatar: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  //   required: false,
  // },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
