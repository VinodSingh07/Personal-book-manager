import express from "express";
import {
  addBook,
  getBooks,
  deleteBook,
} from "../controllers/bookController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addBook);
router.get("/", verifyToken, getBooks);
router.delete("/:id", verifyToken, deleteBook);

export default router;
