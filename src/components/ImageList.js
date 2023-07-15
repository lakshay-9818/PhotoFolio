import React,{useState,useEffect} from 'react'
import "../"
import ImageTile from './ImageTile'
// import firebase methods here
import {doc, collection, addDoc, updateDoc,getDocs} from "firebase/firestore";
import { db } from "../firebaseInit";

function ImageList() {
  
  const [images,setImages]= useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "images"));
     const imageS = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setImages(imageS);
  }  

  return (
    <div className='border d-flex flex-wrap justify-content-start'>
      
      {images.map((image) => (
        <ImageTile
         image={image}
         />
      ))}
    </div>
  )
}

export default ImageList