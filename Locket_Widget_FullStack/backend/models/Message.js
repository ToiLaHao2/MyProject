const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message_id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true,
  },
  message_content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    ref: "User",
  },
});

module.exports = mongoose.model("Message", MessageSchema);
