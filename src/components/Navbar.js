// Navbar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, logout } from "../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../firebaseInit'
import { Button } from "react-bootstrap";

function Navbar() {
  const { isAuthenticated, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      signOut(auth)
    .then(() => {
        // Sign-out successful
        dispatch(logout())
        console.log("User signed out successfully!");
    })
    .catch((error) => {
        // Handle errors
        console.error("Error signing out:", error);
    });
    } else {
      // Navigate to login page
      navigate('/login');
    }
  };

  const handleSignUpClick= () =>{
     navigate('/signup');
  }

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
       
        {
        isAuthenticated?
        <>
        <a className="navbar-brand" href="/">
          <i className="bi bi-images p-1"></i>
          {user}
        </a>
        <Button variant="danger" onClick={handleButtonClick}>
          Logout
        </Button>
        </>:<>
         <a className="navbar-brand" href="/">
          <i className="bi bi-images p-1"></i>
          Photofolio
        </a>
        <div>
        <Button  onClick={handleButtonClick}>
          LogIn
        </Button>
        <Button variant="link" onClick={handleSignUpClick}>
          SignUp
        </Button>
        </div>
        </>
        }
      </div>
    </nav>
  );
}

export default Navbar;
