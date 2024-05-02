import React from "react";
import Gallery from "./components/Gallery";
import Album from "./components/Album";
import { useSelector } from "react-redux";
import { selectAlbumId } from "./redux/reducers/AlbumReducer";

function MainBody() {
  const { albumId } =useSelector(selectAlbumId)
  return albumId === null ? <Gallery /> : <Album />;
}

export default MainBody;
