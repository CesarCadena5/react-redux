// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaCHT618c94dh9j6NmrlZEwvoRwPTRa5Q",
    authDomain: "redux-react-router-practica.firebaseapp.com",
    projectId: "redux-react-router-practica",
    storageBucket: "redux-react-router-practica.appspot.com",
    messagingSenderId: "649330779900",
    appId: "1:649330779900:web:725c539740672db4e79979"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);