import React from "react";
import "../styles/404page.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
