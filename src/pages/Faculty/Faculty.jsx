import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const Faculty = () => {
  const facultyUser = {
    name: "Dr. Smith",
    role: "faculty",
   
  };

  return (
    <div className="faculty-layout">
      <Navbar user={facultyUser} />
      <div className="faculty-main">
        <Sidebar role="faculty" />
        <div className="faculty-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Faculty;