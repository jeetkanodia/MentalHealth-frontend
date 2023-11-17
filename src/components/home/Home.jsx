import React from "react";
import image1 from "../../assets/mind-plan.png";
import "../../styles/home.css";
import { styled, Box } from "@mui/material";
import background from "../../assets/home-mental.jpg";
import { Link } from "react-router-dom";

const Image = styled(Box)`
  width: 100%;
  background: url(${background}) center/82%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  return (
    <div style={{ marginTop: "15vh" }} className="home">
      <main>
        <Image>
          <section className="mental-health-intro">
            <h1 className="mental-health-intro-title">Every Mind Matters</h1>
            <article>
              <h2>What is mental health?</h2>
              <p>
                Having good mental health helps us relax more, achieve more and
                enjoy our lives more. There are simple things we can all do to
                look after our mental health and wellbeing – take our quiz to
                get started today with a free plan, expert advice and practical
                tips.
              </p>
            </article>
          </section>
        </Image>
        <section className="mind-plan">
          <div className="mind-plan-content">
            <div className="mind-plan-info">
              <h3>Get Your Mind Plan</h3>
              <p>
                Take our carefully crafted quiz to discover your mental health
                score on things like depression, happiness scale, workplace
                stress etc; and get personalised tips and advice on what you can
                do to look after your mental health.
              </p>
              <Link to="/test">
                <button>Take the quiz</button>
              </Link>
            </div>
            <div className="mind-plan-image">
              <img src={image1} alt="Mind Plan" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
