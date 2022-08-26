// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRQ_08GeIVqh_fe3kGP0D638U09CGQNE4",
  authDomain: "auyth-33c39.firebaseapp.com",
  projectId: "auyth-33c39",
  storageBucket: "auyth-33c39.appspot.com",
  messagingSenderId: "655644052960",
  appId: "1:655644052960:web:92f74963b57a67aa92af85",
  measurementId: "G-VQTP9JVS3L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);