// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXC9bxVkd83EGaMHPTj5GizAr-vksUzW8",
  authDomain: "proyectoprueba-1-6bcbc.firebaseapp.com",
  projectId: "proyectoprueba-1-6bcbc",
  storageBucket: "proyectoprueba-1-6bcbc.appspot.com",
  messagingSenderId: "768472654517",
  appId: "1:768472654517:web:7b400fb6ddd9cbe56514fc",
  measurementId: "G-LMP9GVBSB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);