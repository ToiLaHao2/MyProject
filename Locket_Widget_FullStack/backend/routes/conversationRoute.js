const express = require("express");
const {
  CreateConversation,
  GetAllConversationByUserId,
  GetConversation,
  UpdateConversation,
  DeleteConversation,
  AddMessage,
  DeleteMessage,
} = require("../controllers/conversationController");
const conversationRouter = express.Router();

conversationRouter.post("/createConversation", CreateConversation);
conversationRouter.post(
  "/getAllConversationByUserId",
  GetAllConversationByUserId
);
conversationRouter.post("/getConversation", GetConversation);
conversationRouter.post("/updateConversation", UpdateConversation);
conversationRouter.post("/deleteConversation", DeleteConversation);
conversationRouter.post("/addMessage", AddMessage);
conversationRouter.post("/deleteMessage", DeleteMessage);

module.exports = { conversationRouter };
