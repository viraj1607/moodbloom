// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhu7cofm1OAeeBGayBEvmKqrESbfIfbRw",
  authDomain: "moodbloom-66c5d.firebaseapp.com",
  projectId: "moodbloom-66c5d",
  storageBucket: "moodbloom-66c5d.firebasestorage.app",
  messagingSenderId: "741294149922",
  appId: "1:741294149922:web:8d17e39220c0473a0b557b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);