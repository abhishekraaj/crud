// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGdFD4ZvsFSmcO0Qa3WjcoeKkcFs-5TFI",
  authDomain: "crud-application-18196.firebaseapp.com",
  projectId: "crud-application-18196",
  storageBucket: "crud-application-18196.appspot.com",
  messagingSenderId: "818828719539",
  appId: "1:818828719539:web:cfa99ae159e2b3fbdc47c6",
  measurementId: "G-MYTHG882LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;