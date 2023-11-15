import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link className="navbar-logo-link" to="/">
          <h1>Sukoon</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          <div>Home</div>
        </Link>
        <Link className="navbar-link" to="/resources">
          <div>Resources</div>
        </Link>
        <Link className="navbar-link" to="/test">
          <div> Take a Test</div>
        </Link>
        <Link className="navbar-link" to="/login">
          <div>Login</div>
        </Link>
        <Link className="navbar-link" to="/signup">
          <div>Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
