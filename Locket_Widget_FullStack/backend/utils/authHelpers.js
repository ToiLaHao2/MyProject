const bcrypt = require("bcrypt");

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

module.exports = { HashPassword, CompareHashPassword };
