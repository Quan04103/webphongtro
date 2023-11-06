import React, { useEffect } from 'react'
import { Item } from '../../components'
import { getPosts } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'




const List = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {

        dispatch(getPosts())

    }, [])


    return (
        <div>
            <div style={styles.room}>
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attributes={item?.attributes}
                            description={item?.description}
                            // images={JSON.parse(item?.images?.image)}
                            star={+item?.star}
                            title={item?.title}
                            user={item?.user}
                            id={item?.id}

                        />
                    )
                })}
            </div>
        </div>

    )
}
const styles = {

    room: {
        flex: '40%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
};

export default List