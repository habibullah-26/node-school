const Subject = require("../models/subjectModel");

exports.createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSubjects = async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
};