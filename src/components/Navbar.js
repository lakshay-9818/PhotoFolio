// Navbar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, login, logout } from "../redux/reducers/AuthReducer";
//import { useHistory } from "react-router-dom"; // Import useHistory hook

function Navbar() {
  const { isAuthenticated, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
 // const history = useHistory(); // Get the history object

  const handleButtonClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      // Navigate to login page
      window.location.href=  '/login';
    }
  };

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="bi bi-images p-1"></i>
          {isAuthenticated ? user : "Photofolio"}
        </a>
        <button onClick={handleButtonClick}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
