import React from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <LeftSidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
