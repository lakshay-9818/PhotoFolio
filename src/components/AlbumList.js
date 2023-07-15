import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import AlbumTile from "./AlbumTile";


function AlbumList({albumsList,handleDlt,handleRenameClick}) {  
  
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
          handleDlt={handleDlt}
          handleRenameClick={handleRenameClick}
        />
      ))}
    </div>
  );
}

export default AlbumList;
