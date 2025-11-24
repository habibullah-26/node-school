const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model("Subject", SubjectSchema);