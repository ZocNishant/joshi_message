import express from "express";
import {
  getMessages,
  createMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

// get route
router.get("/", getMessages);

// post route
router.post("/", createMessage);

export default router;
