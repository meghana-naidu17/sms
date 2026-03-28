import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const adminUser = {
    name: "Admin User",
    role: "admin",
  
  };

  return (
    <div className="admin-layout">
      <Navbar user={adminUser} />
      <div className="admin-main">
        <Sidebar role="admin" />
        <div className="admin-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Admin;