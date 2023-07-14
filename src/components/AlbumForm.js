import React from 'react'

function AlbumForm() {
  return (
    <form className='form w-50 p-2'>
        <h2>Create an Album</h2>
        <input type="text" placeholder='Enter album name'/>
        <button type="button" class="m-1 btn btn-success">Create</button>
        <button type="button" class="m-1 btn btn-danger">Clear</button>
    </form>
  )
}

export default AlbumForm