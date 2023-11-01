import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { SelectAddress } from '../../components';
import { path } from '../../ultils/constant'
// import Footer from './Footer'
import {
    Card,
    Input,
    Typography,
    ButtonGroup, Button,
    Select, Option,
    Popover, PopoverHandler, PopoverContent


} from '@material-tailwind/react';

import {
    CameraIcon

} from "@heroicons/react/24/outline"
const ManagePost = () => {
    return (
        <div className="flex flex-col gap-10 bg-white p-7 w-full h-screen  ">
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3x1 font-medium ' >Quản lý tin đăng</h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md'>
                    <option value="">Lọc theo trạng thái</option>
                </select>
            </div>
            <div className="flex flex-col gap-10 bg-white p-7 w-full h-screen ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead
                                    className="border-b bg-black font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Ảnh đại diện</th>
                                        <th scope="col" className="px-6 py-4">Tiêu đề</th>
                                        <th scope="col" className="px-6 py-4">Giá</th>
                                        <th scope="col" className="px-6 py-4">Ngày bắt đầu</th>
                                        <th scope="col" className="px-6 py-4">Ngày hết hạng</th>
                                        <th scope="col" className="px-6 py-4">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap  px-6 py-4">
                                            <img class="h-40 w-auto m-auto" src="https://xaynhachothue.vn/wp-content/uploads/2019/10/Nh%C3%A0-C%E1%BB%A7a-M%C3%ACnh-Thi%E1%BA%BFt-k%E1%BA%BF-c%C4%83n-h%E1%BB%99-mini-cho-thu%C3%AA-Anh-H%E1%BA%ADu-Qu%E1%BA%ADn-10-2-1024x768.jpg" alt="Your Company"></img>
                                        </td>
                                        <td className="whitespace-nowrap  px-6 py-4">Cho thuê nhà </td>
                                        <td className="whitespace-nowrap  px-6 py-4">3.000.000đ/thang</td>
                                        <td className="whitespace-nowrap  px-6 py-4">18-10-2023</td>
                                        <td className="whitespace-nowrap  px-6 py-4">18-11-2023</td>
                                        <td className="whitespace-nowrap  px-6 py-4">còn thời hạn</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap  px-6 py-4">
                                            <img class="h-40 w-auto m-auto" src="https://xaynhachothue.vn/wp-content/uploads/2019/10/Nh%C3%A0-C%E1%BB%A7a-M%C3%ACnh-Thi%E1%BA%BFt-k%E1%BA%BF-c%C4%83n-h%E1%BB%99-mini-cho-thu%C3%AA-Anh-H%E1%BA%ADu-Qu%E1%BA%ADn-10-2-1024x768.jpg" alt="Your Company"></img>
                                        </td>
                                        <td className="whitespace-nowrap  px-6 py-4">Cho thuê nhà </td>
                                        <td className="whitespace-nowrap  px-6 py-4">3.000.000đ/thang</td>
                                        <td className="whitespace-nowrap  px-6 py-4">18-10-2023</td>
                                        <td className="whitespace-nowrap  px-6 py-4">18-11-2023</td>
                                        <td className="whitespace-nowrap  px-6 py-4">còn thời hạn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManagePost
