import React from "react";
import { useNavigate } from "react-router-dom";

const StudentHeader = () => {
  const navigate = useNavigate();

  const studentUser = {
    name: "Rahul Kumar",
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <header className="student-header">
      <div className="student-header-left">
        <h2>Student Panel</h2>
      </div>

      <div className="student-header-right">
        <span>Welcome, {studentUser.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default StudentHeader; 