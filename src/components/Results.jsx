import React from "react";
import "../styles/results.css";
import ResultCard from "./ResultCard";
import { useScoreContext } from "../hooks/useScoreContext";
import { resultCardData } from "./constants/data";
const Results = () => {
  const { score } = useScoreContext();
  return (
    <div className="results-container">
      <div className="scores-container">
        <h1 className="result-title">
          You scored <span className="score">{score}</span>
        </h1>
        
        <h3>Interpretation of the score</h3>
      </div>

      <div className="resultcards">
        {resultCardData.map((data, idx) => (
          <ResultCard
            key={idx}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
