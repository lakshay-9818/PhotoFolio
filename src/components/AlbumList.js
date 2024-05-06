import React from "react";

import AlbumTile from "./AlbumTile";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/AuthReducer";



function AlbumList({albumsList,handleDlt,handleRenameClick}) {  

  const { uid } = useSelector(selectAuth);
  
  
  return (albumsList.length===0?<h3 className="nothing my-4">No albums to display</h3>:
    <div className="my-2 border d-flex flex-wrap justify-content-start">
      {albumsList.map((album, index) => (
        <AlbumTile
          key={index}
          album={album}
          isOwner={album.uid===uid}
          id={album.id}
          handleDlt={handleDlt}
          handleRenameClick={handleRenameClick}
        />
      ))}
    </div>
  );
}

export default AlbumList;