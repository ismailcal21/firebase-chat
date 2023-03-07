// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZc8ee8bwwuCKntbBdX2c-vWaITCxsM8",
  authDomain: "chatroom-fdc25.firebaseapp.com",
  projectId: "chatroom-fdc25",
  storageBucket: "chatroom-fdc25.appspot.com",
  messagingSenderId: "104134896928",
  appId: "1:104134896928:web:b51434c3c3d7055fc2bb45",
  measurementId: "G-30S5WFG5YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
