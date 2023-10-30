import React, {memo} from 'react'

const SearchItem = ({IconBefore, IconAfter, text, fontWeight, defaultText}) => {
  // console.log(text)
  const lastText = text?.replace(',', '')
  return (
    <div className = "bg-[#ffffff] py-1 px-2 w-full rounded-md text-gray-400 text-sm flex justify-between items-center">
        <div className = "flex items-center gap-1 w-full">
            {IconBefore}
            <span className = {`${fontWeight && 'font-medium text-black'} w-[100px] ${text ? 'font-bold text-black' : ''} overflow-hidden text-ellipsis whitespace-nowrap `}>{lastText || defaultText}</span>
            
        </div>
        {IconAfter}
    </div>
  )
}

export default memo(SearchItem)