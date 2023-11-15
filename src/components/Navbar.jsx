import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
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
        <Link className="navbar-link" to="/createpost">
          <div>Create Post</div>
        </Link>
        <Link className="navbar-link" to="/resources">
          <div>Resources</div>
        </Link>
        <Link className="navbar-link" to="/test">
          <div> Take a Test</div>
        </Link>

        <Link onClick={handleClick} className="navbar-link">
          <div>Logout</div>
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
