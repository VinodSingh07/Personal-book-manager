import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
