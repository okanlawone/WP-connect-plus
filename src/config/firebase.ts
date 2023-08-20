// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZ8XVTNbo3kZ67m7a-rWFgdoMyqOweW8",
  authDomain: "wp-connect-plus.firebaseapp.com",
  projectId: "wp-connect-plus",
  storageBucket: "wp-connect-plus.appspot.com",
  messagingSenderId: "588658487557",
  appId: "1:588658487557:web:b73bcdd4c4dfcbfb79476c",
  measurementId: "G-11PXDPYN58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const database = getFirestore(app)