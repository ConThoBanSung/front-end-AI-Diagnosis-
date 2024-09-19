import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PredictMentalHealthPage from './pages/PredictMentalHealthPage';
import GptDiagnosisPage from './pages/GptDiagnosisPage';
import SemesterQuizPage from './pages/SemesterQuizPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict-mental-health" element={<PredictMentalHealthPage />} />
        <Route path="/semester/:semester" element={<SemesterQuizPage />} />
        <Route path="/GptDiagnosis" element={<GptDiagnosisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
