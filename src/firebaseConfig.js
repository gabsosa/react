// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4jde3w6vR7v-2crQnyJSJ21aruOplPyg",
  authDomain: "clothingstore-e32d3.firebaseapp.com",
  projectId: "clothingstore-e32d3",
  storageBucket: "clothingstore-e32d3.appspot.com",
  messagingSenderId: "332357840",
  appId: "1:332357840:web:ccef95e766406f59ea3ed5",
  measurementId: "G-LYTZ77YNVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);