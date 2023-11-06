import React from "react";
import "../styles/test.css";
import img from "../assets/testimage.svg";
import Card from "./Card";

import stress from "../assets/stress-test.png";
import anxious from "../assets/anxious-test.png";
import sleep from "../assets/sleep-test.png";
import sad from "../assets/sad-test.png";
import workplace from "../assets/workplace-test.png";
import happiness from "../assets/happy-test.png";
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
          img={stress}
          link={"/"}
        />
        <Card
          heading={"Am I Sad Or Depressed?"}
          description={
            "Is it more than just feeling low? Take the assessment to find out."
          }
          link={"/"}
          img={sad}
        />
        <Card
          heading={"How am I sleeping ?"}
          description={
            "Are you getting the quality sleep you deserve? Know today by taking the assessment."
          }
          link={"/"}
          img={sleep}
        />
        <Card
          heading={"Am I Anxious?"}
          description={
            "Anxiety jitters never leave you. Take the self-check today to understand your anxiety better."
          }
          link={"/"}
          img={anxious}
        />
        <Card
          heading={"Happiness Scale"}
          description={"Are you happy? Know today by taking the assessment."}
          link={"/"}
          img={happiness}
        />
        <Card
          heading={"Workplace Stress Test"}
          description={
            "Are you getting sick-listed due to work-related stress? Know today by taking the assessment"
          }
          img={workplace}
          link={"/"}
        />
      </div>
    </div>
  );
};

export default Test;
