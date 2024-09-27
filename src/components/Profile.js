// Profile.js
import React, { useState, useEffect } from 'react';
import { saveProfile, getUserInfo } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [savedFullName, setSavedFullName] = useState(null);
  const [savedStudentID, setSavedStudentID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Giả sử bạn đã lưu email vào local storage sau khi đăng nhập
    const userEmail = localStorage.getItem('userEmail');
    setEmail(userEmail);

    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo(userEmail);
        setSavedFullName(userInfo.full_name); // Giả sử bạn đã lưu trong Firestore với trường là full_name
        setSavedStudentID(userInfo.studentID); // Giả sử bạn đã lưu trong Firestore với trường là studentID
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    
    // Đảm bảo rằng các giá trị không phải là undefined
    console.log('Student ID:', studentID);
    console.log('Full Name:', fullName);
    console.log('Email:', email);

    try {
        // Gửi email cùng với studentID và fullName
        await saveProfile(studentID, fullName, email); // Cập nhật để gửi email
        setSavedFullName(fullName); // Cập nhật tên đã lưu
        setSavedStudentID(studentID); // Cập nhật mã sinh viên đã lưu
        setFullName(''); // Xóa trường họ và tên sau khi lưu
        setStudentID(''); // Xóa trường mã sinh viên sau khi lưu
        alert('Hồ sơ đã được lưu thành công!');
        navigate('/'); // Điều hướng về trang chính (nếu cần)
    } catch (error) {
        // Log the full error for debugging
        console.error('Error saving profile:', error);
  
        // Check for the specific error structure and retrieve the message
        const errorMessage = error.response?.data.detail || error.message || 'Lưu hồ sơ thất bại!';
  
        alert('Lưu hồ sơ thất bại: ' + errorMessage);
    }
};


  return (
    <div className="profile-container">
      <h2>Hồ Sơ</h2>
      <p>Email: {email}</p>
      <div>
        <p>Họ và Tên: {savedFullName ? savedFullName : 'Not Found'}</p>
        <p>Mã Sinh Viên: {savedStudentID ? savedStudentID : 'Not Found'}</p>
      </div>
      <form onSubmit={handleSaveProfile}>
        <div>
          <label>Họ và Tên:</label>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Mã Sinh Viên:</label>
          <input 
            type="text" 
            value={studentID} 
            onChange={(e) => setStudentID(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Lưu Hồ Sơ</button>
      </form>
    </div>
  );
};

export default Profile;
