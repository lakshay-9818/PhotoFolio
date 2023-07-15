import React from "react";

function ImageTile({ image,dltImage}) {
  return (
    <div className="m-2 p-2 bg-dark tile">
      <img className="album_image" src={`${image.imageUrl}`} alt={`${image}`} />
      
      <button onClick={()=>dltImage(image.uid)}>X</button>
    </div>
  );
}

export default ImageTile;
