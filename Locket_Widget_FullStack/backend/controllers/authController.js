const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { HashPassword, CompareHashPassword } = require("../utils/authHelpers");

async function Register(req, res) {
  const userRegist = req.body;
  try {
    let user = User.findOne({ user_name: userRegist.user_name });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = HashPassword(userRegist.user_password);
    user = new User({
      user_name: userRegist.user_name,
      user_email: userRegist.user_email,
      user_phone: userRegist.userPhone,
      user_dOb: userRegist.dOb,
      user_password: hashedPassword,
      created_At: Date.now,
    });
    await user.save();
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json({ message: "Server error" });
  }
}

async function Login(req, res) {
  const userLogin = req.body;
  try {
    let user = await User.findOne({ user_name: userLogin.user_name });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isValidPassword = await CompareHashPassword(
      userLogin.user_password,
      user.user_password
    );
    if (isValidPassword) {
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { Register, Login };
