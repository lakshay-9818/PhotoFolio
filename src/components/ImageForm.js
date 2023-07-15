import React from "react";

function ImageForm({ handleImageUpload}) {
  // const handleClick = async (data) => {
  //   data.preventDefault();
  //   const file = data?.target[0]?.files[0];
  //   if (!file) return;
  //   const imageRef = ref(storage, `Images/${file?.name}`);
  //   try {
  //     const uploadedImage = await uploadBytes(imageRef, file);
  //     //uploadedImage && alert("Image Uploaded");
  //     const url = await getDownloadURL(imageRef);
  //     handleImageUpload(url);
  //   } catch (error) {
      
  //     console.log(" upload error", error.message);
  //   }
  // };

  return (
    <form className="form w-50 p-2" onSubmit={handleImageUpload}>
      <h2>Add new Image</h2>
      <input type="file" />
      <button type="submit" className="btn btn-success">
        Upload
      </button>
      <button type="reset" className="btn btn-danger">
        Clear
      </button>

    </form>
  );
}

export default ImageForm;
