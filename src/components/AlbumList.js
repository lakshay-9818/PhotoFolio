import React,{useContext,useEffect, useState} from "react";
import { AlbumContext } from "../context/AlbumContext";
import AlbumTile from "./AlbumTile";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseInit";

function AlbumList() {
  const [albums,setAlbums]= useState([]);

  useEffect(() => {
    getData();
  }, [albums]);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "albums"));
     const albumS = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setAlbums(albumS);
  }  
  //album will contain username and albumname
  const { albumId,handleIdChange } = useContext(AlbumContext);
  const handleChange=()=>{
    //handleIdChange(78);
    console.log("shd",albumId);
  }
  return (
    <div className="border d-flex flex-wrap justify-content-start">
     
      {albums.map((album) => (
        <AlbumTile
         albumName={album.albumName}
         userName={album.userName}
         onClick={handleChange}/>
      ))}
    </div>
  );
}

export default AlbumList;
