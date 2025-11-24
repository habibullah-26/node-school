const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createStudent, getStudents } = require("../controllers/studentController");

router.post("/", auth, createStudent);
router.get("/", auth, getStudents);

module.exports = router;