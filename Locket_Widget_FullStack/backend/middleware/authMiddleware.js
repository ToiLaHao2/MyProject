const jwt = require("jsonwebtoken");

async function validateRegister(req, res, next) {
  const { username, email, password } = req.body;

  // Kiểm tra username
  if (!username || username.length < 3) {
    return res
      .status(400)
      .json({ message: "Username must be at least 3 characters long" });
  }

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Kiểm tra password
  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  // Nếu tất cả các kiểm tra đều vượt qua, tiếp tục
  next();
}

module.exports = { validateRegister };
