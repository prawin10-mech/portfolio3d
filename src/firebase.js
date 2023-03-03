// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZq_giNoLw2i0ACS88ty4fMTAE2GPCw2A",
  authDomain: "praveenboppe10.firebaseapp.com",
  projectId: "praveenboppe10",
  storageBucket: "praveenboppe10.appspot.com",
  messagingSenderId: "86849140314",
  appId: "1:86849140314:web:4453bedad259f621f74a63",
  measurementId: "G-S4GX03HCBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
