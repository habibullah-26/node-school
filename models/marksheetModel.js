const mongoose = require("mongoose");

const MarksheetSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subjects: [{
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    marks: Number
  }],
  totalMarks: Number,
  averageMarks: Number
});

module.exports = mongoose.model("Marksheet", MarksheetSchema);