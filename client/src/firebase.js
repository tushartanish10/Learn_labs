// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-CUOzyc72WR5CisjNjEWfKF01V5_5ig4",
  authDomain: "learnlabs-9a6df.firebaseapp.com",
  projectId: "learnlabs-9a6df",
  storageBucket: "learnlabs-9a6df.appspot.com",
  messagingSenderId: "620370452624",
  appId: "1:620370452624:web:2c454e25066931ad4ff815",
  measurementId: "G-HW3X955J99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);