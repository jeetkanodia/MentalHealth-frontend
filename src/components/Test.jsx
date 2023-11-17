import React from "react";
import "../styles/test.css";
import img from "../assets/testimage.svg";
import Card from "./Card";
import { Tests } from "./constants/data";

const Test = () => {
  return (
    <div className="test-container">
      <div className="test-detail-section">
        <div className="test-left">
          <h1>Discover Your State of Mind</h1>
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
        {Tests.map((test) => (
          <Card
            key={test.id}
            heading={test.heading}
            description={test.description}
            img={test.img}
            link={test.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
