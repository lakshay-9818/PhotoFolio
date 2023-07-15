import React, { useState, useEffect } from "react";
import AlbumList from "./AlbumList";
import AlbumForm from "./AlbumForm";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebaseInit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Gallery() {
  const [albumsList, setAlbumsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isRename,setIsRename] = useState(null);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "Albums"));
    const albums = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsList(albums);
  };

  useEffect(
    () => {
      getData();
    },
    [
      /*albumsList,showForm*/
    ]
  );

  const createNewAlbum = async (albumname, username) => {
    try {
      const album = {
        albumName: albumname,
        userName: username,
      };
      const albumsRef = collection(db, "Albums");
      const docRef = await addDoc(albumsRef, album);
      await setDoc(doc(db, "Images", docRef.id), {});
      const temp = {
        id: docRef.id,
        albumName: albumname,
        userName: username,
      };
      setAlbumsList([temp, ...albumsList]);
      setShowForm(false);
      toast.success("album created successfully.");
    } catch (error) {
      console.log(error.message);
    }
  };

  //function which will delete the album
  const handleDlt = async (id) => {
    try {
      await deleteDoc(doc(db, "Albums", id));
      await deleteDoc(doc(db, "Images", id));
      /********todo: delete images from storage of firebase */
      setAlbumsList(albumsList.filter((al) => al.id !== id));
      toast.success(`album deleted successfully`);
      setShowForm(false);
    } catch {
      console.log(error);
    }
  };

  // function which will handle click on rename button
  const handleRenameClick=(id)=>{
    setIsRename(id);
    setShowForm(true);    
  }

  //function which will rename the album
  const doRename = async (albumName,userName,id) => {
    try{
    const docRef = doc(db, "Albums", id);   
    // Update the document
    await updateDoc(docRef, {albumName, userName });
    //********** todo: update "albumList" also here*/ 
    let aL= albumsList.filter((album)=>album.id!==id);
    setAlbumsList([{id,albumName,userName},...aL]);
    toast.success(`album renamed :-)`);
  }catch(error){
      toast.error(`album not renamed :-( ${error}`);
    }
    setIsRename(null);
  };

  return (
    <>
      <ToastContainer />
      <div className="m-3">
        {showForm && <AlbumForm         
        createNewAlbum={createNewAlbum}
        isRename={isRename}        
        doRename={doRename}/>}
        <div className="d-flex justify-content-between">
          <h2> Your Albums</h2>
          <button
            className={`btn ${
              showForm ? "btn-outline-danger" : "btn-outline-primary"
            }`}
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Cancel" : "Add Album"}
          </button>
        </div>
        <AlbumList
          albumsList={albumsList}
          handleRenameClick={handleRenameClick}
          handleDlt={handleDlt}
        />
      </div>
    </>
  );
}

export default Gallery;
