// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD5JwrJwDHM8mRY0LTwri9X1IkIarpfeJc",
  authDomain: "photofolio-b6288.firebaseapp.com",
  projectId: "photofolio-b6288",
  storageBucket: "photofolio-b6288.appspot.com",
  messagingSenderId: "579834413622",
  appId: "1:579834413622:web:931d2419752429ab3dce97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
