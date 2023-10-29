import React from 'react'

const InputFormV2 = ({ label, unit, value, setValue, name, small, invalidFields, setInvalidFields, direction }) => {
    return (
        <div className={`flex ${direction ? direction:'flex-col'}`}>
            <label className='w-48 flex-none' htmlFor="title">{label}</label>
            <div className='flex flex-auto flex-col items-center'>
               <div className='flex w-full items-center'>
               <input
                    type="text"
                    id=" title"
                    className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} outline-none border flex-auto  border-gray-300 p-2`}
                    value={value}
                    onChange={(e) => setValue(prev => ({ ...prev, [name]: e.target.value }))}
                    onFocus={() => setInvalidFields && setInvalidFields([])}
                />
                {unit && <span className='p-2 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md bg-gray-200'>{unit}</span>}
               </div>
                {small && <small className='opacity-70 whitespace-nowrap'>{small}</small>}
            {invalidFields?.some(item => item.name === name) && <small className='text-red-500 block w-full'>
                {invalidFields?.find(item => item.name === name)?.message}
            </small>}

            </div>
        </div>
    )
}

export default InputFormV2