import React from "react";

function AlbumTile({albumName,userName}) {
  return (
    <div className="tile border border-primary">
      <div className="album_thumbnail p-3 m-3 border border-secondary ">thumbnail image</div>
      <h1 className="album_title">{albumName}</h1>
      <span>{userName}</span>
    </div>
  );
}

export default AlbumTile;
