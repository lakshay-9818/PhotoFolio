import React, { useRef} from "react";

function AlbumForm({createNewAlbum,isRename,doRename}) {

  const albumNameRef = useRef(null);


  return (
    <form className="form p-2">
      <h2>{isRename?"Rename Album":"Create an Album" }</h2>
      <input type="text" placeholder="Enter album name" ref={albumNameRef}/>
      
     
      {isRename && 
        <button
        type="button"
        className="m-1 btn btn-info"
        onClick={()=>{
          doRename(albumNameRef.current.value,isRename);
          albumNameRef.current.value = "";
        }}
      >Rename</button>
      }

      {!isRename &&
      <button
        type="button"
        className="m-1 btn btn-success"
        onClick={()=>{
          createNewAlbum(albumNameRef.current.value);
          albumNameRef.current.value = "";
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
