import React,{useRef} from "react";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseInit";

function ImageForm() {
  const inputRef = useRef(null);  

  const handleClick = async () => {
    const img={imgUrl: inputRef.current.value,
      album_id: 23} 
    const imagesRef = collection(db, "images");
    const docRef = await addDoc(imagesRef, img);
    inputRef.current.value="";
  };

  return (
    <div className="form w-50 p-2">
      <h2>Add new Image</h2>
      <input type="text" ref={inputRef}/>
      <button type="submit" className="btn btn-success" onClick={handleClick}>
        Upload
      </button>
    </div>
  );
}

export default ImageForm;
