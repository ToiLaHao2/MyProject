const jwt = require("jsonwebtoken");

async function validateRegister(req, res, next) {
  const { user_name, user_email, user_password } = req.body;

  // Kiểm tra username
  if (!user_name || user_name.length < 3) {
    return res
      .status(400)
      .json({ message: "Username must be at least 3 characters long" });
  }

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!user_email || !emailRegex.test(user_email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Kiểm tra password
  if (!user_password || user_password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  // Nếu tất cả các kiểm tra đều vượt qua, tiếp tục
  next();
}

module.exports = { validateRegister };
