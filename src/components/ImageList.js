import React, { useState, useEffect, useContext } from "react";
import "../";
import ImageTile from "./ImageTile";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { AlbumContext } from "../context/AlbumContext";
import { db } from "../firebaseInit";
// import firebase methods here
function ImageList({ imageUrl }) {
  const { albumId } = useContext(AlbumContext);
  const [imageList, setImageList] = useState([]);

  const getData = async () => {
    const docRef = doc(db, "Images", albumId);
    const urlArray = (await getDoc(docRef))?.data()?.urls || [];
    imageUrl && urlArray.push(imageUrl);
    await setDoc(docRef, {
      urls: urlArray,
    });
    setImageList(urlArray);
  };

  useEffect(() => {
    getData();
  }, [imageUrl]);

  return (
    <div className="border d-flex flex-wrap justify-content-start">
      {imageList.map((image, index) => (
        <ImageTile key={index} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
