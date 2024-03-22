import React, { useState, useEffect } from "react"
import anonavatar from "../assets/anonavatar.png"
import { InputReadOnly, InputFormV2, Button } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { apiUpdateUser } from '../services'
import { fileToBase64, blobToBase64 } from "../ultils/Common/tobase64"
import { getCurrent } from '../store/actions'
import Swal from "sweetalert2"
import { useLocation } from "react-router-dom"
import { apiGetOneUser } from "../services"
import withInputValidation from "../DesignPattern/DecoratorDP/SubmitDecorator"

const EditUser = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const iduser = searchParams.get("iduser");
    
    useEffect(() => {
        // Thực hiện các công việc cần thiết với idpost
        console.log("Id của bài viết:", iduser);
      }, [iduser]);


      useEffect(() => {
        const handleGetUser = async () => {
            const response = await apiGetOneUser(iduser)
            if (response?.data.err === 0) {
                console.log(response)
            }
            else {
                console.log('fail')
            }
        }
        handleGetUser();
      }, []);


    const [currentData, setCurrentData] = useState()
    const dispatch = useDispatch()
    
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        // avatar: blobToBase64(currentData?.avatar) || '',
        fbUrl: currentData?.fbUrl || '',
        zalo: currentData?.zalo || ''
    })
    const handleSubmit = async () => {
        console.log(payload.name);
        if(payload.name.trim() === ''){ // Kiểm tra nếu tên là chuỗi rỗng hoặc chỉ gồm khoảng trắng
            Swal.fire('Fail', 'Vui lòng nhập tên', 'error'); // Thông báo lỗi
            return; // Dừng việc xử lý tiếp theo
        }

        const response = await apiUpdateUser(payload); // Gửi yêu cầu cập nhật lên máy chủ
        if (response?.data.err === 0) { // Kiểm tra kết quả trả về từ máy chủ
            Swal.fire('Done', 'Chỉnh sửa thành công', 'success').then(() => {
                dispatch(getCurrent());
            });
        } else {
            Swal.file('Oops!', 'Chỉnh sửa thất bại', 'err');
        }
    }
   
    const handleUploadFile = async (e) => {
        const imageBase64 = await fileToBase64(e.target.files[0])
        setPayload(pre => ({
            ...pre,
            avatar: imageBase64
        }))

    }

    return (
        <div className="flex flex-col gap-10 bg-white p-7 w-full h-screen">
            <h1 className='text-13xl font-bold py-4 h-[69px] flex-none border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-1/2 flex items-center justify-center flex-auto'>
                <div className=' py-6 flex flex-1/3 flex-col gap-5 w-full'>
                    <InputReadOnly value={`#${currentData?.id?.match(/\d/g).join('')?.slice(0, 6)}` || ''} direction='flex-row text-center' label="Mã thành viên" />
                    <InputReadOnly value={currentData?.phone} editPhone direction='flex-row text-center' label="Số điện thoại" />

                    <InputFormV2
                        name='name'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.name}
                        label='Tên hiển thị' />
                    {/* <InputFormv2
                        name='Email'
                        // setValue={}
                        direction='flex-row'
                        label='Email' /> */}

                    <InputFormV2
                        name='zalo'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.zalo}
                        label='Zalo' />

                    <InputFormV2
                        name='fbUrl'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.fbUrl}
                        label='Facebook' />

                    <div className='flex'>
                        <label className='w-48 flex-none' htmlFor="Password">Mật khẩu</label>
                        <small className='flex-auto text-blue-500 h-12 cursor-pointer'>Đổi mật khẩu</small>
                    </div>
                    <div className='flex mb-6 '>
                        <label className='w-48 flex-none' htmlFor="avatar">Ảnh đại diện</label>
                        <div>
                            <img src={payload.avatar || anonavatar} alt="avatar" className='w-28 h-28 rounded-full border-collapse border-2 object-cover' />
                            <input onChange={handleUploadFile} type="file" className="appearance-none my-4" id="avatar" />
                        </div>
                    </div>

                    <Button text='Cập nhật'
                        bgColor='bg-blue-600'
                        textColor='text-white'
                        onClick={handleSubmit}></Button>
                </div>
            </div>
        </div>
    )
}


export default EditUser