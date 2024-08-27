const User = require("../models/User");

async function InviteFriend(req, res) {
  const requestInvite = req.body;
  const user = await User.findById(requestInvite.friend_id);

}

async function AcceptFriend(req, res) {}

async function RejectFriend(req, res) {}

async function BlockFriend(req, res) {}

async function GetFriendList(req, res) {}

async function GetFriendListRequest(req, res) {}

async function GetFriendProfile(req, res) {}

async function GetFriendPhoto(req, res) {}

async function EditProfile(req, res) {}

async function GetProfile(req, res) {}

async function UpdateAvatar(req, res) {}

module.exports = {
  InviteFriend,
  AcceptFriend,
  RejectFriend,
  BlockFriend,
  GetFriendList,
  GetFriendListRequest,
  GetFriendProfile,
  GetFriendPhoto,
  EditProfile,
  GetProfile,
  UpdateAvatar,
};
