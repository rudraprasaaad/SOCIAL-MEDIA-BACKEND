import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      newUser,
      message: "User has been successfully registered",
    });
  } catch (err) {
    res
      .status(500)
      .json({ err, message: "Error occured while creating user." });
  }
};
