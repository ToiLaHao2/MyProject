const express = require("express");
const {
  UploadPhoto,
  EditPhoto,
  DeletePhoto,
  GetPhotosByAlbum,
  GetPhoto,
} = require("../controllers/photoController");
const photoRouter = express.Router();

photoRouter.post("/uploadPhoto", UploadPhoto);
// photoRouter.post("/editPhoto", EditPhoto);
photoRouter.post("/deletePhoto", DeletePhoto);
photoRouter.post("/getPhoto", GetPhoto);
photoRouter.post("/getPhotosByAlbum", GetPhotosByAlbum);

module.exports = { photoRouter };
