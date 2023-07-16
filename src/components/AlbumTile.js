import React, { useContext} from "react";
import { AlbumContext } from "../context/AlbumContext";


function AlbumTile({ albumName, userName, id, handleDlt, handleRenameClick }) {
 
  const { handleIdChange } = useContext(AlbumContext);
  return (
    
    <div className="card tile"> 

      


<div onClick={() => handleIdChange(id)}
id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1688433416701-13d3e04bb7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" className="d-block" alt="first"/>
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
        <div className="card-contnt">
        <h5 className="m-0 p-0 card-title album_title">{albumName}</h5>
        <em className="card-text">by:- {userName}</em>
        </div>
        <button
          className="m-1 btn btn-danger"
          onClick={() => {
            handleDlt(id);
          }}
        >
          <i className="bi bi-trash-fill"></i>
        </button>

        <button
          className="m-1 btn btn-light"
          onClick={() => {
            handleRenameClick(id);
          }}
        >
          <i className="bi bi-pencil-square"></i>
        </button>

      </div>

    </div>
  );
}

export default AlbumTile;
