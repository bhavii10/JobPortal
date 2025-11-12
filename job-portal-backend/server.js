
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const multer = require("multer");

// const app = express();

// const uploadsDir = path.join(__dirname, "uploads");
// const resumesDir = path.join(uploadsDir, "resumes");

// if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
// if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);


// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));


// app.use(
//   cors({
//     origin: "http://localhost:3000", // React frontend
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());


// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, resumesDir),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /pdf|doc|docx/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowed.test(ext)) cb(null, true);
//   else cb(new Error("Only PDF, DOC, DOCX files allowed"));
// };

// const upload = multer({ storage, fileFilter });


// const authRoutes = require("./routes/auth");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationsRouter = require("./routes/applications");
// const resumeRoutes = require("./routes/resumeRoutes");
// const notificationRoutes = require("./routes/notifications");



// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });


// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationsRouter);
// app.use("/api/resumes", resumeRoutes);
// app.use("/api/notifications", notificationRoutes);


// app.use((err, req, res, next) => {
//   console.error("🔥 Global error handler:", err.stack);
//   res
//     .status(500)
//     .json({ message: "Something broke on the server!", error: err.message });
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// 14th OCT

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const multer = require("multer");

// const app = express();

// // Create uploads directories if they don't exist
// const uploadsDir = path.join(__dirname, "uploads");
// const resumesDir = path.join(uploadsDir, "resumes");

// if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
// if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // React frontend
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// // Serve uploaded files statically
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Multer config for resumes
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, resumesDir),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /pdf|doc|docx/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowed.test(ext)) cb(null, true);
//   else cb(new Error("Only PDF, DOC, DOCX files allowed"));
// };

// const upload = multer({ storage, fileFilter });

// // Routes
// const authRoutes = require("./routes/auth");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationsRouter = require("./routes/applications");
// const resumeRoutes = require("./routes/resumeRoutes");
// const notificationRoutes = require("./routes/notifications");
// const analyticsRoutes = require("./routes/analyticsRoutes"); // ✅ New analytics route

// // Test endpoint
// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });

// // Use routes
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationsRouter);
// app.use("/api/resumes", resumeRoutes);
// app.use("/api/notifications", notificationRoutes);
// app.use("/api/employer/analytics", analyticsRoutes); // ✅ Use analytics route

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error("🔥 Global error handler:", err.stack);
//   res
//     .status(500)
//     .json({ message: "Something broke on the server!", error: err.message });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






//11nov

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();

// =========================
// 📁 Create Upload Directories
// =========================
const uploadsDir = path.join(__dirname, "uploads");
const resumesDir = path.join(uploadsDir, "resumes");

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(resumesDir)) fs.mkdirSync(resumesDir);

// =========================
// 🌐 MongoDB Connection
// =========================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// =========================
// ⚙️ Middleware Setup
// =========================
app.use(
  cors({
    origin: "http://localhost:3000", // your React frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =========================
// 📄 Multer Configuration
// =========================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, resumesDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /pdf|doc|docx/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext)) cb(null, true);
  else cb(new Error("Only PDF, DOC, or DOCX files are allowed"));
};

const upload = multer({ storage, fileFilter });

// =========================
// 🛣️ Routes Import
// =========================
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobRoutes");
const applicationsRouter = require("./routes/applications");
const resumeRoutes = require("./routes/resumeRoutes");
const notificationRoutes = require("./routes/notifications");
const analyticsRoutes = require("./routes/analyticsRoutes"); // ✅ renamed to match actual file name

// =========================
// 🚀 Test Endpoint
// =========================
app.get("/", (req, res) => {
  res.send("🚀 API is running successfully!");
});

// =========================
// 🔗 Register Routes
// =========================
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationsRouter);
app.use("/api/resumes", resumeRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/analytics", analyticsRoutes); // ✅ analytics route mounted directly

// =========================
// ⚠️ Global Error Handler
// =========================
app.use((err, req, res, next) => {
  console.error("🔥 Global error handler:", err.stack);
  res.status(500).json({
    message: "Something broke on the server!",
    error: err.message,
  });
});

// =========================
// 🏁 Start Server
// =========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));