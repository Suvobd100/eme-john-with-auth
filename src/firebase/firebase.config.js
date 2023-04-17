// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjZUdzDpQqTLN7rcvIhHAakvQLwbRSmA",
  authDomain: "ema-john-with-fire.firebaseapp.com",
  projectId: "ema-john-with-fire",
  storageBucket: "ema-john-with-fire.appspot.com",
  messagingSenderId: "730406680188",
  appId: "1:730406680188:web:41da222ab64a494e05bbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;