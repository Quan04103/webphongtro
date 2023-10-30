import React, {useEffect,useState} from 'react'
import { Sitem } from './index'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions'

const RelativePost = ({newPost}) => {
  const {newPosts, outstandingPosts } = useSelector(state => state.post)
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  // const [newPosts, setnewPosts] = useState(second)
  useEffect(() => {
    newPost ? dispatch(actions.getNewPosts()) : dispatch(actions.getOutstandingPosts())
  },[])

  useEffect(() => {
    newPost ? setPosts(newPosts) : setPosts(outstandingPosts)
  },[newPosts,outstandingPosts])
  return (
    <div className="w-full rounded-lg p-4 bg-white border cursor-pointer">
      <h3 className="text-lg font-semibold pb-2">{newPost ? 'Tin mới đăng' : 'Tin nổi bật'}</h3>
      <div className="flex flex-col gap-2"> 
        {posts.length > 0 && posts?.filter(post => post.status ==='checked')?.map(item => {
          return (
            <Sitem 
              key={item?.id}
              title={item?.title}
              price={item?.attributes?.price}
              createAt= {item?.createdAt}
              image={JSON.parse(item?.images?.image)}
              overviews={item?.overviews}
              id={item?.id}
              star={item?.star}
            />
          )
        }) }

      </div>
      </div>
  )
}

export default RelativePost