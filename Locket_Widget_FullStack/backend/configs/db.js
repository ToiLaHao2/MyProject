const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo Db connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error connect to MongoDb : ${err.message}`);
    process.exit(1);
  }
};

module.exports = { connectDb };
