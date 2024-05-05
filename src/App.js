// App.js
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import './global.css';
import MainBody from './MainBody';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebaseInit';
import LoginPage from './pages/logIn'; 
import SignupPage from './pages/SignUp'
import { useDispatch, useSelector } from "react-redux";
import {login} from "./redux/reducers/AuthReducer";

function App() {
  const dispatch = useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      dispatch(login(auth.currentUser));
    } else {
      // User is signed out
      // ...
    }
  });
},[]);

  return (
   
       <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<MainBody />} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
