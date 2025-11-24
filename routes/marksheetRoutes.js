const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { addMark, top10Students } = require("../controllers/marksheetController");

router.post("/createsheet", auth, addMark);
router.get("/top10", auth, top10Students);

module.exports = router;