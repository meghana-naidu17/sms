import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <nav className="breadcrumbs">
        <Link to="/">Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
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
    );
  };

  return (
    <header className="main-navbar">
      <div className="logo">STUDENT HUB</div>
      <div className="nav-links">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/about")}>About</span>
        <span onClick={() => navigate("/departments")}>Departments</span>
        <span onClick={() => navigate("/contact")}>Contact</span>
        <span onClick={() => navigate("/login")}>Login</span>
      </div>
      {generateBreadcrumbs()}
    </header>
  );
};

export default Header;