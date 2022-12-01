// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWY4CwQciQsYH6CBWuydJKdVE9awDdC_8",
  authDomain: "school-92725.firebaseapp.com",
  projectId: "school-92725",
  storageBucket: "school-92725.appspot.com",
  messagingSenderId: "1011092609490",
  appId: "1:1011092609490:web:1dca340053afd4a7ba500b",
  measurementId: "G-9KNP3L7ZDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);