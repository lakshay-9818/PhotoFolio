import React, { useContext, useState,useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import ImageList from "./ImageList";
import ImageForm from "./ImageForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {v4 as uuidv4} from "uuid";
// import firebase methods here
import { doc, getDoc, setDoc ,updateDoc} from "firebase/firestore";
import { db,storage } from "../firebaseInit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


function Album() {
  const [showForm, setShowForm] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { albumId, handleIdChange } = useContext(AlbumContext);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getData();
  }, [imageUrl]);

  //retrieve imagesList from db
  const getData = async () => {
    const docRef = doc(db, "Images", albumId);
    const urlArray = (await getDoc(docRef))?.data()?.urls || [];
    imageUrl && urlArray.push({uid:uuidv4(), imageUrl});
    await setDoc(docRef, {
      urls: urlArray
    });
    setImageList(urlArray);    
  };

  //upload images
   const handleImageUpload = async (data) => {
    data.preventDefault();
    const file = data?.target[0]?.files[0];
    if (!file) return;
    const imageRef = ref(storage, `Images/${file?.name}`);
    try {
      const uploadedImage = await uploadBytes(imageRef, file);
      //uploadedImage && alert("Image Uploaded");
      const url = await getDownloadURL(imageRef);
      setShowForm(false);
      setImageUrl(url);
      toast.success("image uploaded successfully.");
    } catch (error) {      
      console.log(" upload error", error.message);
    }
  };

  //delete images
  const dltImage= async(uid)=>{
    /****todo  */
    const imageRef = doc(db, "Images", albumId);
    const docSnap = await getDoc(imageRef);
    const urlsArray= docSnap.data().urls;
    console.log(urlsArray);
    const updatedArray=urlsArray.filter((imgurl)=>imgurl.uid!==uid);
    console.log(updatedArray);
    await updateDoc(imageRef, {
      urls:updatedArray
    });
    setImageList(updatedArray);
    /********todo: delete image from storage of firebase */
    toast.success(`image deleted ${uid}`)
  }
  return (
    <div className="m-3">
      <ToastContainer/>
      {showForm && <ImageForm
       handleImageUpload={handleImageUpload}/> }
       <button className="btn btn-dark" onClick={() => handleIdChange(null)}><i className="bi bi-arrow-return-left px-3"></i></button>
      
      <div>
        Images in album with id {albumId}
        <button
          className={`btn ${
            showForm ? "btn-outline-danger" : "btn-outline-primary"
          }`}
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Image"}
        </button>
      </div>
      <ImageList imageList={imageList}
       dltImage={dltImage} />
    </div>
  );
}

export default Album;
