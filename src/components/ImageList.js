import React from "react";
import ImageTile from "./ImageTile";

function ImageList({ imageList, dltImage }) {
  return imageList.length === 0 ? (
    <h3 className="nothing my-4">No images to display yet</h3>
  ) : (
    <div className=" my-2 border d-flex flex-wrap justify-content-start">
      {imageList.map((image, index) => (
        <ImageTile key={index} image={image} dltImage={dltImage} />
      ))}
    </div>
  );
}

export default ImageList;
