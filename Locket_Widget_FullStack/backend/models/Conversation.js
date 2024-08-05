const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    conversation_id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true,
    },
    user1_id: {
        type: String,
        required: true,
    },
    user2_id: {
        type: String,
        required: true,
    },
    messages: [
        {
            type: String,
            ref: "Message",
        },
    ],
});

module.exports = mongoose.model("Conversation", ConversationSchema);
