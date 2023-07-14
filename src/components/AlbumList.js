import React,{useContext} from "react";
import { AlbumContext } from "../context/AlbumContext";
import AlbumTile from "./AlbumTile";

function AlbumList() {
  const albums = [
    { albumname: "goa", username: "user1" },
    { albumname: "dubai", username: "user2" },
    { albumname: "usa", username: "user3" },
    { albumname: "paris", username: "user4" }
  ];
  //album will contain username and albumname
  const { albumId,handleIdChange } = useContext(AlbumContext);
  return (
    <div className="border d-flex flex-wrap justify-content-start">
      {/* <AlbumTile/>
        <AlbumTile/>
        <AlbumTile/>
        <AlbumTile/>
        <AlbumTile/>
        <AlbumTile/> */}
      {albums.map((album) => (
        <AlbumTile
         albumName={album.albumname}
         userName={album.username}
         onClick={()=>{handleIdChange(25)}}/>
      ))}
    </div>
  );
}

export default AlbumList;
