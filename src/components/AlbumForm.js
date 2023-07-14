import React from "react";

function AlbumForm() {
  const createNewAlbum = () => {};
  return (
    <form className="form w-50 p-2">
      <h2>Create an Album</h2>
      <input type="text" placeholder="Enter album name" />
      <input type="text" placeholder="Enter Username" />
      <button
        type="button"
        className="m-1 btn btn-success"
        onClick={createNewAlbum}
      >
        Create
      </button>
      <button type="button" className="m-1 btn btn-danger">
        Clear
      </button>
    </form>
  );
}

export default AlbumForm;
