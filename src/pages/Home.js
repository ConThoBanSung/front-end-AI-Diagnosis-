// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Nhớ import CSS

const Home = () => {
  return (
    <div className="container">
      <h1>School Psychological Support System</h1>
      <div className="button-container">
        <Link to="/predict-mental-health">
          <div className="button">
            Predict Mental Health
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        <Link to="/predict-dropout-risk">
          <div className="button">
            Predict Dropout Risk
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        <Link to="/GptDiagnosis">
          <div className="button">
            AI Diagnosis
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
