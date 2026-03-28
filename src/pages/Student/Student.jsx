import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import StudentHeader from "./StudentHeader";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const Student = () => {
  const studentUser = {
    name: "Rahul Kumar",
    role: "student",
  
  };

  return (
    <div className="student-layout">
      <Navbar user={studentUser} />
      <div className="student-main">
        <Sidebar role="student" />
        <div className="student-content">
          <StudentHeader />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Student;