import React, { memo } from "react"

const ButtonEdit = ({ text, textColor, bgColor, IcAfter, onClick, fullwidth, width }) => {
    return (
        <button
            type='button'
            className={`p-2 ${textColor} ${bgColor} ${fullwidth && 'w-full'} ${width} 
                     inline-block rounded-full px-6 pb-2 pt-2.5 mx-1 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ]`}
            onClick={onClick}
        >
            <span>
                {text}
            </span>
           
             {IcAfter &&  <span><IcAfter /></span>}
       
        </button>
    )
}

export default memo(ButtonEdit)