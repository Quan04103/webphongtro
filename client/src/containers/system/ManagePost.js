import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import moment from 'moment'
import { ButtonEdit, Item, UpdatePost } from '../../components'




const ManagePost = () => {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const { postOfCurrent } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin())
    }, [])
    // useEffect(() => {
    //     !dataEdit && setIsEdit(false)
    // }, [dataEdit])
    const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString())

    return (
        <div className='flex-col gap-6 h-screen relative'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Quản lý tin đăng</h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="">Lọc theo trạng thái</option>
                </select>
            </div>
                <table className='min-w-full text-center text-sm font-light'>
                    <thead
                        className='border-b bg-black font-medium text-white dark:border-neutral-500 dark:bg-neutral-900'>
                        <tr>
                            <th scope='col' className='px-6 py-4'>#</th>
                            <th scope='col'className='px-6 py-4'>Ảnh đại diện</th>
                            <th scope='col'className='px-6 py-4'>Tiêu đề</th>
                            <th scope='col'className='px-6 py-4'>Giá</th>
                            <th scope='col'className='px-6 py-4'>Ngày bắt đầu</th>
                            <th scope='col'className='px-6 py-4'>Ngày hết hạng</th>
                            <th scope='col'className='px-6 py-4'>Trạng thái</th>
                            <th scope='col'className='px-6 py-4'>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!postOfCurrent
                            ? <tr>
                                <td>adadada</td>
                            </tr>
                            : postOfCurrent?.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className='whitespace-nowrap  px-6 py-4 font-medium'>{item?.overviews?.code}</td>
                                        <td className='whitespace-nowrap flex items-center justify-center px-6 py-4 font-medium'>
                                            <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar-post" className='w-10 h-10 object-cover rounded-md' />
                                        </td>
                                        <td className='whitespace-nowrap items-center justify-center px-6 py-4'>{item?.title} </td>
                                        <td className='whitespace-nowrap items-center justify-center px-6 py-4'>{item?.attributes?.price}</td>
                                        <td className='whitespace-nowrap items-center justify-center px-6 py-4'>{item?.overviews?.created}</td>
                                        <td className='whitespace-nowrap items-center justify-center px-6 py-4'>{item?.overviews?.expired}</td>
                                        <td className='whitespace-nowrap items-center justify-center px-6 py-4'>
                                            {checkStatus(item?.overviews?.expired?.split(' ')[3]) ? 'Đang hoạt động' : 'Đã hết hạn'}
                                        </td>
                                        <td className='whitespace-nowrap px-6 py-4 flex items-center justify-center'>
                                            <ButtonEdit
                                                text='Sửa'
                                                bgColor=' bg-green-500 shadow-lg shadow-green-500/50 hover:bg-green-600'
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
                                            />
                                        </td>
                                    </tr>
                                )

                            })}
                    </tbody>
                </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit}/>}
        </div>
    )
}

export default ManagePost
