import React from 'react'
import "../"
import ImageTile from './ImageTile'
function ImageList() {
  return (
    <div className='border d-flex flex-wrap justify-content-start'>
      <ImageTile/>
      <ImageTile/>
      <ImageTile/>
      <ImageTile/>
      <ImageTile/>
      <ImageTile/>
      <ImageTile/>
    </div>
  )
}

export default ImageList