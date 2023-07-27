const express = require('express');
const multer = require('multer');
const path = require("path");
const { getRevues, setRevues, editRevue, deleteRevue, getRevuesOne, setRevuesPost, removeRevuesPost, updateRevuesPost, uploadReviewImg } = require("../controllers/revue.contoller");


const router = express.Router();

// Revue routes
router.get("/", getRevues);
router.get("/:id", getRevuesOne);
router.post("/", setRevues);
router.patch("/post/:id", setRevuesPost);
router.patch("/remove-post/:id/:idPost", removeRevuesPost);
router.patch("/update-post/:id/:idPost", updateRevuesPost);
router.put("/:id", editRevue);
router.delete("/:id", deleteRevue);

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 8000000000
    }
})
router.post("/upload/:id/:idPost", upload.single('profile'), uploadReviewImg)

module.exports = router;