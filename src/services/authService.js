import axios from 'axios';

const API_URL = 'https://emotions-detect-through-student-mental.onrender.com';  // Change this URL to your backend's URL

// Sign up a user
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;  // Đảm bảo trả về dữ liệu phản hồi
  } catch (error) {
    throw error.response.data;  // Ném lỗi để xử lý trong Signup.js
  }
};

// Log in a user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    // Save user email in localStorage for later use
    localStorage.setItem('userEmail', email);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Đăng nhập thất bại." };
  }
};

// Save user profile
export const saveProfile = async (studentID, fullName) => {
  const email = localStorage.getItem('userEmail'); // Get email from localStorage

  // Create payload with correct structure
  const payload = { 
    studentID, // This should be a string
    full_name: fullName,
    email // This should also be a string
  };

  console.log('Payload gửi đi:', JSON.stringify(payload)); // Check payload

  try {
    const response = await axios.post(`${API_URL}/profile`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error saving profile:', error.response?.data); // See detailed error
    throw error.response?.data || { message: "Lưu hồ sơ thất bại." };
  }
};

// Get user information
export const getUserInfo = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/user/${email}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lấy thông tin người dùng thất bại." };
  }
};
