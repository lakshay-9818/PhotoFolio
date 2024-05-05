import React, { useState, useEffect } from "react";
import AlbumList from "./AlbumList";
import AlbumForm from "./AlbumForm";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref,listAll, deleteObject } from "firebase/storage";
import { db,storage } from "../firebaseInit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/AuthReducer";

function Gallery() {
  const {  user,uid } = useSelector(selectAuth);
  const [albumsList, setAlbumsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isRename, setIsRename] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [gid, setGid]= useState(null);  // global variable for storing uid
  let [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "Albums"));
    const albums = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAlbumsList(albums);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const createNewAlbum = async (albumname) => {
    try {
      const album = {
        albumName: albumname,
        albumOwner:user,
        uid
      };
      const albumsRef = collection(db, "Albums");
      const docRef = await addDoc(albumsRef, album);
      await setDoc(doc(db, "Images", docRef.id), {});
      const temp = {
        id: docRef.id,
        albumName: albumname,
        albumOwner:user,
        uid
      };
      setAlbumsList([temp, ...albumsList]);
      setShowForm(false);
      toast.success("album created successfully.");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDlt=(id)=>{
    setGid(id);
    setShowModal(true);
  }
  const handleDialog=(choice)=>{    
    setShowModal(false);
    handleDlt2(choice);
  }
  //function which will delete the album
  const handleDlt2 = async (choice) => {
    //let text = "Are you sure you want to delete this album?";
    if (choice===true) {
      try {
        await deleteDoc(doc(db, "Albums", gid));
        await deleteDoc(doc(db, "Images", gid));
        setAlbumsList(albumsList.filter((al) => al.id !== gid));
        /*****todo:delete images from storage of firebase */        
         const desertRef = ref(storage, `Images/${gid}`);        
         const { items } = await listAll(desertRef);
       // Delete each file within the folder path
     const deletePromises = items.map((itemRef) =>{
     return new Promise((resolve, reject) => {
       deleteObject(itemRef, (err) => {
         if (err) {
           reject(err);
        } else {
           resolve();
         }
       });
     });
   });  

   // Wait for all delete operations to complete
   await Promise.all(deletePromises);
  toast.success(`album and its files deleted successfully`);      
      
      } catch(err) { 
        console.log(err);       
        toast.error(`Error! album not deleted`);
      }
    }
    setGid(null); 
  };

  // function which will handle click on rename button
  const handleRenameClick = (id) => {
    setIsRename(id);
    setShowForm(true);
  };

  //function which will rename the album
  const doRename = async (albumName, id) => {
    try {
      const docRef = doc(db, "Albums", id);
      // Update the document
      await updateDoc(docRef, { albumName ,albumOwner:user});
      //******update "albumList" also here
      let aL = albumsList.filter((album) => album.id !== id);
      setAlbumsList([{ id, albumName,albumOwner:user }, ...aL]);
      toast.success(`album renamed :-)`);
    } catch (error) {
      toast.error(`album not renamed :-( ${error}`);
    }
    setShowForm(false);
    setIsRename(null);
  };

  return loading ? (
   <div className="loader"> <FadeLoader
  color="grey"
  cssOverride={{}}
  height={15}
  loading
  radius={15}
  speedMultiplier={1.5}
  width={5}
/></div>
  ) : (
    <>
      <ToastContainer />
      <div className="m-3">
        {showForm && (
          <AlbumForm
            createNewAlbum={createNewAlbum}
            isRename={isRename}
            doRename={doRename}
          />
        )}
        {showModal &&        
        <div class="modal d-block">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" class="btn-close" onClick={()=>handleDialog(false)}></button>
      </div>
      <div class="modal-body">
        This album and all the images in it will be lost permanently?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>handleDialog(false)}>Cancel</button>
        <button type="button" class="btn btn-primary" onClick={()=> handleDialog(true)}>Delete</button>
      </div>
    </div>
  </div>
</div>
        }
        <div className="d-flex justify-content-between">
          <h2> Your Albums</h2>
          <button
            className={`btn ${
              showForm ? "btn-outline-danger" : "btn-outline-primary"
            }`}
            onClick={() => {
              setIsRename(null);
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Cancel" : "Add Album"}
          </button>
        </div>
        <AlbumList
          albumsList={albumsList}
          handleRenameClick={handleRenameClick}
          handleDlt={handleDlt}
        />
      </div>
    </>
  );
}

export default Gallery;
