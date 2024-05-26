import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import UserRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/auth", UserRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

connectDB();
