// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import Firebase Authentication
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtFvn5yrnq7DX4SmhnfPH_azRLTGQSZU8",
    authDomain: "webapp-2a68a.firebaseapp.com",
    projectId: "webapp-2a68a",
    storageBucket: "webapp-2a68a.appspot.com",
    messagingSenderId: "558135821254",
    appId: "1:558135821254:web:c7bda0ea3c95f710aa28c7",
    measurementId: "G-L1SQY4B7CM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);  // Khởi tạo Firebase Authentication
const db = getFirestore(app);

// Optional: Initialize Analytics if you're using it
const analytics = getAnalytics(app);

// Export the services
export { auth, db };
