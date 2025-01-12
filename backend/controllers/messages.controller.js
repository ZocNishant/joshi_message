import Messages from "../models/messages.model.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Messages.find();
    res.status(200).json({ data: messages });
  } catch (error) {
    console.log(error.messages);
    res.status(500).json({ messages: "Server Error." });
  }
};

export const createMessage = async (req, res) => {
  const newMessage = new Messages(req.body);
  try {
    await newMessage.save();
    res.status(201).json({ data: newMessage });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ messages: "Server Error." });
  }
};
