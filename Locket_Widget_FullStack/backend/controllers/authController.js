const User = require("../models/User");
const {
  HashPassword,
  CompareHashPassword,
  CompareHashPassword,
} = require("../utils/authHelpers");

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
      user_phone: userRegist.user_phone,
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

async function ChangePassword(req, res) {
  const userRequest = req.body;
  try {
    let user = User.findOne({ user_name: userRequest.user_name });
    let compareHashPassword = CompareHashPassword(
      userRequest.last_password,
      user.user_password
    );
    if (compareHashPassword) {
      const newHashPassword = HashPassword(userRequest.user_password);
      user.updateOne(
        { user_name: userRequest.user_name },
        { $set: { user_password: newHashPassword } },
        (err, result) => {
          if (err) {
            console.error("Failed:", err);
          } else {
            console.log("Success:", result);
          }
        }
      );
    }
  } catch (error) {}
}

module.exports = { Register, Login, ChangePassword };
