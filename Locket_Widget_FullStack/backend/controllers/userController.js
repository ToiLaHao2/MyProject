const User = require("../models/User");

async function InviteFriend(req, res) {
  const requestInvite = req.body;
  const user = await User.findById(requestInvite.user_id);
  const friend = await User.findById(requestInvite.friend_id);
  if (!user || !friend) {
    res.status(404).json({ error: "user or friend not found" });
  }
  try {
    friend.friends.push({
      user_id: requestInvite.user_id,
    });
    await friend.save();
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while inviting the friend" });
    console.log("error with inviting friends:" + error);
  }
}

async function AcceptFriend(req, res) {}

async function RejectFriend(req, res) {}

async function BlockFriend(req, res) {}

async function GetFriendList(req, res) {}

async function GetFriendListRequest(req, res) {}

async function GetFriendProfile(req, res) {}

async function GetFriendPhotos(req, res) {}

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
  GetFriendPhotos,
  EditProfile,
  GetProfile,
  UpdateAvatar,
};
