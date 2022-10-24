// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Z4-d526HoW09LRlhm0cfjqY0tlEWi1A",
  authDomain: "landing-comarca-storage.firebaseapp.com",
  projectId: "landing-comarca-storage",
  storageBucket: "landing-comarca-storage.appspot.com",
  messagingSenderId: "201492057652",
  appId: "1:201492057652:web:8d0012d5d244b102a10461",
  measurementId: "G-YLWZ6B21P9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
