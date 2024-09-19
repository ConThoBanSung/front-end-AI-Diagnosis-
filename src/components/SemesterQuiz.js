// src/components/SemesterQuiz.js
import React, { useState } from 'react';
import './SemesterQuiz.css'; // Đảm bảo đường dẫn đúng

const SemesterQuiz = ({ semester, onSubmit }) => {
  const [formData, setFormData] = useState({
    Gender: '', // Để người dùng nhập vào, giá trị là '0' hoặc '1'
    Attendance_: '',
    Academic_Score: '',
    Classroom_Behavior: '',
    Stress_Level: '',
    Anxiety_Level: '',
    Sleep_Quality: '',
    Mental_Health_Score: '',
    Social_Engagement: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo dữ liệu để gửi đi
    const dataToSubmit = {
      Gender: parseInt(formData.Gender), // Đảm bảo Gender là số nguyên 0 hoặc 1
      Attendance_: parseFloat(formData.Attendance_),
      Academic_Score: parseFloat(formData.Academic_Score),
      Classroom_Behavior: parseFloat(formData.Classroom_Behavior),
      Stress_Level: parseFloat(formData.Stress_Level),
      Anxiety_Level: parseFloat(formData.Anxiety_Level),
      Sleep_Quality: parseFloat(formData.Sleep_Quality),
      Mental_Health_Score: parseFloat(formData.Mental_Health_Score),
      Social_Engagement: parseFloat(formData.Social_Engagement),
      Semester: semester,
    };

    onSubmit(dataToSubmit);
  };

  return (
    <div className="semester-quiz">
      <h2>Enter Data for Semester {semester}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <select name="Gender" value={formData.Gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </label>
        <label>
          Attendance (%):
          <input type="number" name="Attendance_" value={formData.Attendance_} onChange={handleChange} />
        </label>
        <label>
          Academic Score:
          <input type="number" name="Academic_Score" value={formData.Academic_Score} onChange={handleChange} />
        </label>
        <label>
          Classroom Behavior:
          <input type="number" name="Classroom_Behavior" value={formData.Classroom_Behavior} onChange={handleChange} />
        </label>
        <label>
          Stress Level:
          <input type="number" name="Stress_Level" value={formData.Stress_Level} onChange={handleChange} />
        </label>
        <label>
          Anxiety Level:
          <input type="number" name="Anxiety_Level" value={formData.Anxiety_Level} onChange={handleChange} />
        </label>
        <label>
          Sleep Quality:
          <input type="number" name="Sleep_Quality" value={formData.Sleep_Quality} onChange={handleChange} />
        </label>
        <label>
          Mental Health Score:
          <input type="number" name="Mental_Health_Score" value={formData.Mental_Health_Score} onChange={handleChange} />
        </label>
        <label>
          Social Engagement:
          <input type="number" name="Social_Engagement" value={formData.Social_Engagement} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SemesterQuiz;
