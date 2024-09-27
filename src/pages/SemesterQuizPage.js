import React, { useState } from 'react';
import SemesterQuiz from '../components/SemesterQuiz';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './SemesterQuizPage.css'; // Import the CSS file

const SemesterQuizPage = () => {
  const [currentSemester, setCurrentSemester] = useState(1);
  const [quizData, setQuizData] = useState([]);
  const [result, setResult] = useState(null);
  const [gptOutput, setGptOutput] = useState(null);

  const handleSubmit = (data) => {
    setQuizData((prevData) => [...prevData, data]);

    if (currentSemester < 6) {
      setCurrentSemester((prevSemester) => prevSemester + 1);
    } else {
      submitAllData();
    }
  };

  const submitAllData = async () => {
    try {
      const response = await fetch('https://emotions-detect-through-student-mental.onrender.com/predict_semester_change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setResult(result['Semester Change Analysis']);
      
      // Process Markdown content
      const gptOutputMarkdown = result['GPT Recommendation'];
      setGptOutput(gptOutputMarkdown); // Assume this is Markdown content
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h1>Semester Quiz</h1>
      <SemesterQuiz semester={currentSemester} onSubmit={handleSubmit} />
      {result && (
        <div>
          <h2>Semester Change Analysis</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {gptOutput && (
        <div className="gpt-recommendation-container">
          <h2>GPT Recommendation</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-content">
            {gptOutput}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default SemesterQuizPage;
