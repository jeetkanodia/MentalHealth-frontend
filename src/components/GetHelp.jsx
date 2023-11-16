
import React, { useState, useEffect } from 'react';
import "../styles/gethelp.css";

const ArticleCard = ({ title, image, content, link }) => (
  <div className="col-sm-12 col-md-4 mb-3">
    <div className="card mx-auto text-center">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read Article
        </a>
      </div>
    </div>
  </div>
);

const DoctorCard = ({ name, specialization, contact, reviews }) => {
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (showReviews) {
      timeoutId = setTimeout(() => {
        setShowReviews(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [showReviews]);

  const handleMouseEnter = () => {
    setShowReviews(true);
  };

  const handleMouseLeave = () => {
    setShowReviews(false);
  };

  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <div className="card mx-auto text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="card-header" style={{ width: '100%' }}>
          <h4 className="my-0 font-weight-normal">{name}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{specialization}</p>
          <p className="card-text">{contact}</p>
          {showReviews && <p className="card-text">{reviews}</p>}
          <button className="btn btn-primary">Book a Session</button>
        </div>
      </div>
    </div>
  );
};

const GetHelp = () => {
  return (
    <div className="container">
      <h2>Articles</h2>
      <div className="row">
        <ArticleCard
          title="Understanding Mental Health"
          image="https://example.com/image1.jpg"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://example.com/article1"
        />
        <ArticleCard
          title="Coping Strategies for Stress"
          image="https://example.com/image2.jpg"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://example.com/article2"
        />
        <ArticleCard
          title="Tips for a Healthy Mind"
          image="https://example.com/image3.jpg"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          link="https://example.com/article3"
        />
      </div>

      <hr />

      {/* Doctor Cards */}
      <h2>Find a Therapist</h2>
      <div className="row">
        <DoctorCard
          name="Dr. John Doe"
          specialization="Psychiatrist"
          contact="Email: john.doe@example.com | Phone: 123-456-7890"
          reviews="Excellent therapist with a caring approach."
        />
        <DoctorCard
          name="Dr. Jane Smith"
          specialization="Clinical Psychologist"
          contact="Email: jane.smith@example.com | Phone: 987-654-3210"
          reviews="Very knowledgeable and empathetic."
        />
        <DoctorCard
          name="Dr. Jane Smith"
          specialization="Clinical Psychologist"
          contact="Email: jane.smith@example.com | Phone: 987-654-3210"
          reviews="Very knowledgeable and empathetic."
        />
      </div>
    </div>
  );
};

export default GetHelp;

