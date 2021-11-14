// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-0pamS6Po0ZcSctpCcFpwh832wWZgmoI",
  authDomain: "zooaveapp.firebaseapp.com",
  projectId: "zooaveapp",
  storageBucket: "zooaveapp.appspot.com",
  messagingSenderId: "966242935337",
  appId: "1:966242935337:web:99401d27b909586176b238",
  measurementId: "G-6T048BZTBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);