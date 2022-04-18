// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqTgHyWABJ6oiC55UIUStBapxVUgHafB8",
  authDomain: "dashboard-231d0.firebaseapp.com",
  projectId: "dashboard-231d0",
  storageBucket: "dashboard-231d0.appspot.com",
  messagingSenderId: "362904625060",
  appId: "1:362904625060:web:241c27505fb5cd3d59ab31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()