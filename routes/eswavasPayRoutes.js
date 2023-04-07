import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { collectionsRequestToPay } from "../controllers/eswavasController.js";

const router = express.Router();

router
  .route("/collections/requestToPay")
  .post(protect, collectionsRequestToPay);

export default router;
