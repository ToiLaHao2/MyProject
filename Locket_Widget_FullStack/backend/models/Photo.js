const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo_url: {
    type: String,
    required: true,
  },
  photo_caption: {
    type: String,
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

module.exports = mongoose.model("Photo", PhotoSchema);
