import React, { useState } from "react"
import anonavatar from "../../assets/anonavatar.png"
import { SystemInputReadOnly, SystemInputFormV2, ButtonEdit } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { apiUpdateUser } from '../../services'
import { fileToBase64, blobToBase64 } from "../../ultils/Common/tobase64"
import { getCurrent } from "../../store/actions"
import Swal from "sweetalert2"
import withInputValidation from "../../DesignPattern/DecoratorDP/SubmitDecorator"
const EditAccount = () => {
    const { currentData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        avatar: blobToBase64(currentData?.avatar) || '',
        fbUrl: currentData?.fbUrl || '',
        zalo: currentData?.zalo || ''
    })
    const handleSubmit = async (a) => {
        const response = await apiUpdateUser(a)
        if (response?.data.err === 0) {
            Swal.fire('Done', 'Chỉnh sửa thành công', 'success').then(() => {
                dispatch(getCurrent())
            })
        }
        else {
            Swal.file('Oops!', 'Chỉnh sửa thất bại', 'err')
        }
    }

    const submitWithValidate=()=>{
        withInputValidation(handleSubmit)(payload);
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
                <div className='py-6 flex flex-1/3 flex-col gap-5 w-full'>
                    <SystemInputReadOnly value={`#${currentData?.id?.match(/\d/g).join('')?.slice(0, 6)}` || ''} direction='flex-row text-center' label="Mã thành viên" />
                    <SystemInputReadOnly value={currentData?.phone} editPhone direction='flex-row text-center' label="Số điện thoại" />

                    <SystemInputFormV2
                        name='name'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.name}
                        label='Tên hiển thị' />
                    <SystemInputFormV2
                        name='zalo'
                        setValue={setPayload}
                        direction='flex-row'
                        value={payload.zalo}
                        label='Zalo' />
                    <div className='flex mb-6 '>
                        <label className='w-48 flex-none' htmlFor="avatar">Ảnh đại diện</label>
                        <div>
                            <img src={payload.avatar || anonavatar} alt="avatar" className='w-28 h-28 rounded-full border-collapse border-2 object-cover' />
                            <input onChange={handleUploadFile} type="file" className="appearance-none my-4" id="avatar" />
                        </div>
                    </div>
                    <ButtonEdit text='Cập nhật'
                        bgColor='bg-blue-600 shadow-lg shadow-blue-500/50 hover:bg-blue-800'
                        textColor='text-white'
                        onClick={submitWithValidate}></ButtonEdit>
                </div>
            </div>
        </div>
    )
}


export default EditAccount