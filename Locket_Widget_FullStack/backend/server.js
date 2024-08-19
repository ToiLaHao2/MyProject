const express = require("express");
const { connectDb } = require("./configs/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/api/auth", authRouter);

//Connect db
connectDb();

app.listen(port, function () {
  console.log("Your app running on port " + port);
});
