import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj1f89a3QeIKRRhgEkIOriH5nlMhrnmWU",
  authDomain: "onelife-252f0.firebaseapp.com",
  projectId: "onelife-252f0",
  storageBucket: "onelife-252f0.appspot.com",
  messagingSenderId: "87169563280",
  appId: "1:87169563280:web:f8da0742bdda886888b615",
  measurementId: "G-RZFK2MTGYG"
};

// Initialiser Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app()
}

export const db = firebase.firestore();