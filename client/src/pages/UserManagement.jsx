import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getAccPost} from '../store/actions/post'
import { useEffect, useState } from 'react'
import { apiDeleteUser } from '../services'
import Swal from 'sweetalert2'
import { CreatePost } from '../containers/public'
import EditPost from './EditPost'
import { path } from '../ultils/constant'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { getUser } from '../store/actions'

export default function UserManagement() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    const { users } = useSelector(state => state.user)

  useEffect(() => {
        dispatch(getUser())
        console.log(users)
    }, [])

	useEffect(() => {
        
    }, [users])

	const handleDeleteButton = async (id) => {
    console.log(id)
		const response = await apiDeleteUser(id);
		if(response?.data.err ===0){
			dispatch(getUser())
            Swal.fire('Thành công', 'Đã Xoá thành công', 'success').then(() => {
            })
			
        } else {
            Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
        }
		console.log(id)
	}
    console.log(users)
	
	return (
<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
  <strong className="font-semibold text-4xl">Danh sách khách hàng</strong>
  <div className="border-x border-gray-200 rounded-sm mt-3">
    <table className="w-full text-gray-700 border border-black">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-black px-4 py-2">ID</th>
          <th className="border border-black px-4 py-2">Customer name</th>
          <th className="border border-black px-4 py-2">Phone</th>
          <th className="border border-black px-4 py-2">Created date</th>
          <th className="border border-black px-4 py-2">Services</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border border-black px-4 py-2">
              <Link to={`/order/${user.id}`}>{user.id}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/product/${user.name}`}>{user.name}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/customer/${user.phone}`}>{user.phone}</Link>
            </td>
            <td className="border border-black px-4 py-2">{user.createdAt}</td>
            <td className="border border-black px-4 py-2 flex justify-center">
              <button className="bg-red-300 hover:bg-red-800 text-white font-bold py-2 px-4 rounded border border-black mr-2" onClick={() => handleDeleteButton(user.id)}>
                xoá
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

	)
}
