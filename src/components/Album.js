import React, { useContext, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import ImageList from "./ImageList";
import ImageForm from "./ImageForm";

function Album({ album_id }) {
  const [showForm, setShowForm] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { albumId, handleIdChange } = useContext(AlbumContext);

  const handleImageUpload = (url) => {
    setShowForm(false)
    setImageUrl(url);
  };
  return (
    <div className="m-3">
      {showForm && <ImageForm handleImageUpload={handleImageUpload} />}
      <button onClick={() => handleIdChange(null)}>Back to Gallery</button>
      <div>
        Images in album with id {albumId}
        <button
          className={`btn ${
            showForm ? "btn-outline-danger" : "btn-outline-primary"
          }`}
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Image"}
        </button>
      </div>
      <ImageList imageUrl={imageUrl} />
    </div>
  );
}

export default Album;
