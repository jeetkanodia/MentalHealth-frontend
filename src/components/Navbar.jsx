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
        <Link className="navbar-link" to="/">
          <div>Home</div>
        </Link>

        <Link className="navbar-link" to="/about">
          <div>About</div>
        </Link>
        <Link className="navbar-link" to="/test">
          <div>Test</div>
        </Link>
        <Link className="navbar-link" to="/login">
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
