const express = require("express");
const {
  CreateAlbum,
  GetAlbum,
  UpdateAlbum,
  DeleteAlbum,
  AddPhotoToAlbum,
  ChangePhotoInAlbum,
} = require("../controllers/albumController");

const albumRouter = express.Router();

albumRouter.post("/createAlbumn", CreateAlbum);
albumRouter.post("/getAlbum", GetAlbum);
albumRouter.post("/updateAlbum", UpdateAlbum);
albumRouter.post("/deleteAlbum", DeleteAlbum);
albumRouter.post("/addPhotoToAlbum", AddPhotoToAlbum);
albumRouter.post("/deletePhotoInAlbum", DeleteAlbum);
albumRouter.post("/changePhotoInAlbum", ChangePhotoInAlbum);

module.exports = { albumRouter };
