import React from 'react'
import "../"
import ImageTile from './ImageTile'
function ImageList() {
  const images=["khgd","fgdjyf","KUYG"];

  return (
    <div className='border d-flex flex-wrap justify-content-start'>
      
      {images.map((image) => (
        <ImageTile
         image={image}
         />
      ))}
    </div>
  )
}

export default ImageList