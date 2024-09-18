// src/components/DiagnosisForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './GptDiagnosis.css';

const DiagnosisForm = () => {
  const [dropoutRisk, setDropoutRisk] = useState(0);
  const [emotion, setEmotion] = useState('neutral');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/gpt_diagnosis', {
        dropout_risk: dropoutRisk,
        emotion: emotion,
      });

      // Log the full response to check data
      console.log('API Response:', response);

      // Log recommendation to verify
      console.log('Recommendation:', response.data.recommendation);

      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Dropout Risk:
            <select
              value={dropoutRisk}
              onChange={(e) => setDropoutRisk(Number(e.target.value))}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Emotion:
            <select
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            >
              <option value="sad">Sad</option>
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="anxious">Anxious</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {recommendation && (
        <div className="recommendation-container">
          <h2>Recommendation:</h2>
          <p className="recommendation-text">{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosisForm;
