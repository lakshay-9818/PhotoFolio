import React from 'react'

function AlbumForm() {
  return (
    <div className='w-50 p-2 bg-secondary'>
        <h2>Create an Album</h2>
        <input type="text" placeholder='Enter album name'/>
        <button type="button" class="btn btn-success">Create</button>
        <button type="button" class="btn btn-danger">Clear</button>
    </div>
  )
}

export default AlbumForm