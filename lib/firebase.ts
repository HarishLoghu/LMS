// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEkuFZBY9SLm05HUJHG0wHsTCUWEay-Xk",
  authDomain: "library-management-syste-97671.firebaseapp.com",
  projectId: "library-management-syste-97671",
  storageBucket: "library-management-syste-97671.firebasestorage.app",
  messagingSenderId: "4728923042",
  appId: "1:4728923042:web:39386c9c661c30be7a48fb",
  measurementId: "G-8RZKQJN3TD"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Optional: Initialize analytics only in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// ✅ Export auth and firestore db
export const auth = getAuth(app);
export const db = getFirestore(app);
