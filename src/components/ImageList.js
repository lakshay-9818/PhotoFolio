import React, { useState, useEffect, useContext } from "react";
import ImageTile from "./ImageTile";

function ImageList({ imageList,dltImage }) {  

  return (
    <div className="border d-flex flex-wrap justify-content-start">
      {imageList.map((image, index) => (
        <ImageTile key={index}
         image={image}          
         dltImage={dltImage}/>
      ))}
    </div>
  );
}

export default ImageList;
