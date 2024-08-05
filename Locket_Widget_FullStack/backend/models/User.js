const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_phone: {
        type: String,
        required: true,
    },
    user_dOb: {
        type: Date,
    },
    user_password: {
        type: String,
        required: true,
    },
    created_At: {
        type: Date,
        defaul: Date.now,
    },
    created_By: {
        type: String,
        ref: "User",
    },
    updated_At: {
        type: Date,
    },
    updated_By: {
        type: String,
        ref: "User",
    },
    friends: [
        {
            user_id: {
                type: String,
                ref: "User",
            },
            status: {
                type: String,
                enum: ["pending", "accepted", "declined"],
                default: "pending",
            },
            created_at: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

module.exports = mongoose.model("User", UserSchema);
