// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHZMIzSxuXRdCj51LA_MAeTNsandD4xlo",
    authDomain: "facebook-clone-6d229.firebaseapp.com",
    projectId: "facebook-clone-6d229",
    storageBucket: "facebook-clone-6d229.appspot.com",
    messagingSenderId: "518967902983",
    appId: "1:518967902983:web:e05d2271942b2c2d1c7ba2",
    measurementId: "G-LPZSC703SL"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider };
  export default db;