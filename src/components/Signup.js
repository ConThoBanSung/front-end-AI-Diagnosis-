import React, { useState } from 'react';
import axios from 'axios';  // Đảm bảo bạn đã cài axios
import { useNavigate } from 'react-router-dom';  // Sử dụng useNavigate
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Khởi tạo useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();  // Ngăn chặn hành vi mặc định của form
    console.log(email, password)
    try {
      const response = await axios.post('http://localhost:8000/signup', {
        email: email,
        password: password,
        
      });
      

      // Xử lý phản hồi thành công
      setMessage(response.data.message);
      if (response.data.message === 'Đăng ký thành công!') {
        navigate('/login');  // Chuyển hướng tới trang login
      }
    } catch (error) {
      // Xử lý lỗi
      if (error.response) {
        setMessage(error.response.data.detail || 'Đăng ký thất bại.');
      } else {
        setMessage('Đăng ký thất bại: Không thể kết nối đến máy chủ.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Đăng Ký</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button className="auth-button">Đăng Ký</button>
      </form>
      {message && <p>{message}</p>} {/* Hiển thị thông điệp */}
    </div>
  );
};

export default Signup;
