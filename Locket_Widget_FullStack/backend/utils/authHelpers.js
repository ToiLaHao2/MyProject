const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function HashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Hashing password failed");
  }
}

async function CompareHashPassword(password, hashedPassword) {
  try {
    const compare = bcrypt.compare(password, hashedPassword);
    return compare;
  } catch (error) {
    throw new Error("Comparing password failed");
  }
}

async function CreateToken(id) {
  try {
    const token = jwt.sign({ id: id }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: "1y",
    });
    return token;
  } catch (error) {
    console.log("Token create failed:", err.message);
    return null;
  }
}

async function VerifiedToken(token) {
  if (!token) {
    console.log("No token provided");
    return null;
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    return verified;
  } catch (err) {
    console.log("Token is invalid:", err.message);
    return null;
  }
}

module.exports = {
  HashPassword,
  CompareHashPassword,
  CreateToken,
  VerifiedToken,
};
