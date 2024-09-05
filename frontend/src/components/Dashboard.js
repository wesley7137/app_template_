import React, { useState, useEffect } from "react";
import { api, getAuthToken } from "../utils/api";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await api.fetch("/dashboard", {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        });
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDashboardData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render dashboard data here */}
    </div>
  );
};

export default Dashboard;
