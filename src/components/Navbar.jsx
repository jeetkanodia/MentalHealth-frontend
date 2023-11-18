import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
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
        <Link className="navbar-link" to="/blog">
          <div>Blog</div>
        </Link>

        <Link className="navbar-link" to="/gethelp">
          <div>Get Help</div>
        </Link>
        <Link className="navbar-link" to="/test">
          <div> Take a Test</div>
        </Link>
        {user && (
          <>
            <Link onClick={handleClick} className="navbar-link">
              <div>Logout</div>
            </Link>
            <div>{user.name}</div>
          </>
        )}
        {!user && (
          <>
            <Link className="navbar-link" to="/login">
              <div>Login</div>
            </Link>
            <Link className="navbar-link" to="/signup">
              <div>Sign Up</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
