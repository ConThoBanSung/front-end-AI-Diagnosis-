import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PredictMentalHealthPage from './pages/PredictMentalHealthPage';
import GptDiagnosisPage from './pages/GptDiagnosisPage';
import SemesterQuizPage from './pages/SemesterQuizPage';
import PsychologyPredictor from './components/PsychologyPredictor';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict-mental-health" element={<PredictMentalHealthPage />} />
        <Route path="/semester/:semester" element={<SemesterQuizPage />} />
        <Route path="/GptDiagnosis" element={<GptDiagnosisPage />} />
        <Route path="/mental-teacher" element={<PsychologyPredictor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
