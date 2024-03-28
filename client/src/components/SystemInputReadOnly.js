import React from 'react';

// Hàm builder để tạo ra các props cho SystemInputReadOnly
const buildSystemInputReadOnlyProps = (label, value, direction) => {
    return {
        label,
        value,
        direction
    };
};

const SystemInputReadOnly = ({ label, value, direction }) => {
    return (
        <div className={`flex ${direction ? direction : 'flex-col gap-3'}`}>
            <label className='font-semibold w-48 items-center flex' htmlFor="exactly-address">{label}</label>
            <div className='flex-auto'>
                <input
                    type='text'
                    id='exactly-address'
                    readOnly
                    className='border border-gray-200 outline-none rounded-[5px] p-2 w-full'
                    value={value || ''}
                />
            </div>
        </div>
    );
};

export { SystemInputReadOnly, buildSystemInputReadOnlyProps };
