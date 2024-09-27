import React, { useState } from 'react';
import { signup } from '../services/authService';
import { useNavigate } from 'react-router-dom';  // Sử dụng useNavigate
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Khởi tạo useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, password);
      setMessage(response.message);
      // Chuyển hướng người dùng tới trang login sau khi đăng ký thành công
      if (response.message === 'Đăng ký thành công!') {
        navigate('/login');  // Chuyển hướng tới trang login
      }
    } catch (error) {
      setMessage(error.detail || 'Đăng ký thất bại.');
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
