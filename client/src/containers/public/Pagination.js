import React, { useState, useEffect } from 'react'
import { PageNumber } from '../../components'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'



const Pagination = ({ isAdmin }) => {
    const { count, posts } = useSelector(state => state.post)
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
    const countPerPage = isAdmin ? process.env.REACT_APP_LIMIT_POSTS_ADMIN : process.env.REACT_APP_LIMIT_POSTS

    useEffect(() => {
        let maxPage = Math.ceil(count / +countPerPage)
        let end = (currentPage + 1) > maxPage ? maxPage : (currentPage + 1)
        let start = (currentPage - 1) <= 0 ? 1 : (currentPage - 1)
        let temp = []
        for (let i = start; i <= end; i++) temp.push(i)
        setArrPage(temp)
        currentPage >= (maxPage - 1) ? setIsHideEnd(true) : setIsHideEnd(false)
        currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)

        // console.log(isHideStart);
    }, [count, posts, currentPage])
    // console.log(arrPage);
    // console.log(currentPage);
    // icon ='<<'
    return (
        <div className="flex items-center justify-center gap-2 mt-5">
            {!isHideStart && <PageNumber setCurrentPage={setCurrentPage} text={1} />}
            {!isHideStart && <PageNumber text='..' />}
            {arrPage.length > 0 && arrPage.map(item => {
                return (
                    <PageNumber
                        key={item}
                        text={item}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                )
            })}
            {!isHideEnd && <PageNumber text='..' />}
            {!isHideEnd && <PageNumber icon='>>' setCurrentPage={setCurrentPage} text={Math.ceil(count / +countPerPage)} />}


        </div>
    )
}

export default Pagination