import React, { useState } from "react"
import anonavatar from "../../assets/anonavatar.png"
import { InputReadOnly, InputFormv2, Button } from '../../components'
import { useSelector } from 'react-redux'
import {  apiUpdateUser } from '../../services'
import { fileToBase64 } from "../../ultils/Common/tobase64"
const EditAccount = () => {
    const { currentData } = useSelector(state => state.user)
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        avatar: currentData?.avatar,
        fbUrl: currentData?.fbUrl || '',
        zalo: currentData?.zalo || ''
    })
    const handleSubmit = async() => {
     const response = await apiUpdateUser(payload)
       console.log(response)
        
    }
    const handleUploadFile = async (e) => {
       const imageBase64 = await fileToBase64(e.target.files[0])
       setPayload(pre => ({
        ...pre,
        avatar: imageBase64
       }))

    }

    return (
        <div className="flex flex-col gap-10 bg-white p-7 w-full h-screen  items-center">
            <h1 className='text-3xl font-medium py-4 h-[69px] flex-none border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-1/2 flex items-center justify-center flex-auto'>
                <div className=' py-6 flex flex-col gap-4 w-full'>
                    <InputReadOnly value={`#${currentData?.id?.match(/\d/g).join('')?.slice(0, 6)}` || ''} direction='flex-row' label="Mã thành viên" />
                    <InputReadOnly value={currentData?.phone} editPhone direction='flex-row' label="Số điện thoại" />

                    <InputFormv2
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

                    <InputFormv2
                        name='zalo'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.zalo}
                        label='Zalo' />

                    <InputFormv2
                        name='fbUrl'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.fbUrl}
                        label='Facebook' />

                    <div className='flex'>
                        <label className='w-48 flex-none' htmlFor="Password">Mật khẩu</label>
                        <small className='flex-auto text-blue-500 h-12 cursor-pointer'>Đổi mật khẩu</small>
                    </div>
                    <div className='flex mb-6'>
                        <label className='w-48 flex-none' htmlFor="avatar">Ảnh đại diện</label>
                        <div>
                            <img src={payload.avatar || anonavatar} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
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

export default EditAccount