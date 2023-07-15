import React, { useContext, useEffect, useState } from "react";
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

function AlbumList(props) {
  const { showForm } = props;
  const [albumsList, setAlbumsList] = useState([]);
  const getData = async () => {
    const snapshot = await getDocs(collection(db, "Albums"));
    const albums = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsList(albums);
  };
  useEffect(() => {
    getData();
  }, [showForm]);
  // //album will contain username and albumname
  // const { albumId, handleIdChange } = useContext(AlbumContext);
  return (
    <div className="border d-flex flex-wrap justify-content-start">
      {albumsList.map((album, index) => (
        <AlbumTile
          key={index}
          albumName={album.albumName}
          userName={album.userName}
          id={album.id}
        />
      ))}
    </div>
  );
}

export default AlbumList;
