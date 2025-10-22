const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const Application = require("../models/Application");
const User = require("../models/User");

// GET /api/employer/analytics/:employerId
router.get("/:employerId", async (req, res) => {
  try {
    const employer = await User.findById(req.params.employerId);

    if (!employer) return res.status(404).json({ msg: "Employer not found" });

    if (employer.role !== "employer") {
      return res.status(403).json({ msg: "Access denied: only employers allowed" });
    }

    const jobs = await Job.find({ employerId: req.params.employerId });
    const totalJobs = jobs.length;

    const applications = await Application.find({ jobId: { $in: jobs.map(j => j._id) } });
    const totalApplications = applications.length;

    const accepted = applications.filter(a => a.status === "accepted").length;
    const rejected = applications.filter(a => a.status === "rejected").length;
    const pending = applications.filter(a => a.status === "pending").length;
    const inProgress = applications.filter(a => a.status === "in-progress").length;

    // Applications per job
    const applicationsPerJob = jobs.map(job => ({
      title: job.title,
      count: applications.filter(a => a.jobId.toString() === job._id.toString()).length,
    }));

    res.json({
      totalJobs,
      totalApplications,
      accepted,
      rejected,
      pending,
      inProgress,
      applicationsPerJob,
    });
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
