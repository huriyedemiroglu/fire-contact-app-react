// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZvJMGprdRQ9ia9yrRjIR18NcXdytzC3A",
  authDomain: "fire-contact-app-react.firebaseapp.com",
  databaseURL: "https://fire-contact-app-react-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-react",
  storageBucket: "fire-contact-app-react.appspot.com",
  messagingSenderId: "962365729399",
  appId: "1:962365729399:web:198999b38038489f39f472",
  measurementId: "G-P0BELX8DE3"
};

// Initialize Firebase
const firebase= initializeApp(firebaseConfig);


export default firebase;