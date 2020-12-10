import React from 'react'
import './App.css';
import firebase from 'firebase/app'
import "firebase/firestore";
import SimonApp from './simon-game'

const firebaseConfig = {
  apiKey: "AIzaSyAGTLD92DQM9WLJ-Tk2hwFO7kQ0PzwuzwQ",
  authDomain: "test-project-linkedin.firebaseapp.com",
  databaseURL: "https://test-project-linkedin-default-rtdb.firebaseio.com",
  projectId: "test-project-linkedin",
  storageBucket: "test-project-linkedin.appspot.com",
  messagingSenderId: "44490873143",
  appId: "1:44490873143:web:3ecf9255a51a99b5e522b2"
}

firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <SimonApp />
  );
}

export default App;
