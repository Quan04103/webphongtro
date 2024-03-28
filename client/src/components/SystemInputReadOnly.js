import React from 'react';
import SystemInputBuilder from './SystemInputBuilder';
class SystemInputReadOnlyBuilder extends SystemInputBuilder {
    constructor() {
        super();
        this.props = {
            label: '',
            value: '',
            direction: ''
        };
    }

    setLabel(label) {
        this.props.label = label;
        return this;
    }

    setValue(value) {
        this.props.value = value;
        return this;
    }

    setDirection(direction) {
        this.props.direction = direction;
        return this;
    }

    build() {
        return this.props;
    }
}

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

export { SystemInputReadOnlyBuilder, SystemInputReadOnly };
