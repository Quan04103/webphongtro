import React, { useEffect, useState } from 'react';
import { PageNumber } from '../../components';
import { UseSelector, useSelector } from 'react-redux';
import icons from '../../ultils/icons';
import { FlagIcon } from '@heroicons/react/24/outline';

const {GrLinkNext,GrLinkPrevious} = icons

const Pagination =({page}) => {
    // number lấy từ url ở trang Home
    const {count, posts } = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(+page)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)



    useEffect(() => {
        let maxPage = Math.floor(count/ posts.length)
        let end = (currentPage +1) > maxPage ? maxPage : (currentPage +1)
        let start = (currentPage -1) <=0 ? 1 : (currentPage -1)
        let temp = []
        for(let i = start; i <= end; i++) temp.push(i)
        setArrPage(temp)
        currentPage >= (maxPage -1 ) ? setIsHideEnd(true) : setIsHideEnd(false)
        currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)


        

    },[count, posts,currentPage])
    
    
    return (
        <div className='flex items-center justify-center gap-3'>
            {!isHideStart && <PageNumber setCurrentPage={setCurrentPage}
                icon={<GrLinkPrevious/>} text={1} />}
            {!isHideStart && <PageNumber text={'...'}/>}
            {arrPage.length > 0 && arrPage.map(item => {
                return (
                    <PageNumber
                        key = {item}
                        text = {item}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                       
                    />
                )
            })}
            {!isHideEnd && <PageNumber text={'...'}/>}
            {!isHideEnd && <PageNumber 
                setCurrentPage={setCurrentPage}
                icon={<GrLinkNext/>} text={Math.floor(count/ posts.length)} />}

            
            

        </div>
    )
}

export default Pagination