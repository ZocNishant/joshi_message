import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Messages from "./dbMessages.js";
import dotenv from "dotenv";
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 3333;
const mongoURI = process.env.MONGO_URI;

// DB Config
const connectDB = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Mongodb Connected.");
  } catch (error) {
    console.log(error.message);
  }
};

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.get("/messages/new", async (req, res) => {
  try {
    Messages.find();
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/messages/new", async (req, res) => {
  try {
    const dbMessage = await req.body;
    dbMessage.save();
  } catch (error) {
    console.log(error.message);
  }
});

// Listener
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
