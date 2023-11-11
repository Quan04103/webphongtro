import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts} from '../store/actions/post'
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
        dispatch(getPosts())
    }, [])

	useEffect(() => {
        
    }, [posts])
	const handleDeleteButton = async (id) => {

		const response = await apiDeletePost(id);
		if(response?.data.err ===0){
			dispatch(getPosts())
            Swal.fire('Thành công', 'Đã Xoá thành công', 'success').then(() => {
            })
			
        } else {
            Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
        }
		console.log(id)
	}

	
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Room List</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product Name</th>
							<th>Customer Name</th>
							<th>Created Date</th>
							<th>Product Address</th>
							<th>Product Status</th>
							<th>Services</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((posts) => (
							<tr key={posts.id}>
								<td>
									<Link to={`/order/${posts.id}`}>{posts.id}</Link>
								</td>
								<td>
									<Link to={`/product/${posts.title}`}>{posts.title}</Link>
								</td>
								<td >
									<Link to={`/customer/${posts.customer_id}`}>{posts.user.name}</Link>
								</td>
								<td>{(posts.attributes.published)}</td>
								<td>{posts.address}</td>


								<td>{(posts.current_order_status)}</td>
								<td><button class="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteButton(posts.id)}>
									xoá
								</button></td>
								<td><NavLink to={`${path.EDITPOST}?idpost=${posts.id}`}>
									<button class="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
									sửa
								</button></NavLink></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
