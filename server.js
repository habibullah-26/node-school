const express = require("express");
require('dotenv').config();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");


const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const marksheetRoutes = require("./routes/marksheetRoutes");
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/marksheets", marksheetRoutes);

// Error Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));