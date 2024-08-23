const express = require("express");
const {
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
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/inviteFriend", InviteFriend);
userRouter.post("/acceptInvite", AcceptFriend);
userRouter.post("/rejectInvite", RejectFriend);
// userRouter.post("/blockFriend",BlockFriend)
userRouter.post("/getFriendList", GetFriendList);
userRouter.post("/getFriendListReq", GetFriendListRequest);
userRouter.post("/getFriendProfile", GetFriendProfile);
userRouter.post("/getFriendPhoto", GetFriendPhoto);
userRouter.post("/editProfile", EditProfile);
userRouter.post("/getProfile", GetProfile);
userRouter.post("/updateAvatar", UpdateAvatar);

module.exports = { userRouter };
