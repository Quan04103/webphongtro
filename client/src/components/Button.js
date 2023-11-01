import React, { memo } from "react"

const Button = ({text, textColor, bgColor, IcAfter, onClick, fullwidth, width}) => {
  return (
    <button
      type='button'
      className={`p-2 ${textColor} ${bgColor} ${fullwidth && 'w-full'} ${width} 
      ouline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
      >
        <span>
          {text}
        </span>
        <span>
          {IcAfter && <IcAfter/>}
        </span>
    </button>
  )
}

export default memo(Button)
