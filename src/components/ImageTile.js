import React from "react";
import {saveAs} from "file-saver";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function ImageTile({ image,dltImage}) {

  const downloadImg= ()=>{
    // saveAs(url, "Twitter-logo.png");
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    const storage = getStorage();
getDownloadURL(ref(storage, 'Images/IMG_20210105_095057.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    saveAs(url, "Twitter-logo.png");
    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }

  return (
    <div className="m-2 p-2 bg-dark tile">

      <div className="album_image" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src={`${image.imageUrl}`} alt={`${image}` } />
      </div>
      
      {/* this will load a priview using madals of bootstrap */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Preview</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <img src={`${image.imageUrl}`}/>
      </div>
      
    </div>
  </div>
</div>
      
      <button
          className="mx-1 btn btn-danger"
          onClick={()=>dltImage(image.uid)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        <button
          className="mx-1 btn btn-secondary"
          onClick={()=>downloadImg()}
        >
           <i className="bi bi-download"></i>
        </button>

    </div>
  );
}

export default ImageTile;
