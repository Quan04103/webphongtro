import React,{memo} from 'react'
import {useNavigate, createSearchParams} from 'react-router-dom'
import { path } from '../ultils/constant'

const ProvinceBtn = ({name, image, query, url}) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    const titleSearch = `Cho thuê ${name}, mới nhất, giá rẻ !`
    console.log(query)
    navigate({
      // pathname: url,
      search: createSearchParams(query).toString(),

    }, { state: { titleSearch } })
  }
  return (
    <div className="cursor-pointer"
      onClick={handleOnClick}
    >
      <img 
        src = {image} alt= {name} 
        className="w-[190px] h-[110px] object-cover rounded-tl-lg rounded-tr-lg shadow-lg"
      />
      <p 
        className="font-medium text-blue-600 p-2 flex justify-center rounded-bl-lg rounded-br-lg bg-white hover:text-orange-500">
        {name} 
      </p>
    </div>
  )
}

export default memo(ProvinceBtn)