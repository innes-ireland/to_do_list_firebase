// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdx7y7jkqflk2IaZEywmZnsk9jSQ22QJw",
    authDomain: "to-do-list-f6ee9.firebaseapp.com",
    projectId: "to-do-list-f6ee9",
    storageBucket: "to-do-list-f6ee9.appspot.com",
    messagingSenderId: "1005268790445",
    appId: "1:1005268790445:web:49f27cf8f42ab9d2cfaa24",
    measurementId: "G-K1PHEV60CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);