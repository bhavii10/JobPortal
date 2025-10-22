import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { FaBriefcase, FaUserFriends, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Analytics.css";

export default function Analytics() {
  // Example data (replace with API fetch)
  const jobsData = [
    { name: "Frontend Dev", applicants: 45 },
    { name: "Backend Dev", applicants: 30 },
    { name: "MERN Stack", applicants: 60 },
    { name: "UI/UX", applicants: 20 },
  ];

  const statusData = [
    { name: "Accepted", value: 50 },
    { name: "Rejected", value: 30 },
    { name: "Pending", value: 40 },
  ];

  const COLORS = ["#16a34a", "#ff3d3d", "#6b21a8"];

  const summaryStats = [
    { title: "Total Jobs", value: 12, icon: <FaBriefcase /> },
    { title: "Total Applicants", value: 120, icon: <FaUserFriends /> },
    { title: "Accepted", value: 50, icon: <FaCheckCircle /> },
    { title: "Rejected", value: 30, icon: <FaTimesCircle /> },
  ];

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">📊 Employer Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        {summaryStats.map((stat, index) => (
          <div key={index} className="summary-card">
            <div className="icon">{stat.icon}</div>
            <div className="details">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-wrapper">
        <div className="chart-box">
          <h3>Total Applicants per Job</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applicants" fill="#6b21a8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Applications Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
