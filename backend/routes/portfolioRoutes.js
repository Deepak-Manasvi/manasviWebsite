import express from "express";
import {
  createPortfolio,
  getAllPortfolios,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";
import multer from "multer";

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Routes for portfolio items
router.post("/create", upload.single("image"), createPortfolio);
router.get("/all", getAllPortfolios);
router.put("/update/:id", upload.single("image"), updatePortfolio);
router.delete("/delete/:id", deletePortfolio);

export default router;
