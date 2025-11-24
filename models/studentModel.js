const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  age: Number
});

module.exports = mongoose.model("Student", StudentSchema);