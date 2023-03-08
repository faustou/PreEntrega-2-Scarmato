// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMnTA4Gs9n_uVa7eiFstguIAKQ4_xFW5c",
  authDomain: "bachshop-ce4f7.firebaseapp.com",
  projectId: "bachshop-ce4f7",
  storageBucket: "bachshop-ce4f7.appspot.com",
  messagingSenderId: "146235482599",
  appId: "1:146235482599:web:553a51cb5a8c8278ff5d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app