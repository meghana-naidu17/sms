import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h2>Admin Panel</h2>

        <nav className="admin-breadcrumbs">
          <Link to="/admin">Dashboard</Link>
          {pathnames.slice(1).map((value, index) => {
            const to = `/${pathnames.slice(0, index + 2).join("/")}`;
            return (
              <span key={index}>
                {" / "}
                <Link to={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>

      <div className="admin-header-right">
        <span>Welcome, Admin User</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default AdminHeader;