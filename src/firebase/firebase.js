// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPM9-EzJU9CTwuHz2OdYLIXKUFweAuObQ",
  authDomain: "my-portofolio-faisal.firebaseapp.com",
  projectId: "my-portofolio-faisal",
  storageBucket: "my-portofolio-faisal.firebasestorage.app",
  messagingSenderId: "391997861968",
  appId: "1:391997861968:web:96365e917b7a253f062155",
  measurementId: "G-YK4H4T6SR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);