import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <div className="container">
      <div className="animation-example">
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle"></div>
        </div>
        <div className="center">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
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
      <a href="/huong_dan.txt" download className="guide-button">
        Hướng dẫn
      </a>
      
      <div className="social-button-container">
        <button className="social-button" onClick={toggleSocialLinks}>
          Social
        </button>
        {showSocialLinks && (
          <div className="social-links">
            <a href="https://www.facebook.com/hoangkha.nguyenhuynh.73/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://www.instagram.com/hng.khar/?igsh=bTB4amk0MDdmNDAz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://www.linkedin.com/in/kha-nguy%E1%BB%85n-29934b320/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/ConThoBanSung" target="_blank" rel="noopener noreferrer" className="social-link">Github</a>
            <a href="https://www.cloudskillsboost.google/public_profiles/081dfded-3261-4266-ae9c-4d8dd82f53b8" target="_blank" rel="noopener noreferrer" className="social-link">Google</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
