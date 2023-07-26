const express = require("express");
const { getTv, getTvOne, setTv, setTvlink, removeTvLink, deleteTv, editTv } = require("../controllers/tv.contoller");


const router = express.Router();

// Revue routes
router.get("/", getTv);
router.get("/:id", getTvOne);
router.post("/", setTv);
router.put("/:id", editTv);
router.delete("/:id", deleteTv);
router.patch("/link/:id", setTvlink);
router.patch("/remove-link/:id", removeTvLink);


module.exports = router;