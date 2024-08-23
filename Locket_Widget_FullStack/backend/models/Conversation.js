const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  conversation_id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true,
  },
  user1_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user2_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("Conversation", ConversationSchema);
