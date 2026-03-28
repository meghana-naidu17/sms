import React from "react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
const About = () => {
  return (
    <div className="about-page">
      <TopBar />
      <Header />
      <h1>About Our System</h1>
      <p>
        The College Management System is designed to simplify academic
        administration by integrating student, faculty, and admin workflows.
      </p>

      <h2>Our Mission</h2>
      <p>
        To provide a centralized digital platform that enhances transparency,
        efficiency, and collaboration within educational institutions.
      </p>

      <h2>Core Features</h2>
      <ul>
        <li>Role-Based Access Control</li>
        <li>Dashboard Analytics</li>
        <li>Exam & Course Management</li>
        <li>Student Performance Tracking</li>
      </ul>
    </div>
  );
};

export default About;