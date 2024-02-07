// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFBF7HEctGrGgovz-jiuniQ06lYnD28Vk",
  authDomain: "codelab-7c799.firebaseapp.com",
  projectId: "codelab-7c799",
  storageBucket: "codelab-7c799.appspot.com",
  messagingSenderId: "812252989593",
  appId: "1:812252989593:web:2c4c9c9f706a07299b1008",
  measurementId: "G-C8SW15LHF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
