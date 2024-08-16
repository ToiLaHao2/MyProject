require("dotenv").config();
const express = require("express");
const { connectDb } = require("./configs/db.js");

const app = express();
const port = process.env.PORT;



app.listen(port, function () {
  connectDb();
  console.log("Your app running on port " + port);
});
