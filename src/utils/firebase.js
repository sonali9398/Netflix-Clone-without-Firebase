// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC80W7Rr-DZ01AjDDglJ1UUrgLe_t71S8Q",
  authDomain: "netflix-gpt-36d7e.firebaseapp.com",
  projectId: "netflix-gpt-36d7e",
  storageBucket: "netflix-gpt-36d7e.firebasestorage.app",
  messagingSenderId: "70063256700",
  appId: "1:70063256700:web:1a727dd57b2f2fdac485f9",
  measurementId: "G-6YLQ4GPVS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();