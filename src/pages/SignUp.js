import React, { useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {auth,db} from '../firebaseInit';
import { toast, ToastContainer } from "react-toastify";
import { doc,setDoc,} from "firebase/firestore";


import './Form.css'; // Import CSS for form styles

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); 

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user,{displayName:displayName})
            .then(async() => {
              await setDoc(doc(db, "Users",user.uid), {name:displayName, albums:[]});
                console.log('Display name updated successfully',);
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
            });
  })
  .catch((error) => {
    toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
  });

  
  };

  return (<>
  <ToastContainer/>
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div  className="form-group">
        <label>Name:</label>
        <input className="form-input" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      </div>
        <div className="form-group">
          <label>Email:</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>        
        <button className="form-button" type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default SignUp;