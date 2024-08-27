const { validationRules } = require("../utils/validateRules");
const { VerifiedToken } = require("../utils/authHelpers");
const { getTokenFromHeaders } = require("../utils/getToken");

async function validateRegister(req, res, next) {
    const userRegist = req.body;
    const rules = validationRules["register"];
    for (const field of rules.requiredFields) {
        if (!userRegist[field]) {
            return res.status(400).json({ error: `Something is missing` });
        }
    }
    if (userRegist.checkMessage === rules.checkMessage) {
        if (rules.minLength) {
            for (const [field, minLen] of Object.entries(rules.minLength)) {
                if (userRegist[field] && userRegist[field].length < minLen) {
                    return res.status(400).json({
                        error: `${field} needed at least ${minLen} characters`
                    });
                }
            }
        }
        if (rules.regex) {
            for (const [field, pattern] of Object.entries(rules.regex)) {
                if (userRegist[field] && !pattern.test(userRegist[field])) {
                    return res
                        .status(400)
                        .json({ error: `${field} is not fit` });
                }
            }
        }
    }
    next();
}

async function validateLogin(req, res, next) {
    const userLogin = req.body;
    const rules = validationRules["login"];
    for (const field of rules.requiredFields) {
        if (!userLogin[field]) {
            return res.status(400).json({ error: `Something is missing` });
        }
    }
    if (userLogin.checkMessage === rules.checkMessage) {
        next();
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
}

async function validationChangePassword(req, res, next) {
    const token = await getTokenFromHeaders(req);
    const checkToken = await VerifiedToken(token);
    if (!checkToken) {
        return res.status(401).json({ error: "Invalid token" });
    }
    const userRequestChangePassword = req.body;
    const rules = validationRules["changePassword"];
    for (const field of rules.requiredFields) {
        if (!userRequestChangePassword[field]) {
            return res.status(400).json({ error: `Something is missing` });
        }
    }
    if (userRequestChangePassword.checkMessage === rules.checkMessage) {
        next();
    } else {
        return res.status(400).json({ error: "Invalid credentials" });
    }
}

module.exports = { validateRegister, validateLogin, validationChangePassword };
