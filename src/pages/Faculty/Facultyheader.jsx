import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyHeader = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="faculty-header">
      <div className="faculty-header-left">
        <h2>Faculty Dashboard</h2>
        <p>Welcome, {user?.name}</p>
      </div>

      <div className="faculty-header-right">
        <img src={user?.avatar} alt="avatar" />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default FacultyHeader;