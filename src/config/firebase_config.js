import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3xw5dwZGU7nsBkPwC1dsunxot0C4GUos",
  authDomain: "chat-jo-27f97.firebaseapp.com",
  databaseURL: "https://chat-jo-27f97-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-jo-27f97",
  storageBucket: "chat-jo-27f97.appspot.com",
  messagingSenderId: "406816715433",
  appId: "1:406816715433:web:73cb2f3f72fce6a4a5afb8",
  measurementId: "G-1M5B3SEWLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
