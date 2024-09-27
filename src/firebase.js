// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import Firebase Authentication
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jxrvJ93wJOkkOt7e6EMEPFlgEldsNtw",
  authDomain: "webbb-a8ec1.firebaseapp.com",
  projectId: "webbb-a8ec1",
  storageBucket: "webbb-a8ec1.appspot.com",
  messagingSenderId: "255939836461",
  appId: "1:255939836461:web:7eb8a9aa71986d837e16a4",
  measurementId: "G-GW4HTV8LEJ"
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
