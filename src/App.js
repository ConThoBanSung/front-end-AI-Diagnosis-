// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PredictMentalHealthPage from './pages/PredictMentalHealthPage';
import PredictDropoutRiskPage from './pages/PredictDropoutRiskPage';
import GptDiagnosisPage from './pages/GptDiagnosisPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict-mental-health" element={<PredictMentalHealthPage />} />
        <Route path="/predict-dropout-risk" element={<PredictDropoutRiskPage />} />
        <Route path="/GptDiagnosis" element={<GptDiagnosisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
