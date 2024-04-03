import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      data,
      message: "User has been successfully registered",
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const loggedInUser = await loginUser(req.body);

    const { password, ...data } = loggedInUser._doc;
    res.status(200).json({ data, message: "User logged successfully" });
  } catch (err) {
    res.status(404).json({ err, message: "Error occured loggin user" });
    console.log(err);
  }
};
