import React, { useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";

function AlbumTile({ albumName, userName, id }) {
 const {handleIdChange} =  useContext(AlbumContext)
  return (
    <div className="tile border border-primary" onClick={() => handleIdChange(id)}>
      <div className="album_thumbnail p-3 m-3 border border-secondary ">
        thumbnail image
      </div>
      <h1 className="album_title">{albumName}</h1>
      <span>{userName}</span>
    </div>
  );
}

export default AlbumTile;
