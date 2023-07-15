import React, { useRef} from "react";

function AlbumForm({createNewAlbum,isRename,doRename}) {

  const albumNameRef = useRef(null);
  const userNameRef = useRef(null);    

  return (
    <form className="form w-50 p-2">
      <h2>{isRename?"Rename Album":"Create an Album" }</h2>
      <input type="text" placeholder="Enter album name" ref={albumNameRef}/>
      <input type="text" placeholder="Enter Username" ref={userNameRef}/>
     
      {isRename && 
        <button
        type="button"
        className="m-1 btn btn-info"
        onClick={()=>{
          doRename(albumNameRef.current.value,userNameRef.current.value,isRename);
          albumNameRef.current.value = "";
          userNameRef.current.value = "";
        }}
      >Rename</button>
      }

      {!isRename &&
      <button
        type="button"
        className="m-1 btn btn-success"
        onClick={()=>{
          createNewAlbum(albumNameRef.current.value,userNameRef.current.value);
          albumNameRef.current.value = "";
          userNameRef.current.value = "";
        }}
      >
        Create
      </button>
      }

      <button type="reset" className="m-1 btn btn-danger">
        Clear
      </button>
    </form>
    
  );
}

export default AlbumForm;
