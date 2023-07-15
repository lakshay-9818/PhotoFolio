import React, { useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";

function AlbumTile({ albumName, userName, id ,handleDlt,handleRenameClick}) {
 const {handleIdChange} =  useContext(AlbumContext)
  return (
    <div className="tile border border-primary" >
      <div className="album_thumbnail p-3 m-3 border border-secondary "
       onClick={() => handleIdChange(id)}>
        thumbnail image
      </div>
      <h1 className="album_title">{albumName}</h1>
      <span>{userName}</span>
      <button onClick={()=>{handleDlt(id)}}>X</button>

      <button onClick={()=>{        
        handleRenameClick(id);
       }}>Rename</button>

    </div>
  );
}

export default AlbumTile;
