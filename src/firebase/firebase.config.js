// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXEFMCz4-fPPmzWeP_R2cnI43XHInnbIM",
  authDomain: "music-hub-8cb59.firebaseapp.com",
  projectId: "music-hub-8cb59",
  storageBucket: "music-hub-8cb59.appspot.com",
  messagingSenderId: "850663561327",
  appId: "1:850663561327:web:5c67e309cb2d657d33959a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;