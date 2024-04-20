import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import fileUpload from "express-fileupload";

import { errorHandler } from "./libs/middleware.js";
import authRouter from "./routes/auth.route.js";
import cldRouter from "./routes/cloudinary.route.js";
import userRouter from "./routes/user.route.js";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/image", cldRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
