const validationRules = {
  //Auth validate
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
  // User validate
  inviteFriendRequest: {
    checkMessage: "Invite friend",
    requiredFields: ["friend_id", "checkMessage"],
  },
  acceptFriendRequest: {
    checkMessage: "Accept friend",
    requiredFields: ["friend_id", "checkMessage"],
  },
  rejectFriendRequest: {
    checkMessage: "Reject friend",
    requiredFields: ["friend_id", "checkMessage"],
  },
  getFriendList: {
    checkMessage: "Get friend list",
    requiredFields: ["checkMessage"],
  },
  getFriendListRequest: {
    checkMessage: "Get friend list request",
    requiredFields: ["checkMessage"],
  },
  getFriendPhotos: {
    checkMessage: "Get friend photos",
    requiredFields: ["friend_id", "checkMessage"],
  },
  editProfile: {
    checkMessage: "Edit profile",
    requiredFields: ["checkMessage"],
  },
  updateAvatar: {
    checkMessage: "update avatar",
    requiredFields: ["checkMessage", "avatar_url"],
  },
  // Photo validate
  uploadPhoto: {
    checkMessage: "Upload photo",
    requiredFields: ["checkMessage", "photo_url"],
  },
  // editPhoto: {
  //   checkMessage: "Edit photo",
  //   requiredFields: ["checkMessage", "photo_id"],
  // },
  deletePhoto: {
    checkMessage: "Delete photo",
    requiredFields: ["checkMessage", "photo_id"],
  },
  getPhoto: {
    checkMessage: "Get Photo",
    requiredFields: ["checkMessage", "photo_id"],
  },
  getPhotosByAlbum: {
    checkMessage: "Get photos by album",
    requiredFields: ["checkMessage", "album_id"],
  },
  // Message validate
  createMessage: {
    checkMessage: "Create message",
    requiredFields: ["checkMessage", "message_text"],
  },
  getMessage: {
    checkMessage: "Get message",
    requiredFields: ["checkMessage", "message_id"],
  },
  // Conversation validate
  getConversation: {
    checkMessage: "Get conversation",
    requiredFields: ["checkMessage", "conversation_id"],
  },
  deleteConversation: {
    checkMessage: "Delete conversation",
    requiredFields: ["checkMessage", "conversation_id"],
  },
  addMessage: {
    checkMessage: "Add message",
    requiredFields: ["checkMessage", "conversation_id", "message_id"],
  },
  deleteMessage: {
    checkMessage: "Delete Message",
    requiredFields: ["checkMessage", "conversation_id", "message_id"],
  },
  // Album validate
  createAlbum: {
    checkMessage: "Create album",
    requiredFields: ["checkMessage"],
  },
  getAlbum: {
    checkMessage: "Get album",
    requiredFields: ["checkMessage", "album_id"],
  },
  updateAlbum: {
    checkMessage: "Update album",
    requiredFields: ["checkMessage", "album_id"],
  },
  deleteAlbum: {
    checkMessage: "Delete album",
    requiredFields: ["checkMessage", "album_id"],
  },
  addPhotoToAlbum: {
    checkMessage: "Add photo to album",
    requiredFields: ["checkMessage", "album_id", "photo_id"],
  },
  deletePhotoInAlbum: {
    checkMessage: "Delete photo in album",
    requiredFields: ["checkMessage", "album_id", "photo_id"],
  },
  changePhotoInAlbum: {
    checkMessage: "Change photo in album",
    requiredFields: ["checkMessage", "album_id", "photo_id", "photo_url"],
  },
};

module.exports = { validationRules };
