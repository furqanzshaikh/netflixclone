// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT4jufkwdqnCaCSo1iuwa3XyP6PYbdnos",
  authDomain: 'react-netflix-1a620.firebaseapp.com',
  projectId: "react-netflix-1a620",
  storageBucket: "react-netflix-1a620.appspot.com",
  messagingSenderId: "739823003264",
  appId: "1:739823003264:web:4a9220ce00ce5d4b35e865"
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app)