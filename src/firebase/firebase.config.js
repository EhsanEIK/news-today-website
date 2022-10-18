// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc5HDJ55VvV0k0gAedfW-XvIRC3iGpmvM",
    authDomain: "news-today-client.firebaseapp.com",
    projectId: "news-today-client",
    storageBucket: "news-today-client.appspot.com",
    messagingSenderId: "482216591792",
    appId: "1:482216591792:web:748d022ee6d81800271675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;