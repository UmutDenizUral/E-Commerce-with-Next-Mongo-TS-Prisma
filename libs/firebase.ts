// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD217uMqP_PKBylYVoPxYsNlD6QVRgqqIY",
  authDomain: "e-commerce-39d88.firebaseapp.com",
  projectId: "e-commerce-39d88",
  storageBucket: "e-commerce-39d88.appspot.com",
  messagingSenderId: "889119750360",
  appId: "1:889119750360:web:a405e37ea61dfe5059bfad"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp