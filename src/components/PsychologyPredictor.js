// src/components/PsychologyPredictor.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const PsychologyPredictor = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // Kiểm tra trạng thái xác thực
    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email === 'admin@gmail.com') {
            setIsAuthenticated(true); // Nếu tài khoản giáo viên, thiết lập xác thực
        } else {
            navigate('/login'); // Chuyển hướng đến trang đăng nhập
        }
    }, [navigate]);

    const [studentData, setStudentData] = useState({
        StudentID: '',
        Gender: '',
        Year_of_Study: '',
        Attendance: '',
        Academic_Score: '',
        Extracurricular_Activities: '',
        Social_Interactions: '',
        Behavior_Issues: '',
        Peer_Relationships: '',
        Classroom_Behavior: '',
        Email: '', // Thêm trường Email
    });

    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8000/predict-psychology', studentData);
            console.log("Response from server:", res.data);
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <h2>Dự Đoán Tâm Lý Sinh Viên</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="StudentID" placeholder="Mã sinh viên" onChange={handleChange} required />
                        <input type="text" name="Gender" placeholder="Giới tính" onChange={handleChange} required />
                        <input type="text" name="Year_of_Study" placeholder="Năm học" onChange={handleChange} required />
                        <input type="number" name="Attendance" placeholder="Điểm danh (%)" onChange={handleChange} required />
                        <input type="number" name="Academic_Score" placeholder="Điểm học tập" onChange={handleChange} required />
                        <input type="text" name="Extracurricular_Activities" placeholder="Hoạt động ngoại khóa" onChange={handleChange} />
                        <input type="text" name="Social_Interactions" placeholder="Tương tác xã hội" onChange={handleChange} />
                        <input type="text" name="Behavior_Issues" placeholder="Vấn đề hành vi" onChange={handleChange} />
                        <input type="text" name="Peer_Relationships" placeholder="Mối quan hệ bạn bè" onChange={handleChange} />
                        <input type="text" name="Classroom_Behavior" placeholder="Hành vi trong lớp" onChange={handleChange} />
                        <input type="email" name="Email" placeholder="Email giáo viên" onChange={handleChange} required /> {/* Thêm trường nhập email giáo viên */}
                        <button type="submit">Gửi</button>
                    </form>
                    {response && (
                        <div>
                            <ReactMarkdown>{response}</ReactMarkdown>
                        </div>
                    )}
                </>
            ) : (
                <h2>Vui lòng đăng nhập để truy cập trang này.</h2>
            )}
        </div>
    );
};

export default PsychologyPredictor;
