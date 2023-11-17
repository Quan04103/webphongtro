import React, { memo } from 'react';
import { createSearchParams, useNavigate,useSearchParams } from 'react-router-dom';
import { Button, IconButton } from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
const notActive = 'text-base font-bold bg-white  text-black rounded-md'
const active = 'text-base font-bold bg-black   text-white rounded-md'

const PageNumber = ({text,  currentPage, icon,setCurrentPage}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [paramsSeach] = useSearchParams()
    let entries = paramsSeach.entries()

    const append = (entries) => {
        let params = []
        paramsSeach.append('page', +text)
        for (let entry of entries) {
            params.push(entry);
        }
        let searchParamsObject = {}
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0] && item !== 'page')) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        return searchParamsObject
    }
    const handleChangePage = () => {
        if(!(text === '...')){
            setCurrentPage(+text)
            navigate({
                pathname: location?.pathname,
                search: createSearchParams(append(entries)).toString()
            });
        }
   }
   
    return (
        <IconButton 
        className={+text === +currentPage ? active : notActive}
        onClick={ handleChangePage}
        >
            {icon || text}
        </IconButton>
    )
}

export default memo(PageNumber)