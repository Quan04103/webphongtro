import React, { memo } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const notActive = "px-[18px] py-[10px] bg-white hover:bg-gray-300 rounded-md cursor-pointer"
const active = "px-[18px] py-[10px] text-white bg-[#e13427] rounded-md cursor-pointer"

const PageNumber = ({ text, currentPage, icon, setCurrentPage, type }) => {

  const navigate = useNavigate()
  const [paramsSearch] = useSearchParams()
  let entries = paramsSearch.entries()
  // console.log(entries);
  const location = useLocation()

  const append = (entries) => {
    let params = []
    paramsSearch.append('page', +text)
    for (const entry of entries) {
      params.push(entry)
    }
    let searchPanramsObject = {}
    params?.forEach(i => {
      if (Object.keys(searchPanramsObject)?.some(item => item === i[0] && item !== 'page')) {
        searchPanramsObject[i[0]] = [...searchPanramsObject[i[0]], i[1]]
      } else {
        searchPanramsObject = { ...searchPanramsObject, [i[0]]: [i[1]] }
      }
    })


    return searchPanramsObject
  }

  const handleChangePage = () => {
    if (!(text == '..')) {
      setCurrentPage(+text)
      navigate({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString()
      })

    }
  }

  return (
    <div className={+text === +currentPage ? active : notActive}
      onClick={handleChangePage}

    >
      {icon || text}
    </div>
  )
}

export default memo(PageNumber)