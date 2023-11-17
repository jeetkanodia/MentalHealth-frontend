import React from "react";
import "../styles/results.css";
import { useScoreContext } from "../hooks/useScoreContext";
const Results = () => {
  const { score } = useScoreContext();
  return (
    <div className="results-container">
      <h2>your score{score}</h2>
    </div>
  );
};

export default Results;
