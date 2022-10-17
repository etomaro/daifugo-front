import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA78OPQ1YhHsDgC-OMpHqxUpGCfPyC2f6c",
  authDomain: "daifugo-169cb.firebaseapp.com",
  projectId: "daifugo-169cb",
  storageBucket: "daifugo-169cb.appspot.com",
  messagingSenderId: "494686607307",
  appId: "1:494686607307:web:f0e2c396e05b26dcd6c84e",
  measurementId: "G-3J17L959FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
