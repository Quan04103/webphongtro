import React, { memo } from 'react'


const Button = ({ text, textColor, bgColor, onClick, px, bgColorhv }) => {
    return (
        <button
            type='button'
            className={`py-2 ${px ? px : 'px-[1rem]'}  ${textColor} outline-none rounded-md font-semibold ${bgColor} hover:${bgColorhv}`}
            onClick={onClick}
        >
            <span> {text}</span>
            

        </button>
    )
}

export default memo(Button)