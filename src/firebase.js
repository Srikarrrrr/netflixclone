// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC878RgXKQBAswpeqN9UztSaUQXomCSZvg",
  authDomain: "netflixclone-d0f76.firebaseapp.com",
  projectId: "netflixclone-d0f76",
  storageBucket: "netflixclone-d0f76.appspot.com",
  messagingSenderId: "513321273260",
  appId: "1:513321273260:web:67ed2368dd310c396c5c09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

