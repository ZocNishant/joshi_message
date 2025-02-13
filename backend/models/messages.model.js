import mongoose from "mongoose";

// Message Model
const dbMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  received: {
    type: Boolean,
    required: true,
  },
});

const Messages = mongoose.model("Messages", dbMessageSchema);

export default Messages;
