import React, { useState } from "react";
import { saveAs } from "file-saver";


function ImageTile({ image, dltImage, isOwner}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  const downloadImg = (url) => {
    saveAs(url);
  };

  return (
    <div className="m-2 p-2 bg-dark tile">
      <div
        className="album_image"
        onClick={() => handleImageClick(image.imageUrl)}
      >
        <img src={`${image.imageUrl}`} alt={`${image}`} />
      </div>
      {/* this will load a preview using madals of bootstrap */}

      {showModal && (
        <div className="modal d-block">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Preview</h1>
        <button type="button" className="btn-close" onClick={handleCloseModal}></button>
      </div>
              <div className="modal-body">
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
     {isOwner&& <button
        className="mx-1 btn btn-danger"
        onClick={() => dltImage(image.uid)}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
      }
      <button
        className="mx-1 btn btn-secondary"
        onClick={() => downloadImg(image.imageUrl)}
      >
        <i className="bi bi-download"></i>
      </button>
    </div>
  );
}

export default ImageTile;
