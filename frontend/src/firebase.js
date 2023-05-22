// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw73KqItj-Ovd38WHJQGQptgMx9lVc7iQ",
  authDomain: "query-io.firebaseapp.com",
  projectId: "query-io",
  storageBucket: "query-io.appspot.com",
  messagingSenderId: "892974224837",
  appId: "1:892974224837:web:c39313bc659a5d527ee7ac",
  measurementId: "G-GVW5TQ281Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()

export {auth, provider}