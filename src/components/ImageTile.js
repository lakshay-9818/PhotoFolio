import React from "react";

function ImageTile({ image }) {
  return (
    <div className="m-2 p-2 bg-light tile">
      <img className="album_image" src={`${image}`} alt={`${image}`} />
    </div>
  );
}

export default ImageTile;
