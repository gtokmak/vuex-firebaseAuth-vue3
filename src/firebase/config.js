// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAu3k-lGh3EN5RCbdsD7JLD0aRqfQVIBg",
  authDomain: "app-sosyal.firebaseapp.com",
  projectId: "app-sosyal",
  storageBucket: "app-sosyal.appspot.com",
  messagingSenderId: "1011704887214",
  appId: "1:1011704887214:web:c9b09b5d1eda89b49f7a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export  { auth};