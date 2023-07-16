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
      <img className="album_image" src={`${image.imageUrl}`} alt={`${image}`} />
      
      
      
      <button
          className="mx-1 btn btn-danger"
          onClick={()=>dltImage(image.uid)}
        >
          <i class="bi bi-trash-fill"></i>
        </button>
        <button
          className="mx-1 btn btn-secondary"
          onClick={()=>downloadImg()}
        >
           <i class="bi bi-download"></i>
        </button>

    </div>
  );
}

export default ImageTile;
