import React, { useState } from "react";
import AlbumList from "./AlbumList";
import AlbumForm from "./AlbumForm";
function Gallery() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="m-3">
      {showForm && <AlbumForm />}
      <div className="d-flex justify-content-between">
        <h2> Your Albums</h2>
        <button
          className={`btn ${
            showForm ? "btn-outline-danger" : "btn-outline-primary"
          }`}
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Album"}
        </button>
      </div>
      <AlbumList />
    </div>
  );
}

export default Gallery;
