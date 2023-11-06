import React from "react";
import "../styles/test.css";
import img from "../assets/testimage.svg";
import Card from "./Card";

const Test = () => {
  return (
    <div className="test-container">
      <div className="test-detail-section">
        <div className="test-left">
          <h1>Assessment</h1>
          <p>Take a Free Mental Health Test</p>
          <p>
            We can't improve what we don't measure, this couldn't be more
            accurate for mental health. It's time to change that, get in touch
            with your thoughts and feelings with the assessments below. Online
            tests are the quickest and easiest way to evaluate symptoms of a
            mental health condition.
          </p>
        </div>
        <div className="test-right">
          <img src={img} alt="satest" />
        </div>
      </div>
      <div className="test-cards">
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
        <Card
          heading={"Am i stressed"}
          description={
            "Explore how stress has been taking a toll on your well-being. Take the assessment today!"
          }
          link={"/"}
        />
      </div>
    </div>
  );
};

export default Test;
