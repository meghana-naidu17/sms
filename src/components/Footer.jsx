import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>© {new Date().getFullYear()} College Management System</p>
      </div>

      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;