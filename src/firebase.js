// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaWBScXHlS8pH_OBslWPIM4ZkCeuaNJHg",
    authDomain: "ka-vue-wordpress.firebaseapp.com",
    projectId: "ka-vue-wordpress",
    storageBucket: "ka-vue-wordpress.appspot.com",
    messagingSenderId: "509788751801",
    appId: "1:509788751801:web:6481cd9f42634b38a6d868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);