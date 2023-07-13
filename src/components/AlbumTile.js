import React from "react";

function AlbumTile() {
  return (
    <div className="m-3 col-2 border border-primary">
      <div className="album_thumbnail p-3 m-3 border border-secondary ">thumbnail image</div>
      <h1 className="album_title">album title</h1>
    </div>
  );
}

export default AlbumTile;
