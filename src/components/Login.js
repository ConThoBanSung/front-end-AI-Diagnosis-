import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Kiểm tra tài khoản giáo viên
      if (email === 'admin@gmail.com' && password === '123') {
        localStorage.setItem('userEmail', email);
        setMessage('Đăng nhập thành công với tài khoản giáo viên!');
        navigate('/'); // Điều hướng đến trang chính
        return; // Kết thúc hàm nếu là tài khoản giáo viên
      }

      // Đối với tài khoản khác, thực hiện gọi API
      const response = await login(email, password);

      // Thêm console.log để kiểm tra phản hồi từ API
      console.log(response); 
      localStorage.setItem('userEmail', email);
      
      setMessage(response.message);

      // Kiểm tra xem đăng nhập có thành công không
      if (response.message === 'Đăng nhập thành công!') {
        navigate('/'); // Điều hướng đến trang chính
      }
    } catch (error) {
      setMessage(error.detail || 'Đăng nhập thất bại.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
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
        <button className="auth-button">Đăng Nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
