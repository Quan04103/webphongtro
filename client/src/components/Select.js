import React,{memo} from 'react'

const Select = ({label,options,value, setValue, type, reset, name, invalidFields, setInvalidFields}) => {

  const handleErrorText = () => {
    let nameInvalid = invalidFields?.find(item => item.name === name)
    let addressInvalid = invalidFields?.find(item => item.name === "address")

    return `${nameInvalid ? nameInvalid?.massage : ''}` || `${addressInvalid ? addressInvalid?.massage : ''}`
  }

  return (
    <div className="flex flex-col gap-2 flex-1 mt-4">
      <label className='font-semibold' htmlFor="select-address">{label}</label>
      <select value={reset ? '' : value} 
        onChange={(e) => {
        !name ? setValue(e.target.value) : setValue(prev => ({...prev, [name]: e.target.value}))
        }
        } 
        onFocus = {() => setInvalidFields([])}
      
        id="select-address" className="outline-none border border-gray-400 py-1 px-2 w-full rounded-md">
        <option value="">{`--Chọn ${label}`}</option>
        {options?.map(item => {
          return (
            <option
              key={type === 'province' ? item.province_id : type === 'district' ? item.district_id : type === 'ward' ? item.ward_id : item?.code}
              value={type === 'province' ? item.province_id : type === 'district' ? item.district_id : type === 'ward' ? item.ward_id : item?.code}
            >
              {type === 'province' ? item.province_name : type === 'district' ? item.district_name : type === 'ward' ? item.ward_name : item?.value}
            </option>
          )
        })}
      </select>
      {invalidFields && 
        <small className="text-red-500 italic">
          {handleErrorText()}
        </small>
      }
    </div>
  )
}

export default memo(Select)