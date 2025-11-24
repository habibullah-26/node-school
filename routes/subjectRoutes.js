const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createSubject, getSubjects } = require("../controllers/subjectController");

router.post("/", auth, createSubject);
router.get("/", auth, getSubjects);

module.exports = router;