import React from "react";

function ImageForm() {
  return (
    <div className="form w-50 p-2">
      <h2>Add new Image</h2>
      <input type="file" />
      <button type="submit" className="btn btn-success">
        Upload
      </button>
    </div>
  );
}

export default ImageForm;
