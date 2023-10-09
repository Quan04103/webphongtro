import React, {memo} from 'react'

export const InputForm = ( {label, boder}) => {
  return (
    <div>
      <label htmlFor='phone' className='text-xs'>{label}</label>
      <input type='text' id='phone' className='outline-none bg-[#ffffff] p-2 rounded-md w-full border border-black-500'/>
    </div>
  )
}
export default memo(InputForm)