import React from "react";
import "../styles/test.css";
import img from "../assets/react.svg";

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
        <div className="test-right">{/* IMAGE HERE */}</div>
      </div>
      <div className="test-caraosel-container">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
