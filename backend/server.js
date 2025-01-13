import express from "express";
import connectDB from "./config/db.config.js";
import cors from "cors";
import router from "./routes/messages.route.js";
import Pusher from "pusher";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 3333;

const pusher = new Pusher({
  appId: "1924997",
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: "ap2",
  useTLS: true,
});

// Middleware
app.use(express.json());
app.use(cors());
app.use("/messages", router);

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagingmessages");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType == "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error Triggering Pusher.");
    }
  });
});

// Listener
app.listen(port, () => {
  connectDB();
  console.log(`Server started in port ${port}.`);
});
