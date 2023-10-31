import React, { useEffect } from 'react'
import { Item } from '../../components'
import { getPosts } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '@material-tailwind/react'

 
const List = () =>{

    const dispatch = useDispatch()
    const { posts } =   useSelector(state => state.post)
    useEffect(() => {

        dispatch(getPosts())

    }, [])


    return (      
            <div  /*style={liststyle.items}*/ className='items' >
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
       
    )
}
// const liststyle= {
    
//     items: {     
//         display: 'flex',
//         flex: '1 0 33.333333%',
//         padding: '10px',
      
    
//     },
// };
export default List