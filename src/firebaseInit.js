// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD5JwrJwDHM8mRY0LTwri9X1IkIarpfeJc",
  authDomain: "photofolio-b6288.firebaseapp.com",
  databaseURL: "https://photofolio-b6288-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "photofolio-b6288",
  storageBucket: "photofolio-b6288.appspot.com",
  messagingSenderId: "579834413622",
  appId: "1:579834413622:web:931d2419752429ab3dce97"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth= getAuth(app);
export { db, storage,auth };
