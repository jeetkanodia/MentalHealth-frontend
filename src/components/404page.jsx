import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404page.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Not Found!</h1>
            <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="back-home-link">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;
