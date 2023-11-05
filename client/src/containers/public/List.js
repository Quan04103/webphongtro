
import React, {useEffect, useRef} from 'react';
import { ItemRoom } from '../../components'
import { getPosts, getPostsPage } from '../../store/actions/post';

import { useDispatch, useSelector } from 'react-redux'
const List = ({page}) =>{
    
    const dispatch = useDispatch()
    const listRef = useRef()
    const { posts } = useSelector(state => state.post )
    useEffect(() => {
        let offset = page ? page - 1 : 0
        dispatch(getPostsPage(offset))
        listRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
    },[page])
    
    // console.log(posts);
    // console.log(count);
    return (
       <div>      
            <div ref={listRef} style={styles.room}>
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <ItemRoom
                            key = {item?.id}
                            attributes = {item?.attributes}
                            // images = {JSON.parse(item?.images?.image)}
                            star = {item?.star}
                            title = {item?.title}
                            user = {item?.user}
                            address = {item?.address}
                        />
                    )
                })}
            </div>
            
       </div>
    )
};

const styles = {
    
    room: {
      flex: '40%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  };

export default List