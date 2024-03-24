import React from 'react'

const InputReadOnly = ({ label, value, direction, editPhone }) => {
    return (
        <div className={`flex ${direction ? direction : 'flex-col gap-3'}`}>
            <label className='font-semibold w-48 items-center flex' htmlFor="exactly-address">{label}</label>
            <div className='flex-auto'>
                <input
                    type='text'
                    id='exactly-address'
                    readOnly
                    className='border border-gray-200 outline-none border border-gray-300 rounded-[5px] p-2 w-full'
                    value={value || ''}
                />

            </div>
            {/* <div className='flex'>{editPhone && <small className='text-blue-500 py-4 cursor-pointer'>Đổi số điện thoại</small>}</div> */}
        </div>
    )
}

export default InputReadOnly