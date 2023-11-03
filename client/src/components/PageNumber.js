import React, { memo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Button, IconButton } from "@material-tailwind/react";

const notActive = 'text-base font-bold bg-white  text-black rounded-md'
const active = 'text-base font-bold bg-black   text-white rounded-md'

const PageNumber = ({text,  currentPage, icon,setCurrentPage}) => {
    const navigate = useNavigate()
   const handleChangePage = () => {
        if(!(text === '...')){
            setCurrentPage(+text)
            navigate({
                pathname: "/",
                search: createSearchParams({
                    page: text
                }).toString()
            });
        }
   }
    return (
        <IconButton className={+text === +currentPage ? active : notActive}
        onClick={() => handleChangePage()}
        >
            {icon || text}
        </IconButton>
    )
}

export default memo(PageNumber)