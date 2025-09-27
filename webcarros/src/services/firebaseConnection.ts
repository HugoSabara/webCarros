// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLQmMYjFVxKMAiGQ2AHzqlEXC-XV4lxfwfiji cvjijcw iejij cvij ",
  authDomain: "webcarros-8a0fe.firebaseapp.com",
  projectId: "webcarros-8a0fe",
  storageBucket: "webcarros-8a0fe.firebasestorage.app",
  messagingSenderId: "213808221998",
  appId: "1:2138082219981d21ada5d15d1w5d1w0:web:8777a89fcdbcd95a1374bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage}