import React, { useEffect, useState } from 'react';
import { PageNumber } from '../../components';
import { UseSelector, useSelector } from 'react-redux';
import icons from '../../ultils/icons';
import { FlagIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'react-router-dom'

const {GrLinkNext,GrLinkPrevious} = icons

const Pagination =({page}) => {
    // page lấy từ url ở trang Home
    const {count, posts } = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        let page = searchParams.get('page')
        page && +page !== currentPage && setCurrentPage(+page)
        !page && setCurrentPage(1)
    }, [searchParams])
    useEffect(() => {
        let maxPage = Math.ceil(count / 12) //12 là số post trong 1 page
        let end = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
        let start = (currentPage - 2) <= 1 ? 1 : (currentPage - 2)
        let temp = []
        for (let i = start; i <= end; i++) temp.push(i)
        setArrPage(temp)
        currentPage >= (maxPage - 2) ? setIsHideEnd(true) : setIsHideEnd(false)
        currentPage <= 3 ? setIsHideStart(true) : setIsHideStart(false)
        
    },[count, posts,currentPage])
    
    return (
        <div className='flex items-center justify-center gap-3'>
            {!isHideStart && <PageNumber setCurrentPage={setCurrentPage} text={1} />}
            {(!isHideStart && currentPage !== 4) && <PageNumber text={'...'} />}
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
            {!isHideEnd && <PageNumber text={'...'} />}
            {!isHideEnd && <PageNumber icon={<GrLinkNext />} setCurrentPage={setCurrentPage} text={Math.ceil(count / posts.length)} />}
        </div>
    )
}

export default Pagination