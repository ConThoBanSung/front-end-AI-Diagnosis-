import axios from 'axios';


const API_URL = 'http://localhost:8000';  // Thay đổi URL này thành URL backend của bạn

// Đăng ký người dùng
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Đăng nhập người dùng
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const saveProfile = async (studentID, fullName) => {
    const email = localStorage.getItem('userEmail'); // Lấy email từ localStorage

    // Tạo payload với đúng cấu trúc
    const payload = { 
        studentID, // Đây nên là chuỗi
        full_name: fullName,
        email // Đây cũng nên là chuỗi
    };

    console.log('Payload gửi đi:', JSON.stringify(payload)); // Kiểm tra payload

    try {
        const response = await axios.post(`${API_URL}/profile`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error saving profile:', error.response.data); // Xem lỗi chi tiết
        throw error.response.data;
    }
};

  // Lấy thông tin người dùng
  export const getUserInfo = async (email) => {
    try {
      const response = await axios.get(`${API_URL}/user/${email}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

