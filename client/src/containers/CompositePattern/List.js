import React, { useEffect, useRef } from 'react'
 
import { getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PostList from './PostList' // Đảm bảo đường dẫn và tên tệp là chính xác
import PostItem from './PostItem' // Đảm bảo đường dẫn và tên tệp là chính xác
import { Item } from '../../components'
const List = ({ categoryCode }) => {
    const dispatch = useDispatch();
    const listRef = useRef();
    const location = useLocation();
    const { posts } = useSelector(state => state.post);

    useEffect(() => {            
        const params = new URLSearchParams(location.search);
        const searchParamsObject = Object.fromEntries(params);

        if (categoryCode) {
            searchParamsObject.categoryCode = categoryCode;
        }

        dispatch(getPostsLimit(searchParamsObject));
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [location.search, categoryCode, dispatch]);

    const postList = new PostList(categoryCode);
    posts?.filter(item => item?.status === 1).forEach(item => {
        const postItem = new PostItem(item);
        postList.add(postItem);
    });

    return (
        <div>      
            <div ref={listRef} className='grid grid-cols-1 md:grid md:grid-cols-3 md:px-[5rem]'>
                {postList.displayInfo()}
            </div>
        </div>
    );
};

export default List