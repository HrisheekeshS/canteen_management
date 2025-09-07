// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv-P2KFgTJ9naIc9mNId-mk6BrxKganw4",
  authDomain: "canteenmanagement-9ddf4.firebaseapp.com",
  projectId: "canteenmanagement-9ddf4",
  storageBucket: "canteenmanagement-9ddf4.firebasestorage.app",
  messagingSenderId: "370099703621",
  appId: "1:370099703621:web:d467b1a41c0b2e0780b82c",
  measurementId: "G-P2DG6W8QK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider = new GoogleAuthProvider()

export {app,auth,provider}