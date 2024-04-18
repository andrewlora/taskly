import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import { errorHandler } from "./libs/middleware.js";
import userRouter from "./routes/user.route.js";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/v1/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
