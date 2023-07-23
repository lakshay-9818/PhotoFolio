import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import AlbumTile from "./AlbumTile";


function AlbumList({albumsList,handleDlt,handleRenameClick}) {  
  
  // //album will contain username and albumname
  return (albumsList.length===0?<h3 className="nothing my-4">No albums to display</h3>:
    <div className="my-2 border d-flex flex-wrap justify-content-start">
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
