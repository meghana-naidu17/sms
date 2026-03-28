import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Manage Students", path: "/admin/manage-students" },
      { name: "Manage Faculty", path: "/admin/manage-faculty" },
      { name: "Departments", path: "/departments" },
    ],
    faculty: [
      { name: "Dashboard", path: "/faculty" },
      { name: "My Students", path: "/faculty/mapped-students" },
      { name: "Schedule", path: "/faculty/schedule" },
      { name: "Performance", path: "/faculty/performance" },
    ],
    student: [
      { name: "Dashboard", path: "/student" },
      { name: "Schedule", path: "/student/schedule" },
      { name: "Results", path: "/student/results" },
      { name: "Exams", path: "/student/exams" },
      { name: "Register", path: "/student/register" },
  { name: "Mapped Faculty", path: "/student/faculty" },
  { name: "Profile", path: "/student/profile" },
    ],
  };

  return (
    <aside className="sidebar">
      <ul>
        {menuItems[role]?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;