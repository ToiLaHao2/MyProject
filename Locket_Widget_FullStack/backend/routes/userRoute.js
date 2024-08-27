const express = require("express");
const {
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
    UpdateAvatar
} = require("../controllers/userController");
const {
    validateRequestInviteFriend,
    validateAcceptFriend,
    validateRejectInvite,
    validateGetFriendList
} = require("../middleware/userMiddleware");

const userRouter = express.Router();

userRouter.post("/inviteFriend", validateRequestInviteFriend, InviteFriend);
userRouter.post("/acceptInvite", validateAcceptFriend, AcceptFriend);
userRouter.post("/rejectInvite", validateRejectInvite, RejectFriend);
// userRouter.post("/blockFriend",BlockFriend)
userRouter.post("/getFriendList", validateGetFriendList, GetFriendList);
userRouter.post("/getFriendListReq", GetFriendListRequest);
// userRouter.post("/getFriendProfile", GetFriendProfile);
userRouter.post("/getFriendPhotos", GetFriendPhotos);
userRouter.post("/editProfile", EditProfile);
userRouter.post("/getProfile", GetProfile);
userRouter.post("/updateAvatar", UpdateAvatar);

module.exports = { userRouter };
