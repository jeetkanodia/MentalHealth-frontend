import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>Sukoon</h1>
      </div>
      <div className="navbar-links">
        <div className="navbar-link">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link">
          <Link to="/about">About</Link>
        </div>
        <div className="navbar-link">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
