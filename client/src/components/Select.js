import React from "react";

const Select = ({label}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="select-address" className="post_text_h2">{label}</label>
            <select id="select-address" className="outline-none border border-gray-300 p-2 rounded-[5px]">
                <option >{`Chọn ${label}`}</option>
            </select>
        </div>
    )
}

export default Select