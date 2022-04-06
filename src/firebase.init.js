// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMpeJRrafCze75ozN-Gfd52Iu_87k6psc",
    authDomain: "fir-auth-753fb.firebaseapp.com",
    projectId: "fir-auth-753fb",
    storageBucket: "fir-auth-753fb.appspot.com",
    messagingSenderId: "1048631449702",
    appId: "1:1048631449702:web:5beffa8727d7c36b7275a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;