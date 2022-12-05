import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { DB_URL, PORT } from "./config";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello StarChaser ⭐️");
});

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running...`);
});
