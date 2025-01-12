import express from "express";
import connectDB from "./config/db.config.js";
import cors from "cors";
import router from "./routes/messages.route.js";
import dotenv from "dotenv";
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 3333;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/messages", router);

// Listener
app.listen(port, () => {
  connectDB();
  console.log(`Server started in port ${port}.`);
});
