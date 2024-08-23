const express = require("express");
const {
  CreateMessage,
  GetMessage,
  UpdateMessage,
} = require("../controllers/messageController");
const { DeleteMessage } = require("../controllers/conversationController");
const messageRouter = express.Router();

messageRouter.post("/createMessage", CreateMessage);
messageRouter.post("/getMessage", GetMessage);
messageRouter.post("/updateMessage", UpdateMessage);
messageRouter.post("/deleteMessage", DeleteMessage);

module.exports = { messageRouter };
