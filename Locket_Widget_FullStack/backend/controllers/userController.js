const User = require("../models/User");

async function InviteFriend(req, res) {
  const requestInvite = req.body;
  console.log(requestInvite.user_id);
  console.log(requestInvite.friend_id);
  const user = await User.findById(requestInvite.user_id);
  const friend = await User.findById(requestInvite.friend_id);
  if (!user || !friend) {
    return res.status(404).json({ error: "user or friend not found" });
  }
  try {
    user.friends.push({
      user_id: requestInvite.friend_id,
      status: "WAITING",
    });
    friend.friends.push({
      user_id: requestInvite.user_id,
    });
    await friend.save();
    await user.save();
    return res.status(200).json("Invite friend successful");
  } catch (error) {
    console.log("error with inviting friends:" + error);
    return res
      .status(500)
      .json({ error: "An error occurred while inviting the friend" });
  }
}

async function AcceptFriend(req, res) {
  const requestAcceptInvitation = req.body;
  const user = await User.findById(requestAcceptInvitation.user_id);
  const friend = await User.findById(requestAcceptInvitation.friend_id);
  if (!user || !friend) {
    return res.status(404).json({ error: "user or friend not found" });
  }
  try {
    const userFriendIndex = user.friends.findIndex(
      (f) => f.user_id.toString() === requestAcceptInvitation.friend_id
    );
    const friendUserIndex = friend.friends.findIndex(
      (f) => f.user_id.toString() === requestAcceptInvitation.user_id
    );
    user.friends[userFriendIndex].status = "ACCEPTED";
    friend.friends[friendUserIndex].status = "ACCEPTED";
    await user.save();
    await friend.save();
    return res.status(200).json({ message: "Successful accept" });
  } catch (error) {
    console.log("error with accepting friends:" + error);
    return res
      .status(500)
      .json({ error: "An error occurred while inviting the friend" });
  }
}

async function RejectFriend(req, res) {
  const requestRejectInvitation = req.body;
  const user = await User.findById(requestRejectInvitation.user_id);
  const friend = await User.findById(requestRejectInvitation.friend_id);
  if (!user || !friend) {
    return res.status(404).json({ error: "user or friend not found" });
  }
  try {
    const userFriendIndex = user.friends.findIndex(
      (f) => f.user_id.toString() === requestRejectInvitation.friend_id
    );
    const friendUserIndex = friend.friends.findIndex(
      (f) => f.user_id.toString() === requestRejectInvitation.user_id
    );
    if (userFriendIndex > -1) {
      user.friends.splice(userFriendIndex, 1);
    }
    if (friendUserIndex > -1) {
      friend.friends.splice(friendUserIndex, 1);
    }
    await user.save();
    await friend.save();
    return res.status(200).json({ message: "Successful rejected friend" });
  } catch (error) {
    console.log("error with rejecting friends:" + error);
    return res
      .status(500)
      .json({ error: "An error occurred while rejecting the friend" });
  }
}

async function BlockFriend(req, res) {}

async function GetFriendList(req, res) {
  const requestGetFriendList = req.body;
  const user = await User.findById(requestGetFriendList.user_id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  try {
    const listFriend = user.friends.filter(
      (friend) => friend.status === "ACCEPTED"
    );
    return res.status(200).json(listFriend);
  } catch (error) {
    console.log("error with get friend list " + error);
    res.status(500).json({ error: "server error" });
  }
}

async function GetFriendListRequest(req, res) {
  const requestGetFriendListReq = req.body;
  const user = await User.findById(requestGetFriendListReq.user_id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  try {
    const listFriendInvite = user.friends.filter(
      (friend) => friend.status === "PENDING"
    );
    return res.status(200).json(listFriend);
  } catch (error) {
    console.log("error with get friend invite list " + error);
    res.status(500).json({ error: "server error" });
  }
}

async function GetFriendProfile(req, res) {}

async function GetFriendPhotos(req, res) {}

async function EditProfile(req, res) {}

async function GetProfile(req, res) {
  const requestGetProfile = req.body;
  const user = await User.findById(requestGetProfile.user_id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  } else {
    return res.status(200).json({ message: "get profile success", data: user });
  }
}

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
