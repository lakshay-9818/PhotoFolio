import React from 'react'
import ImageList from './ImageList'
import ImageForm from './ImageForm'

function Album({album_id}) {
  return (
    <div className="m-3">        
        <ImageForm/>
        <div>Images in album with id {album_id}<button>add image</button></div>
        <ImageList/>
    </div>
  )
}

export default Album