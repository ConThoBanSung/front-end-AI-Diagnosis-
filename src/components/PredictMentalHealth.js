import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './PredictMentalHealth.css';  // Import CSS file

const questions = {
  'How often do you feel overwhelmed by your studies?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'Do you have difficulty sleeping due to stress?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'How satisfied are you with your current academic performance?': ['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied'],
  'How often do you engage in social activities outside of school?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'How frequently do you feel anxious about upcoming exams?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'How would you rate your overall mental well-being?': ['Very Poor', 'Poor', 'Fair', 'Good'],
  'Do you find it hard to concentrate during lectures?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'How often do you feel pressure from your family regarding your studies?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'How often do you feel that your workload is manageable?': ['Never', 'Rarely', 'Sometimes', 'Often'],
  'Do you feel that you have sufficient support from friends and family?': ['Never', 'Rarely', 'Sometimes', 'Often']
};

const convertQuestionToKey = (question) => {
  return question
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_{2,}/g, '_')
    .replace(/^_+|_+$/g, '');
};

const PredictMentalHealth = () => {
  const [answers, setAnswers] = useState({});
  const [prediction, setPrediction] = useState('');
  const [gptRecommendation, setGptRecommendation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [convertQuestionToKey(name)]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem('userEmail'); // Assuming user email is stored in localStorage

    try {
      const response = await axios.post('http://localhost:8000/predict', {
        ...answers // Send all answers
      });

      setPrediction(response.data.prediction || 'No prediction available');
      setGptRecommendation(response.data.GPT_Recommendation || 'No recommendation available');

      // Save prediction to MongoDB
      if (email) {
        const predictionData = {
          email: email,
          prediction: response.data.prediction,
          GPT_Recommendation: response.data.GPT_Recommendation,
          timestamp: new Date().toISOString() // Use ISO format for the timestamp
        };

        await axios.post('http://localhost:8000/save_prediction', predictionData);
        console.log("Prediction successfully saved to MongoDB!");
      } else {
        console.error("Email is not defined.");
      }

    } catch (error) {
      console.error('Error submitting the form', error);
      setPrediction('Failed to submit the form.');
      setGptRecommendation('Failed to get GPT recommendation.');
    }
  };

  return (
    <div>
      <h1>Mental Health Prediction</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(questions).map((question, index) => (
          <div key={index}>
            <label>
              {index + 1}. {question}
            </label>
            <div>
              {questions[question].map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    id={`${convertQuestionToKey(question)}-${i}`}
                    name={question}
                    value={option}
                    onChange={handleChange}
                    checked={answers[convertQuestionToKey(question)] === option}
                  />
                  <label htmlFor={`${convertQuestionToKey(question)}-${i}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction</h2>
          <p>{prediction}</p>
        </div>
      )}
      {gptRecommendation && (
        <div className="gpt-recommendation-container">
          <h2>GPT Recommendation</h2>
          <ReactMarkdown>{gptRecommendation}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default PredictMentalHealth;
