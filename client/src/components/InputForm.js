import React, {memo} from 'react'
const InputForm = ( {value, setValue, keyOb,type, render}) => {
  return (
    <div>
      {render && render()}
      <input
        className='block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        type={type || 'text'}
        id='phone'
        value={value}
        onChange={(e) => setValue(prev => ({...prev, [keyOb] : e.target.value}))}
      />
      
    </div>
  )
}

export default memo(InputForm)