import mongoose, { mongo } from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected.");
  } catch (err) {
    console.log(err);
  }
};
