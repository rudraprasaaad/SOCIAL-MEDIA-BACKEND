import UserModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new UserModel({
      username: "rudra",
      email: "rudra@gmail.com",
      password: "rudrar232",
    });

    await newUser.save();

    res.status(200).json({
      newUser,
      message: "User has been successfully registered",
    });
  } catch (err) {
    res
      .status(500)
      .json({ Error: err, message: "Error occured while creating user" });
  }
};
