const { VerifiedToken } = require("../utils/authHelpers");
const { getTokenFromHeaders } = require("../utils/getToken");
const { validationRules } = require("../utils/validateRules");

async function validateRequestInviteFriend(req, res, next) {
  const token = await getTokenFromHeaders(req);
  const checkToken = await VerifiedToken(token);
  if (!checkToken) {
    return res.status(401).json({ error: "Invalid token" });
  }
  const requestInvite = req.body;
  const rules = validationRules["inviteFriendRequest"];
  for (const field of rules.requiredFields) {
    if (!requestInvite[field]) {
      return res.status(400).json({ error: `Something is missing` });
    }
  }
  if (requestInvite.checkMessage === rules.checkMessage) {
    req.body.user_id = checkToken.user_id;
    next();
  } else {
    return res.status(400).json({ error: "Invalid credentials" });
  }
}

async function validateAcceptFriend(req, res, next) {}

module.exports = { validateRequestInviteFriend };
