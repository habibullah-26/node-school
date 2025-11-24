const Marksheet = require("../models/marksheetModel");

exports.addMark = async (req, res) => {
  try {
    const { subjects } = req.body;
    const totalMarks = subjects.reduce((acc, subject) => acc + subject.marks, 0);
    const averageMarks = totalMarks / subjects.length;

    const mark = await Marksheet.create({ ...req.body, totalMarks, averageMarks });
    res.status(201).json(mark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.top10Students = async (req, res) => {
  try {
    const topStudents = await Marksheet.aggregate([
      {
        $group: {
          _id: "$student",
          subjects: { $first: "$subjects" },
          totalMarks: { $first: "$totalMarks" },
          averageMarks: { $first: "$averageMarks" }
        }
      },
      { $sort: { totalMarks: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: "students",
          localField: "_id",
          foreignField: "_id",
          as: "studentInfo"
        }
      },
      {
        $unwind: "$studentInfo"
      },
      {
        $project: {
          _id: 0,
          studentId: "$_id",
          studentName: "$studentInfo.name",
          subjects: 1,
          totalMarks: 1,
          averageMarks: 1
        }
      }
    ]);
    res.json(topStudents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};