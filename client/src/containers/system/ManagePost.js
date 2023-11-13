import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import moment from 'moment'
import { ButtonEdit, UpdatePost } from '../../components'
import { apiDeletePost } from '../../services';
import Swal from 'sweetalert2';

const ManagePost = () => {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const { postOfCurrent, dataEdit } = useSelector(state => state.post)
    const [updateData, setUpdateData] = useState(false)
    const [status, setStatus] = useState('0')
    const [posts, setposts] = useState([])
    useEffect(() => {
        !dataEdit && dispatch(actions.getPostsLimitAdmin())
    }, [dataEdit, updateData])

    useEffect(() => {
        setposts(postOfCurrent)
    }, [postOfCurrent])

    useEffect(() => {
        !dataEdit && setIsEdit(false)
    }, [dataEdit])


    const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString())


    const handleDeletePost = async (postId) => {
        const response = await apiDeletePost(postId)
        console.log(response)
        if (response?.data.err === 0) {
            setUpdateData(prev => !prev)
        } else {
            Swal.fire('Oops!', 'Xóa tin đăng thất bại', 'error')
        }

    }
    useEffect(() => {
        if (status === 1) {
            const activePost = postOfCurrent?.filter(item => checkStatus(item?.overviews?.expired?.split(' ')[3]))
            setposts(activePost)
        } else if (status === 2) {
            const expiredPost = postOfCurrent?.filter(item => !checkStatus(item?.overviews?.expired?.split(' ')[3]))
            setposts(expiredPost)
        } else {
            setposts(postOfCurrent)
        }
    }, [status])
    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-13xl font-medium '>Quản lý tin đăng</h1>
                <select onChange={e => setStatus(+e.target.value)} value={status} className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="0">Lọc theo trạng thái</option>
                    <option value="1">Đang hoạt dộng </option>
                    <option value="2">Đã hết hạn</option>
                </select>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-center text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tiêu đề
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hình
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Giá
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ngày bắt đầu
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ngày hết hạn
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Trạng thái
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tùy chọn
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!posts
                        ? <tr>
                            <td>adadada</td>
                        </tr> : posts?.map(item => {
                            return (
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={item.id}>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                        {item?.overviews?.code}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item?.title}
                                    </td>
                                    <td class="px-6 py-4 flex items-center justify-center">
                                        <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar-post" className='w-10 h-10 object-cover rounded-md' />
                                    </td>
                                    <td class="px-6 py-4">
                                        {item?.attributes?.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item?.overviews?.created}</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item?.overviews?.expired}</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{checkStatus(item?.overviews?.expired?.split(' ')[3]) ? 'Đang hoạt động' : 'Đã hết hạn'}</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <ButtonEdit
                                            text='Sửa'
                                            bgColor=' bg-green-500 shadow-lg shadow-green-500/50 hover:bg-green-600'
                                            className='mx-6'
                                            textColor='text-white'
                                            onClick={() => {
                                                dispatch(actions.editData(item))
                                                setIsEdit(true)
                                            }}
                                        />
                                        <ButtonEdit
                                            text='Xóa'
                                            bgColor='bg-red-400 shadow-lg shadow-red-500/50 hover:bg-red-700'
                                            textColor='text-white'
                                            onClick={() => handleDeletePost(item.id)}
                                        />
                                    </td>
                                </tr>

                            )


                        })}



                </tbody>
            </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>

    )
}

export default ManagePost
