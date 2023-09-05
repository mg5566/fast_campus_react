// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5j8sXNDTlrdgSfQakLjzoPI-xqXT8dTU",
  authDomain: "next-shop-app-e687c.firebaseapp.com",
  projectId: "next-shop-app-e687c",
  storageBucket: "next-shop-app-e687c.appspot.com",
  messagingSenderId: "767777273846",
  appId: "1:767777273846:web:a66d276f331c7329c679d7",
  measurementId: "G-Z4GCNP9BH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
