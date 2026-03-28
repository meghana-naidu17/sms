import React from "react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
const Departments = () => {
  const departments = [
    "Computer Science",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
  ];

  return (
    <>
    <TopBar />
    <Header />
      <h2>Departments</h2>

      <ul>
        {departments.map((dept, index) => (
          <li key={index}>{dept}</li>
        ))}
      </ul>
    </>
  );
};

export default Departments;