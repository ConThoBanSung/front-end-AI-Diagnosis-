import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const PredictMentalHealth = () => {
  const [formData, setFormData] = useState({
    StudentID: '',
    Gender: '',
    Your_current_year_of_Study: '',
    Attendance_percent: '',
    Academic_Score: '',
    Extracurricular_Activities: '',
    Social_Interactions: '',
    Behavior_Issues: '',
    Stress_Level: '',
    Anxiety_Level: '',
    Depression_Level: '',
    Sleep_Quality: '',
    Family_Support: '',
    Mental_Health_Counseling_Participation: '',
    Physical_Health_Issues: '',
    Peer_Relationships: '',
    Social_Media_Activity: '',
    Academic_Pressure: '',
    Classroom_Behavior: '',
    Online_Posts_Sentiment: '',
    Journal_Entries_Sentiment: '',
    Social_Media_Comments: '',
    Negative_Interactions_Count: '',
    Positive_Interactions_Count: '',
    Frequency_of_Journal_Writing: '',
    Writing_Style: '',
    Keywords_of_Concern: '',
    Text_Length: ''
  });

  const [prediction, setPrediction] = useState(null); // State to store prediction result
  const [error, setError] = useState(null); // State to store error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/predict_mentalhealth', {
        StudentID: formData.StudentID,
        Gender: formData.Gender,
        // Các trường sử dụng alias như trên backend
        'Your current year of Study': parseInt(formData.Your_current_year_of_Study),
        'Attendance (%)': parseFloat(formData.Attendance_percent),
        'Academic Score': parseFloat(formData.Academic_Score),
        'Extracurricular Activities': parseInt(formData.Extracurricular_Activities),
        'Social Interactions': parseInt(formData.Social_Interactions),
        'Behavior Issues': parseInt(formData.Behavior_Issues),
        'Stress Level': parseFloat(formData.Stress_Level),
        'Anxiety Level': parseFloat(formData.Anxiety_Level),
        'Depression Level': parseFloat(formData.Depression_Level),
        'Sleep Quality': formData.Sleep_Quality,
        'Family Support': formData.Family_Support,
        'Mental Health Counseling Participation': formData.Mental_Health_Counseling_Participation,
        'Physical Health Issues': formData.Physical_Health_Issues,
        'Peer Relationships': formData.Peer_Relationships,
        'Social Media Activity': formData.Social_Media_Activity,
        'Academic Pressure': formData.Academic_Pressure,
        'Classroom Behavior': parseInt(formData.Classroom_Behavior),
        'Online Posts Sentiment': formData.Online_Posts_Sentiment,
        'Journal Entries Sentiment': formData.Journal_Entries_Sentiment,
        'Social Media Comments': parseInt(formData.Social_Media_Comments),
        'Negative Interactions Count': parseInt(formData.Negative_Interactions_Count),
        'Positive Interactions Count': parseInt(formData.Positive_Interactions_Count),
        'Frequency of Journal Writing': formData.Frequency_of_Journal_Writing,
        'Writing Style': formData.Writing_Style,
        'Keywords of Concern': formData.Keywords_of_Concern || '',  // Đảm bảo trường này không bị undefined
        'Text Length': parseInt(formData.Text_Length)
      });
      setPrediction(response.data); // Set the prediction result to state
      setError(null); // Clear any previous error
    } catch (error) {
      setError('Error predicting mental health: ' + error.message); // Set error message
      setPrediction(null); // Clear any previous prediction
    }
  };
  
  return (
    <div>
<form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input
          type="text"
          name="StudentID"
          value={formData.StudentID}
          onChange={handleChange}
          placeholder="e.g., ST003"
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="Gender"
          value={formData.Gender}
          onChange={handleChange}
          placeholder="e.g., Female"
        />
      </div>
      <div>
        <label>Current Year of Study:</label>
        <input
          type="number"
          name="Your_current_year_of_Study"
          value={formData.Your_current_year_of_Study}
          onChange={handleChange}
          placeholder="e.g., 1"
        />
      </div>
      <div>
        <label>Attendance (%):</label>
        <input
          type="number"
          step="0.01"
          name="Attendance_percent"
          value={formData.Attendance_percent}
          onChange={handleChange}
          placeholder="e.g., 85.00"
        />
      </div>
      <div>
        <label>Academic Score:</label>
        <input
          type="number"
          step="0.01"
          name="Academic_Score"
          value={formData.Academic_Score}
          onChange={handleChange}
          placeholder="e.g., 7.50"
        />
      </div>
      <div>
        <label>Extracurricular Activities:</label>
        <input
          type="number"
          name="Extracurricular_Activities"
          value={formData.Extracurricular_Activities}
          onChange={handleChange}
          placeholder="e.g., 9"
        />
      </div>
      <div>
        <label>Social Interactions:</label>
        <input
          type="number"
          name="Social_Interactions"
          value={formData.Social_Interactions}
          onChange={handleChange}
          placeholder="e.g., 9"
        />
      </div>
      <div>
        <label>Behavior Issues:</label>
        <input
          type="number"
          name="Behavior_Issues"
          value={formData.Behavior_Issues}
          onChange={handleChange}
          placeholder="e.g., 0"
        />
      </div>
      <div>
        <label>Stress Level:</label>
        <input
          type="number"
          step="0.01"
          name="Stress_Level"
          value={formData.Stress_Level}
          onChange={handleChange}
          placeholder="e.g., 2.00"
        />
      </div>
      <div>
        <label>Anxiety Level:</label>
        <input
          type="number"
          step="0.01"
          name="Anxiety_Level"
          value={formData.Anxiety_Level}
          onChange={handleChange}
          placeholder="e.g., 2.00"
        />
      </div>
      <div>
        <label>Depression Level:</label>
        <input
          type="number"
          step="0.01"
          name="Depression_Level"
          value={formData.Depression_Level}
          onChange={handleChange}
          placeholder="e.g., 1.00"
        />
      </div>
      <div>
        <label>Sleep Quality:</label>
        <input
          type="text"
          name="Sleep_Quality"
          value={formData.Sleep_Quality}
          onChange={handleChange}
          placeholder="e.g., Good"
        />
      </div>
      <div>
        <label>Family Support:</label>
        <input
          type="text"
          name="Family_Support"
          value={formData.Family_Support}
          onChange={handleChange}
          placeholder="e.g., High"
        />
      </div>
      <div>
        <label>Mental Health Counseling Participation:</label>
        <input
          type="text"
          name="Mental_Health_Counseling_Participation"
          value={formData.Mental_Health_Counseling_Participation}
          onChange={handleChange}
          placeholder="e.g., No"
        />
      </div>
      <div>
        <label>Physical Health Issues:</label>
        <input
          type="text"
          name="Physical_Health_Issues"
          value={formData.Physical_Health_Issues}
          onChange={handleChange}
          placeholder="e.g., No"
        />
      </div>
      <div>
        <label>Peer Relationships:</label>
        <input
          type="text"
          name="Peer_Relationships"
          value={formData.Peer_Relationships}
          onChange={handleChange}
          placeholder="e.g., Good"
        />
      </div>
      <div>
        <label>Social Media Activity:</label>
        <input
          type="text"
          name="Social_Media_Activity"
          value={formData.Social_Media_Activity}
          onChange={handleChange}
          placeholder="e.g., Low"
        />
      </div>
      <div>
        <label>Academic Pressure:</label>
        <input
          type="text"
          name="Academic_Pressure"
          value={formData.Academic_Pressure}
          onChange={handleChange}
          placeholder="e.g., Low"
        />
      </div>
      <div>
        <label>Classroom Behavior:</label>
        <input
          type="number"
          name="Classroom_Behavior"
          value={formData.Classroom_Behavior}
          onChange={handleChange}
          placeholder="e.g., 0"
        />
      </div>
      <div>
        <label>Online Posts Sentiment:</label>
        <input
          type="text"
          name="Online_Posts_Sentiment"
          value={formData.Online_Posts_Sentiment}
          onChange={handleChange}
          placeholder="e.g., Positive"
        />
      </div>
      <div>
        <label>Journal Entries Sentiment:</label>
        <input
          type="text"
          name="Journal_Entries_Sentiment"
          value={formData.Journal_Entries_Sentiment}
          onChange={handleChange}
          placeholder="e.g., Happy"
        />
      </div>
      <div>
        <label>Social Media Comments:</label>
        <input
          type="number"
          name="Social_Media_Comments"
          value={formData.Social_Media_Comments}
          onChange={handleChange}
          placeholder="e.g., 10"
        />
      </div>
      <div>
        <label>Negative Interactions Count:</label>
        <input
          type="number"
          name="Negative_Interactions_Count"
          value={formData.Negative_Interactions_Count}
          onChange={handleChange}
          placeholder="e.g., 0"
        />
      </div>
      <div>
        <label>Positive Interactions Count:</label>
        <input
          type="number"
          name="Positive_Interactions_Count"
          value={formData.Positive_Interactions_Count}
          onChange={handleChange}
          placeholder="e.g., 15"
        />
      </div>
      <div>
        <label>Frequency of Journal Writing:</label>
        <input
          type="text"
          name="Frequency_of_Journal_Writing"
          value={formData.Frequency_of_Journal_Writing}
          onChange={handleChange}
          placeholder="e.g., Occasionally"
        />
      </div>
      <div>
        <label>Writing Style:</label>
        <input
          type="text"
          name="Writing_Style"
          value={formData.Writing_Style}
          onChange={handleChange}
          placeholder="e.g., Formal"
        />
      </div>
      <div>
        <label>Keywords of Concern:</label>
        <input
          type="text"
          name="Keywords_of_Concern"
          value={formData.Keywords_of_Concern}
          onChange={handleChange}
          placeholder="e.g.,"
        />
      </div>
      <div>
        <label>Text Length:</label>
        <input
          type="number"
          name="Text_Length"
          value={formData.Text_Length}
          onChange={handleChange}
          placeholder="e.g., 762"
          />
        </div>
        <button type="submit">Predict</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} 
      
      {prediction && (
        <div>
          <h3>Prediction Result:</h3>
          <p>{JSON.stringify(prediction)}</p> 
        </div>
      )}
    </div>
  );
};

export default PredictMentalHealth;
