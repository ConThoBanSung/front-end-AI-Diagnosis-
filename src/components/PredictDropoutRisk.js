// src/PredictDropOutRisk.js
import React, { useState } from 'react';
import axios from 'axios';

const PredictDropOutRisk = () => {
    const [formData, setFormData] = useState({
        Gender: 0,
        Year_of_Study: 2,
        Attendance: 85.0,
        Academic_Score: 7.5,
        Extracurricular_Activities: 6,
        Social_Interactions: 8,
        Behavior_Issues: 2,
        Stress_Level: 5.0,
        Anxiety_Level: 4.0,
        Depression_Level: 3.0,
        Family_Support: 'High',
        Peer_Relationships: 'Good',
        Social_Media_Activity: 'Low',
        Academic_Pressure: 'Low'
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/predict_dropoutrisk', formData);
            setPrediction(response.data);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <label>
                    Gender:
                    <input type="number" name="Gender" value={formData.Gender} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Year of Study:
                    <input type="number" name="Year_of_Study" value={formData.Year_of_Study} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Attendance:
                    <input type="number" name="Attendance" value={formData.Attendance} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Academic Score:
                    <input type="number" name="Academic_Score" value={formData.Academic_Score} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Extracurricular Activities:
                    <input type="number" name="Extracurricular_Activities" value={formData.Extracurricular_Activities} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Social Interactions:
                    <input type="number" name="Social_Interactions" value={formData.Social_Interactions} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Behavior Issues:
                    <input type="number" name="Behavior_Issues" value={formData.Behavior_Issues} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Stress Level:
                    <input type="number" name="Stress_Level" value={formData.Stress_Level} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Anxiety Level:
                    <input type="number" name="Anxiety_Level" value={formData.Anxiety_Level} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Depression Level:
                    <input type="number" name="Depression_Level" value={formData.Depression_Level} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Family Support:
                    <select name="Family_Support" value={formData.Family_Support} onChange={handleChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <br />
                <label>
                    Peer Relationships:
                    <select name="Peer_Relationships" value={formData.Peer_Relationships} onChange={handleChange}>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                    </select>
                </label>
                <br />
                <label>
                    Social Media Activity:
                    <select name="Social_Media_Activity" value={formData.Social_Media_Activity} onChange={handleChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <br />
                <label>
                    Academic Pressure:
                    <select name="Academic_Pressure" value={formData.Academic_Pressure} onChange={handleChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {prediction && (
                <div>
                    <h2>Prediction Results:</h2>
                    <pre>{JSON.stringify(prediction, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PredictDropOutRisk;
