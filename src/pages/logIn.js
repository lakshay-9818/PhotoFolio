import React, { useState } from 'react';
import './Form.css'; 

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebaseInit";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {   
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    window.location.href = '/';
  })
  .catch((error) => {
    toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  });

  };
  

  return (<><ToastContainer />
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
