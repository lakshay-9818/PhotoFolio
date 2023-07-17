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
  updateDoc,
} from "firebase/firestore";
import { ref,listAll, deleteObject } from "firebase/storage";
import { db } from "../firebaseInit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeLoader from "react-spinners/FadeLoader";

function Gallery() {
  const [albumsList, setAlbumsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isRename, setIsRename] = useState(null);
  let [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "Albums"));
    const albums = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsList(albums);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

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
    let text = "Are you sure you want to delete this album?";
    if (confirm(text) == true) {
      try {
        await deleteDoc(doc(db, "Albums", id));
        await deleteDoc(doc(db, "Images", id));
        setAlbumsList(albumsList.filter((al) => al.id !== id));
        /*****todo:delete images from storage of firebase */        
  //       const desertRef = ref(storage, `Images/${id}`);        
  //       const { items } = await listAll(desertRef);
  //     // Delete each file within the folder path
  //   const deletePromises = items.map((itemRef) =>{
  //   return new Promise((resolve, reject) => {
  //     deleteObject(itemRef, (err) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // });  

  // // Wait for all delete operations to complete
  // await Promise.all(deletePromises);
  toast.success(`album and its files deleted successfully`);      
      
      } catch {        
        toast.error(`Error! album not deleted`);
      }
    } 
  };

  // function which will handle click on rename button
  const handleRenameClick = (id) => {
    setIsRename(id);
    setShowForm(true);
  };

  //function which will rename the album
  const doRename = async (albumName, userName, id) => {
    try {
      const docRef = doc(db, "Albums", id);
      // Update the document
      await updateDoc(docRef, { albumName, userName });
      //******update "albumList" also here
      let aL = albumsList.filter((album) => album.id !== id);
      setAlbumsList([{ id, albumName, userName }, ...aL]);
      toast.success(`album renamed :-)`);
    } catch (error) {
      toast.error(`album not renamed :-( ${error}`);
    }
    setShowForm(false);
    setIsRename(null);
  };

  return loading ? (
   <div className="loader"> <FadeLoader
  color="grey"
  cssOverride={{}}
  height={15}
  loading
  radius={15}
  speedMultiplier={1.5}
  width={5}
/></div>
  ) : (
    <>
      <ToastContainer />
      <div className="m-3">
        {showForm && (
          <AlbumForm
            createNewAlbum={createNewAlbum}
            isRename={isRename}
            doRename={doRename}
          />
        )}
        <div className="d-flex justify-content-between">
          <h2> Your Albums</h2>
          <button
            className={`btn ${
              showForm ? "btn-outline-danger" : "btn-outline-primary"
            }`}
            onClick={() => {
              setIsRename(null);
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
