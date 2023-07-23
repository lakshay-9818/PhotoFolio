import React, { useContext, useState, useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import ImageList from "./ImageList";
import ImageForm from "./ImageForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import FadeLoader from "react-spinners/FadeLoader";

// import firebase methods here
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseInit";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

function Album() {
  const [showForm, setShowForm] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { albumId, handleIdChange } = useContext(AlbumContext);
  const [imageList, setImageList] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [guid, setGuid]= useState(null);  // global variable for storing uid
  
  let [loading, setLoading] = useState(false);
  let [miniloading, setMiniLoading] = useState(false);
    
  // retrieve imagesList, album details from db
  const getData = async () => {
    setLoading(true);    
    const albumRef = doc(db, "Albums", albumId);
    const docRef = doc(db, "Images", albumId);
    try {
      const albumData = await getDoc(albumRef);
      setAlbumName(albumData.data().albumName);
      setOwnerName(albumData.data().userName); 

      // get image Object array from db
      const urlArray = (await getDoc(docRef))?.data()?.urls || [];
      setImageList(urlArray);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching data:", error.message);
      // Handle error state or display error message
    }
  };
  useEffect(() => {
    getData();
  }, [imageUrl]);

  
  // upload images
  const handleImageUpload = async (data) => {
    data.preventDefault();
      setMiniLoading(true);
    try {
      const file = data.target[0].files[0];

      if (!file) {
        throw new Error("No file selected");
      }  

      // making unique name for that image(uuid)
      const uuid= uuidv4();

      //saving to storage of firebase
      const imageRef = ref(storage, `Images/${albumId}/${uuid}`);
      await uploadBytes(imageRef, file);

      //getting downloadable url of the img from firebasse storage
      const url = await getDownloadURL(imageRef);

      //saving it all to our urls array in document of collection Images
      const docRef = doc(db, "Images", albumId);
      const urlArray = (await getDoc(docRef))?.data()?.urls || [];
      url && urlArray.push({ uid: uuid, imageUrl:url});  
      await setDoc(docRef, {
        urls: urlArray,
      });  
      setShowForm(false);
      setMiniLoading(false);      
      toast.success(`Image uploaded successfully.`);
      setImageUrl(url);
    } catch (error) {      
      console.log("Upload error:", error.message);
      toast.error(`Error uploading image. Please try again.`);
    }
  };
  
  const dltImage =(uid)=>{
    setGuid(uid);
    setShowModal(true);
  }

  const handleDialog=(choice)=>{    
    setShowModal(false);
    dltImage2(choice);
  }

  //delete image
  const dltImage2 = async (choice) => {
    
    if (choice) {
      const imageRef = doc(db, "Images", albumId);
      const docSnap = await getDoc(imageRef);
      const urlsArray = docSnap.data().urls;
      console.log(urlsArray);
      const updatedArray = urlsArray.filter((imgurl) => imgurl.uid !== guid);
      console.log(updatedArray);
      await updateDoc(imageRef, {
        urls: updatedArray,
      });
      setImageList(updatedArray);
      /******** delete image from storage of firebase */
      const desertRef = ref(storage, `Images/${albumId}/${guid}`);
      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        toast.success(`Image deleted`);
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    }
    setGuid(null);
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
    <div className="m-3">
      <ToastContainer />
      {showForm && <ImageForm handleImageUpload={handleImageUpload} miniloading={miniloading}/>}
      <button className="btn btn-dark" onClick={() => handleIdChange(null)}>
        <i className="bi bi-arrow-return-left px-3"></i>
      </button>

      {showModal &&        
        <div class="modal d-block">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        You won't be able to undo this image deletion?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>handleDialog(false)}>Close</button>
        <button type="button" class="btn btn-primary" onClick={()=> handleDialog(true)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        }

      <div>
        <h1 className="d-inline m-2 p-2">
          Welcome to <strong>"{albumName}"</strong> by{" "}
          <strong>{ownerName}</strong>
        </h1>
        <button
          className={`btn ${
            showForm ? "btn-outline-danger" : "btn-outline-primary"
          }  position-absolute end-0 m-2`}
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Image"}
        </button>
      </div>
      <ImageList imageList={imageList} dltImage={dltImage} />
    </div>
  );
}

export default Album;
