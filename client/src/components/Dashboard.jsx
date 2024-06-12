import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      axios.get("http://localhost:3000/auth/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.error("Error clearing token cookie:", error);
    }
  };
  return (
    <div className="text-black">
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
