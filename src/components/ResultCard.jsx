import React from "react";
import { Link } from "react-router-dom";
import "../styles/resultcard.css";

const Card = ({ heading, description }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default Card;
