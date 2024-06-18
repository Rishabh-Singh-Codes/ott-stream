// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALyJcmhU7M5pJ7DLssuCdCq586u9P8fs",
  authDomain: "ott-stream-rishabh.firebaseapp.com",
  projectId: "ott-stream-rishabh",
  storageBucket: "ott-stream-rishabh.appspot.com",
  messagingSenderId: "203416016133",
  appId: "1:203416016133:web:d7e9da4997ddcb8235d36c",
  measurementId: "G-KWB6GTPXRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();