const express = require('express');
const { getUser, getUserOne, setUser, editUser } = require('../controllers/user.controller');

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserOne);
router.post("/", setUser);
router.put("/:id", editUser);

module.exports = router;