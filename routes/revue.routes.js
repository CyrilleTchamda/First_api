const express = require("express");
const { getRevues, setRevues, editRevue, deleteRevue, getRevuesOne, setRevuesPost, removeRevuesPost, updateRevuesPost } = require("../controllers/revue.contoller");


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


module.exports = router;