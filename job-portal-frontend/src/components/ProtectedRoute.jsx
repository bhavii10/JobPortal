// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, role }) => {
  // If user not logged in, redirect to home/login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Optional: check role
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
