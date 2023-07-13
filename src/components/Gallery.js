import React from "react";
import AlbumList from "./AlbumList";
import AlbumForm from "./AlbumForm";
function Gallery() {
  return <div className="m-3">
    <AlbumForm/>
    <div className="d-flex justify-content-between"><h2> Your Albums</h2><button type="button" class="btn btn-outline-primary">Add Album</button>  </div>
    <AlbumList/>
  


  </div>;
}

export default Gallery;
