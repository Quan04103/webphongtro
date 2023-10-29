import React, { useState } from "react"
import { InputReadOnly, InputFormv2, Button } from '../../components'
import tt from '../../assets/tt.png'
import { useSelector } from 'react-redux'
import { apiUploadImages, apiUpdateUser } from '../../services'
import {
    FiDollarSign
} from "react-icons/fi"
import {
    BsArrowLeftShort,
    BsFillPersonPlusFill,
    BsFillDatabaseFill
} from "react-icons/bs";
import {
    AiFillEnvironment,
    AiOutlineBarChart,

} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import {
    Dropdown,
    Ripple,
    Input,
    initTE
} from "tw-elements";

const EditAccount = () => {
    initTE({ Dropdown, Ripple, Input });
    const { currentData } = useSelector(state => state.user)
    const [invalidFields, setInvalidFields] = useState([])
    const [open, setOpen] = useState(true);
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        avata: currentData?.avatar,
        email: currentData?.email || '',
        fbUrl: currentData?.fbUrl || '',
        zalo: currentData?.zalo || ''
    })
    const handleUploadFile = async (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
        const response = await apiUploadImages(formData)
        if (response.status === 200) {
            setPayload(prev => ({
                ...prev,
                avata: response?.data.secure_url
            }))
        }

    }
    const handleSubmit = async () => {
        // const invalidcounter = validate(payload, setInvalidFields)
        // const response = await apiUpdateUser(payload)
        // console.log(response)
    }
    const Menus = [
        { title: "Quản lí tin đăng" },
        { title: "Sửa thông tin cá nhân", icon: <BsFillPersonPlusFill /> },
        { title: "Nạp tiền vào tài khoản", icon: <FiDollarSign /> },
        { title: "Lịch sử nạp tiền", icon: < BsFillDatabaseFill /> },
        { title: "Lịch sử thanh toán", icon: <AiOutlineBarChart /> },
    ];
    return (
        <div className="p-7 w-full h-screen  items-center">
            <h1 className='text-3xl font-medium py-4 h-[69px] flex-none border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-3/5 flex items-center justify-center flex-auto'>
                <div className=' py-6 flex flex-col gap-4 w-full'>
                    <InputReadOnly value={`#${currentData?.id?.match(/\d/g).join('')?.slice(0, 6)}` || ''} direction='flex-row' label="Mã thành viên" />
                    <InputReadOnly value={currentData?.phone} editPhone direction='flex-row' label="Số điện thoại" />

                    <InputFormv2
                        name='name'
                        setValue={setPayload}

                        direction='flex-row'
                        value={payload.name}
                        label='Tên hiển thị' />


                    <InputFormv2
                        name='Email'
                        setValue={setPayload}
                        direction='flex-row'


                        label='Email' />


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
                            <img src={payload.avatar || tt} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
                            <input onChange={handleUploadFile} type="file" className="appearance-none my-4" id="avatar" />
                        </div>
                    </div>
                    <Button text='Cập nhập'
                        bgColor='bg-blue-600'
                        textColor='text-white'
                        onclick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditAccount