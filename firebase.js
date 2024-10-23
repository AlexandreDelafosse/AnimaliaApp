// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPi7O-I1cUMLYmJzZX9pqS4Sknu0daNIo",
  authDomain: "animaliaapp-e095d.firebaseapp.com",
  projectId: "animaliaapp-e095d",
  storageBucket: "animaliaapp-e095d.appspot.com",
  messagingSenderId: "153273364949",
  appId: "1:153273364949:web:d43479f35dce375a29cd5c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
const app = initializeApp(firebaseConfig);