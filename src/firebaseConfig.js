// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQNl8Fnhm741rYuv5TSppHPM-ltnC3h4",
  authDomain: "rank-gods.firebaseapp.com",
  databaseURL: "https://rank-gods-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rank-gods",
  storageBucket: "rank-gods.appspot.com",
  messagingSenderId: "753209120275",
  appId: "1:753209120275:web:2c5133c677e1e41ff111e6",
  measurementId: "G-EK9306HFWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);