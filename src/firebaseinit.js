// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDhn-FPK6KNSW7C2GFIHIraidllnZZJFBE",
  authDomain: "photofolio-6b8a9.firebaseapp.com",
  databaseURL: "https://photofolio-6b8a9-default-rtdb.firebaseio.com",
  projectId: "photofolio-6b8a9",
  storageBucket: "photofolio-6b8a9.appspot.com",
  messagingSenderId: "3639621831",
  appId: "1:3639621831:web:a54f9fe969b1dfaf0726e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
