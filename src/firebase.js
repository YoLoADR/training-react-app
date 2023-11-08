import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
 // pour la base de données

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbcawIG6OxWtoQiwtSV7SAW75qYM-8Y-0",
  authDomain: "headnmarketplace.firebaseapp.com",
  projectId: "headnmarketplace",
  storageBucket: "headnmarketplace.appspot.com",
  messagingSenderId: "1025372627576",
  appId: "1:1025372627576:web:3e82aa3a6317bd5678c38d",
  measurementId: "G-VXBPGZNEWH"
};


// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();