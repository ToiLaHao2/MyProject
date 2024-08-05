const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumnSchema = new Schema({
    albumn_id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    albumn_name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
    },
    albumn_users: [
        {
            user_id: {
                type: String,
            },
            status: {
                type: String,
                enum: ["OWNER", "EDITOR", "VIEWER"],
            },
        },
    ],
    photos: [
        {
            type: String,
            ref: "Photo",
        },
    ],
});

module.exports = mongoose.model("Album", AlbumnSchema);
