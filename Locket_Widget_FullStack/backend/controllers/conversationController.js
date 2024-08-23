const Conversation = require("../models/Conversation.js");

async function CreateConversation(req, res) {}

async function GetAllConversationByUserId(req, res) {}

async function GetConversation(req, res) {}

async function UpdateConversation(req, res) {}

async function DeleteConversation(req, res) {}

async function AddMessage(req, res) {}

async function DeleteMessage(req, res) {}

module.exports = {
  CreateConversation,
  GetAllConversationByUserId,
  GetConversation,
  UpdateConversation,
  DeleteConversation,
  AddMessage,
  DeleteMessage,
};
