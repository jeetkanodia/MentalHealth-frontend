import React from "react";

const Card = ({ heading, description }) => {
  return (
    <div className="card-container">
      <div className="card-img">{/* img here */}</div>
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card"></p>
      </div>
    </div>
  );
};

export default Card;
