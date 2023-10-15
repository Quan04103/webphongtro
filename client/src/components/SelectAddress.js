import React from 'react';

const SelectAddress = ({label}) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='select_address' className="flex flex-col gap-2 w-full font-bold">{label}</label>
            <select id='select_address' className="outline-none border border-gray-300 p-2 rounded-[5px]">
                <option value="">{`chon ${label}`}</option>
            </select>
        </div>
    )
}
export default SelectAddress;