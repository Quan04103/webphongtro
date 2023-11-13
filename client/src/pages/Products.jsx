import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getAccPost} from '../store/actions/post'
import { useEffect, useState } from 'react'
import { apiDeletePost } from '../services'
import Swal from 'sweetalert2'
import { CreatePost } from '../containers/public'
import EditPost from './EditPost'
import { path } from '../ultils/constant'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Products() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getAccPost())
    }, [])

	useEffect(() => {
        
    }, [posts])
	const handleDeleteButton = async (id) => {

		const response = await apiDeletePost(id);
		if(response?.data.err ===0){
			dispatch(getAccPost())
            Swal.fire('Thành công', 'Đã Xoá thành công', 'success').then(() => {
            })
			
        } else {
            Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
        }
		console.log(id)
	}

	
	return (
<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
  <strong className="font-semibold text-4xl">Danh sách phòng đã duyệt</strong>
  <div className="border-x border-gray-200 rounded-sm mt-3">
    <table className="w-full text-gray-700">
      <thead>
        <tr>
          <th className="border border-black px-4 py-2">ID</th>
          <th className="border border-black px-4 py-2">Post title</th>
          <th className="border border-black relative pl-5 px-4 py-2">Customer Name</th>
          <th className="border border-black px-4 py-2">Created Date</th>
          <th className="border border-black px-4 py-2">Post Address</th>
          <th className="border border-black px-4 py-2 text-center">Services</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="border border-black px-4 py-2">
              <Link to={`/order/${post.id}`}>{post.id}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/product/${post.title}`}>{post.title}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/customer/${post.customer_id}`}>{post.user.name}</Link>
            </td>
            <td className="border border-black px-4 py-2">{post.attributes.published}</td>
            <td className="border border-black px-4 py-2">{post.address}</td>
            <td className="border border-black px-4 py-2 text-center">
              <div className="flex">
                <button className="bg-red-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded border border-black" onClick={() => handleDeleteButton(post.id)}>
                  xoá
                </button>
                <NavLink to={`${path.EDITPOST}?idpost=${post.id}`}>
                  <button className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-2 border border-black">
                    sửa
                  </button>
                </NavLink>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



	)
}
