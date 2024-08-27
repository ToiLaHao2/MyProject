const validationRules = {
  register: {
    checkMessage: "Register new account",
    requiredFields: [
      "user_name",
      "user_password",
      "user_email",
      "user_phone",
      "checkMessage",
    ],
    minLength: {
      user_phone: 10,
      user_name: 3,
      user_password: 6,
    },
    regex: {
      user_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  login: {
    checkMessage: "Login to account",
    requiredFields: ["user_name", "user_password", "checkMessage"],
  },
  changePassword: {
    checkMessage: "Change password",
    requiredFields: [
      "user_name",
      "user_password",
      "last_password",
      "checkMessage",
    ],
    minLength: {
      user_password: 6,
    },
  },
  inviteRequest: {
    checkMessage: "Invite friend",
    requiredFields: ["friend_id", "checkMessage"],
  },
};

module.exports = { validationRules };
