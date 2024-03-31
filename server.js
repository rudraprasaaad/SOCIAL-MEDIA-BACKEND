import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { dbConnect } from "./dbConnect/dbConnect.js";
import routes from "./routes/routes.js";

dotenv.config();
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(routes);
app.listen(PORT, () => {
  console.log("server is running");
  dbConnect();
});
