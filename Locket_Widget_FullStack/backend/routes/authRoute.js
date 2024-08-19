const express = require("express");

const authRouter = express.Router();

authRouter.post("/register");
authRouter.post("/login");
authRouter.post("/logout");
authRouter.post("/profile");

module.exports = authRouter;
