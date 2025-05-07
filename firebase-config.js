//firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzsJAzgsjveEA2ooQD778XqZZTQeaLprw",
  authDomain: "bm-mern-aut-2025.firebaseapp.com",
  projectId: "bm-mern-aut-2025",
  storageBucket: "bm-mern-aut-2025.appspot.com",
  messagingSenderId: "1030979933908",
  appId: "1:1030979933908:web:2be844c6cc1318e9abcd41",
  measurementId: "G-EZLZ1ZVR4N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
