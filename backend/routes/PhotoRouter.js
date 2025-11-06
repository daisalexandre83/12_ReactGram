const express = require("express");
const router = express.Router();

//Controller
const {insertPhoto,deletePhoto,getAllPhotos} = require("../controllers/PhotoController");

//Middlewares
const {photoInsertValidation} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const {imageUpload} = require("../middlewares/imageUpload");

//Routes
router.post(
"/",
authGuard,
imageUpload.single("image"),
photoInsertValidation(),
validate,
insertPhoto
);
router.delete("/:id",authGuard,deletePhoto);
router.get("/",authGuard,getAllPhotos)

module.exports = router;

 res.status(404).json({id:photo._id,message:"Foto não encontrada!"}); 


