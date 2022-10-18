// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlsI7-gOGsGR5g6zN9PiVJhde2AUGnyCU",
    authDomain: "dragon-news-d0e6f.firebaseapp.com",
    projectId: "dragon-news-d0e6f",
    storageBucket: "dragon-news-d0e6f.appspot.com",
    messagingSenderId: "135461183294",
    appId: "1:135461183294:web:e67752fd0c975317ec966f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;