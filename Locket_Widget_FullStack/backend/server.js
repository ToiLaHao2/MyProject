const express = require("express");
const { connectDb } = require("./configs/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoute.js");
const { userRouter } = require("./routes/userRoute.js");
const { photoRouter } = require("./routes/photoRoute.js");
const { messageRouter } = require("./routes/messageRoute.js");
const { albumRouter } = require("./routes/albumnRoute.js");
const { conversationRouter } = require("./routes/conversationRoute.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/photo", photoRouter);
app.use("/api/message", messageRouter);
app.use("/api/album", albumRouter);
app.use("/api/conversation", conversationRouter);

//Connect db
connectDb();

app.listen(port, function () {
  console.log("Your app running on port " + port);
});
