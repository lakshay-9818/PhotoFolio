import React from "react";
import BarLoader from "react-spinners/BarLoader";
function ImageForm({ handleImageUpload ,miniloading}) {
  return (miniloading? <div className="loader"><BarLoader/></div>:
    <form className="form w-50 p-2" onSubmit={handleImageUpload}>
      <h2>Add new Image</h2>
      <input type="file" />
      <button type="submit" className="btn btn-success">
        Upload
      </button>
      <button type="reset" className="btn btn-danger">
        Clear
      </button>
    </form>
  );
}

export default ImageForm;
