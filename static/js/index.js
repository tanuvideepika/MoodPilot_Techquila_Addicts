import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDTcw62ynYIZUM4uBwp8B3mkGADhuUtbco",
    authDomain: "maal-fukte-hai.firebaseapp.com",
    projectId: "maal-fukte-hai",
    storageBucket: "maal-fukte-hai.appspot.com",
    messagingSenderId: "322921098043",
    appId: "1:322921098043:web:2a081a864912ec43eba51e"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)

import {
    getFirestore
  } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'
  
  // init services
  const db = getFirestore()
  const auth= getAuth()


