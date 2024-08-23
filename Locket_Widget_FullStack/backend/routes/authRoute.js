const express = require("express");
const { validateRegister } = require("../middleware/authMiddleware");
const {
  Register,
  Login,
  ChangePassword,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", validateRegister, Register);
authRouter.post("/login", Login);
// authRouter.post("/logout");
// authRouter.post("/profile");
authRouter.post("/changePassword", ChangePassword);

module.exports = authRouter;
