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
        req.body.user_id = checkToken.id;
        next();
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
}

async function validateAcceptFriend(req, res, next) {
    const token = await getTokenFromHeaders(req);
    const checkToken = await VerifiedToken(token);
    if (!checkToken) {
        return res.status(401).json({ error: "Invalid token" });
    }
    const requestAccept = req.body;
    const rules = validationRules["acceptFriendRequest"];
    for (const field of rules.requiredFields) {
        if (!requestAccept[field]) {
            return res.status(400).json({ error: `Something is missing` });
        }
    }
    if (requestAccept.checkMessage === rules.checkMessage) {
        req.body.user_id = checkToken.id;
        next();
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
}

async function validateRejectInvite(req, res, next) {}

async function validateGetFriendList(req, res, next) {
    const token = await getTokenFromHeaders(req);
    const checkToken = await VerifiedToken(token);
    if (!checkToken) {
        return res.status(401).json({ error: "Invalid token" });
    }
    const requestGetFriendList = req.body;
    const rules = validationRules["getFriendList"];
    for (const field of rules.requiredFields) {
        if (!requestGetFriendList[field]) {
            return res.status(400).json({ error: `Something is missing` });
        }
    }
    if (requestGetFriendList.checkMessage === rules.checkMessage) {
        req.body.user_id = checkToken.id;
        next();
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
}

module.exports = {
    validateRequestInviteFriend,
    validateAcceptFriend,
    validateRejectInvite,
    validateGetFriendList
};
