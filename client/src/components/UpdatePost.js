import React from 'react'
import { CreatePost } from '../containers/system'


const UpdatePost = ({ setIsEdit }) => {
  return (
    <div
      className='absolute bg-overlay-30 top-0 left-0 right-0 bottom-0 flex justify-center'
      onClick={e => {
        e.stopPropagation()
        setIsEdit(false)
      }}
    >
      <div className='bg-white w-3/4 h-auto overflow-y-auto'
        onClick={e => e.stopPropagation()}
      >
        < CreatePost isEdit />
      </div >
    </div >
  )
}
export default UpdatePost