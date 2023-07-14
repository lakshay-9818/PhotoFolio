import React, { useRef } from "react";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseInit";

function AlbumForm() {
  const albumNameRef = useRef(null);
  const userNameRef = useRef(null);

  const createNewAlbum = async () => {
    const album = {
      albumName: albumNameRef.current.value,
      userName: userNameRef.current.value,
    };
    const albumsRef = collection(db, "albums");
    const docRef = await addDoc(albumsRef, album);
  };
  return (
    <form className="form w-50 p-2">
      <h2>Create an Album</h2>
      <input type="text" placeholder="Enter album name" ref={albumNameRef} />
      <input type="text" placeholder="Enter Username" ref={userNameRef} />
      <button
        type="button"
        className="m-1 btn btn-success"
        onClick={createNewAlbum}
      >
        Create
      </button>
      <button type="button" className="m-1 btn btn-danger">
        Clear
      </button>
    </form>
  );
}

export default AlbumForm;
