import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    res.status(200).json({
      newUser,
      message: "User has been successfully registered",
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {};
