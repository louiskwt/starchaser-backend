import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello StarChaser ⭐️");
});

app.listen(PORT, () => {
  console.log(`Server is running...`);
});
