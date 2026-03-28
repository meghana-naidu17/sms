import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNotifications([
      { id: 1, message: "New update available" },
      { id: 2, message: "Exam schedule released" },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    if (onLogout) onLogout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <h2 onClick={() => navigate("/")}>🎓 College Portal</h2>
      </div>

      {/* CENTER */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search courses, exams..."
          className="search-bar"
        />
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        {/* Notifications */}
        <div className="notification">
          🔔
          <span className="badge">{notifications.length}</span>
        </div>

        {/* Profile */}
        <div
          className="profile-section"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={user?.avatar || "https://via.placeholder.com/40"}
            alt="profile"
          />
          <span>{user?.name || "User"}</span>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link
              to={`/${user?.role}/profile`}
              className={isActive(`/${user?.role}/profile`) ? "active" : ""}
            >
              My Profile
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;