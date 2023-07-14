import React, { useContext } from "react";
import { AlbumContext } from "./context/AlbumContext";
import Gallery from "./components/Gallery";
import Album from "./components/Album";
function MainBody() {
  const { albumId } = useContext(AlbumContext);
  return albumId === null ? <Gallery /> : <Album />;
}
export default MainBody;
