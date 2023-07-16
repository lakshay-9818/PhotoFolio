import React, { useContext} from "react";
import { AlbumContext } from "../context/AlbumContext";


function AlbumTile({ albumName, userName, id, handleDlt, handleRenameClick }) {
 
  const { handleIdChange } = useContext(AlbumContext);
  return (
    
    <div className="card tile">       

      {/* <img onClick={() => handleIdChange(id)}
        src="https://firebasestorage.googleapis.com/v0/b/photofolio-b6288.appspot.com/o/Images%2FIMG_20210105_095057.jpg?alt=media&token=43aed80f-0e15-4893-9296-69b2de955465"
        className="card-img-top"
        alt=""
      /> */}


<div onClick={() => handleIdChange(id)}
id="carouselExampleSlidesOnly" className="carousel slide  card-img-top" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/photofolio-b6288.appspot.com/o/Images%2FIMG_20201221_211312.jpg?alt=media&token=2e92704e-da53-446b-b080-8fec43d88c22" className="d-block" alt="first"/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block" alt="second"/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block" alt="third"/>
    </div>
  </div>
</div>


      <div className="card-body">
        <h5 className="card-title album_title">{albumName}</h5>
        <em className="card-text">by:- {userName}</em>
        <button
          className="mx-1 btn btn-danger"
          onClick={() => {
            handleDlt(id);
          }}
        >
          <i class="bi bi-trash-fill"></i>
        </button>
        <button
          className="mx-1 btn btn-light"
          onClick={() => {
            handleRenameClick(id);
          }}
        >
          <i class="bi bi-pencil-square"></i>
        </button>

      </div>

    </div>
  );
}

export default AlbumTile;
