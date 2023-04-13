import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  collectionsRequestToPay,
  collectionsGetAccountBalance,
  collectionsGetAccountStatus,
} from "../controllers/eswavasController.js";

const router = express.Router();

router
  .route("/collections/requestToPay")
  .post(protect, collectionsRequestToPay);

router
  .route("/collections/getAccountBalance")
  .get(protect, collectionsGetAccountBalance);

router
  .route("/collections/getMomoAccountStatus")
  .get(protect, collectionsGetAccountStatus);

export default router;
