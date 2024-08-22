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
    const token = jwt.sign({ id: id }, process.env.API_KEY, {
      expiresIn: "1y",
    });
    return token;
  } catch (error) {
    throw new Error("Token creation failed");
  }
}

async function VerifiedToken(token) {
  try {
    const verified = jwt.verify(token, process.env.API_KEY);
    return verified;
  } catch (err) {
    throw new Error("Invalid token");
  }
}

module.exports = {
  HashPassword,
  CompareHashPassword,
  CreateToken,
  VerifiedToken,
};
