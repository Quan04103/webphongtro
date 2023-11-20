import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ButtonEdit, Select } from '../../components';
import { path } from '../../ultils/constant'
import { Overview, Address, Loading } from '../../components'
import { apiUploadImages, apiUpdatePost } from '../../services'
import icons from '../../ultils/icons'
import { getCodes, getCodesArea } from '../../ultils/Common/getCodes'
import { useDispatch, useSelector } from 'react-redux'
import { apiCreatePost } from '../../services'
import Swal from 'sweetalert2'
import validate from '../../ultils/Common/validateFields'
// import Footer from './Footer'
import { resetDataEdit } from '../../store/actions';
import { apiPlusMoney } from '../../services';
import {
    Card,
    Input,
    Typography,
    ButtonGroup, Button,
    Option,
    Popover, PopoverHandler, PopoverContent
} from '@material-tailwind/react';

import { CameraIcon } from "@heroicons/react/24/outline"

const { ImBin } = icons
const CreatePost = ({ isEdit }) => {
    const dispatch = useDispatch()
    const { dataEdit } = useSelector(state => state.post)
    const [payload, setPayload] = useState(() => {
        const initData = {
            categoryCode: dataEdit?.categoryCode || '',
            title: dataEdit?.title || '',
            priceNumber: dataEdit?.priceNumber * 100000 || 0,
            areaNumber: dataEdit?.areaNumber || 0,
            images: dataEdit?.images?.image ? JSON.parse(dataEdit?.images?.image) : '',
            address: dataEdit?.address || '',
            priceCode: dataEdit?.priceCode || '',
            areaCode: dataEdit?.areaCode || '',
            description: dataEdit?.description ? JSON.parse(dataEdit?.description) : '',
            province: dataEdit?.province || ''
        }
        return initData
    })
    const [imagesPreview, setImagesPreview] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { prices, areas, categories, province } = useSelector(state => state.app)
    const { currentData } = useSelector(state => state.user)

    useEffect(() => {
        if (dataEdit) {
            let images = JSON.parse(dataEdit?.images?.image)
            images && setImagesPreview(images)
        }
    }, [dataEdit])
    const handleFiles = async (e) => {
        e.stopPropagation()
        setIsLoading(true)
        let images = []
        let files = e.target.files
        let formData = new FormData()
        for (let i of files) {
            formData.append('file', i)
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
            let response = await apiUploadImages(formData)
            if (response.status === 200) images = [...images, response.data?.secure_url]
        }
        setIsLoading(false)
        setImagesPreview(prev => [...prev, ...images])
        setPayload(prev => ({ ...prev, images: [...prev.images, ...images] }))
    }
    const handleDeleteImage = (image) => {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        setPayload(prev => ({
            ...prev,
            images: prev.images?.filter(item => item !== image)
        }))
    }
    const handleSubmit = async () => {
        const currentMoney = parseInt(currentData.money,10) || 0;
        let priceCodeArr = getCodes(+payload.priceNumber / Math.pow(10, 6), prices, 1, 15)
        let priceCode = priceCodeArr[priceCodeArr.length - 1]?.code
        let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 0, 90)
        let areaCode = areaCodeArr[0]?.code
        let finalPayload = {
            ...payload,
            priceCode,
            areaCode,
            userId: currentData.id,
            priceNumber: +payload.priceNumber / Math.pow(10, 6),
            areaNumber: +payload.areaNumber,
            label: `${categories?.find(item => item.code === payload?.categoryCode)?.value} ${payload?.address?.split(',')[0]}`
        }
        if (dataEdit) {
            finalPayload.postId = dataEdit?.id
            finalPayload.attributesId = dataEdit?.attributesId
            finalPayload.imagesId = dataEdit?.imagesId
            finalPayload.overviewId = dataEdit?.overviewId

            if ( currentMoney > 3000){
                const responseMoney = await apiPlusMoney(currentMoney - 3000);
                const response = await apiUpdatePost(finalPayload)
                if (response?.data.err === 0) {
    
                    Swal.fire('Thành công', 'Đã cập nhật bài đăng', 'success').then(() => {
                        resetPayload()
                        dispatch(resetDataEdit())
                    })
                } else {
                    Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
                }
            }
            else {
                Swal.fire('Opps!', 'Tài khoản của bạn không đủ để thanh toán', 'error')
            }

        }
        else {
            if ( currentMoney > 3000){
                const responseMoney = await apiPlusMoney(currentMoney - 3000);
                const response = await apiCreatePost(finalPayload)
                if (response?.data.err === 0) {
                    Swal.fire('Thành công', 'Đã thêm bài đăng mới', 'success').then(() => {
                        resetPayload()
                    })
                } else {
                    Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
                }
            }
            else{
                Swal.fire('Opps!', 'Tài khoản của bạn không đủ để thanh toán', 'error')
            }
            
        }
    }
    const resetPayload = () => {
        setPayload({
            categoryCode: '',
            title: '',
            priceNumber: 0,
            areaNumber: 0,
            images: '',
            address: '',
            priceCode: '',
            areaCode: '',
            description: '',
            province: ''
        })
    }

    return (
        <div className='flex flex-col gap-10 bg-white'>
            <div className='flex justify-center'>
                <div className='gap-5 flex flex-col w-2/3'>
                    <Card className='  py-10 border-solid  '>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                {/* <Typography variant="h2">Thông tin cơ bản</Typography> */}
                                <h2 className='font-semibold text-xl py-4'>{isEdit ? 'Chỉnh sửa tin đăng' : 'Đăng tin mới'}</h2>
                                <ButtonGroup variant="text" fullWidth >
                                    <Button className='bg-gray-200'>CHO THUÊ</Button>
                                </ButtonGroup>

                                <div className="flex flex-col gap-2">
                                    <Address payload={payload} setPayload={setPayload} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold" >Địa chỉ hiển thị trên tin đăng</label>
                                    <input type="text" className="outline-none border border-gray-700 rounded-[5px] p-2" />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className='flex  py-10 border-solid  '>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5'>
                                <Overview payload={payload} setPayload={setPayload} />
                            </div>
                        </div>
                    </Card>
                    <Card className='flex  py-10 border-solid  '>
                        <div className='font-semibold flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <h2 className='font-semibold text-xl py-4'>Hình ảnh và video</h2>
                                <div className='flex flex-col gap-0 cursor-default'>
                                    <Typography variant="small"> Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</Typography>
                                    <Typography variant="small"> Đăng tối đa 224 ảnh với tất cả loại tin</Typography>
                                    <Typography variant="small"> Hãy dùng ảnh thật không chèn số điện thoại và trùng</Typography>
                                    <Typography variant="small"> Mỗi ảnh có kích thước tối thiểu 100 x 100 px, tối đa 15MB</Typography>
                                </div>
                                <div className="flex items-center justify-center">
                                    <label htmlFor="file" className="w-full   h-[16rem] my-4 flex items-center justify-center bg-gray-200 rounded-md flex-col">
                                        {isLoading
                                            ? <Loading />
                                            : <div className='flex flex-col items-center justify-center'>
                                                <CameraIcon className='w-[10%]' />
                                                <h2 className="text-gray-700 font-bold">Bấm hoặc chọn ảnh cần tải </h2>
                                                <p className="text-gray-700 italic text-xs">hoặc kéo thả ảnh vào đây </p>
                                            </div>}
                                    </label>
                                </div>
                                <div>
                                    <input onChange={handleFiles} hidden type="file" id='file' multiple />
                                    <div className='w-full'>
                                        <h3 className='font-semibold py-4'>Ảnh đã chọn</h3>
                                        <div className='flex gap-4 items-center'>
                                            {imagesPreview?.map(item => {
                                                return (
                                                    <div
                                                        key={item} className='relative w-1/3 h-1/3 '>
                                                        <img src={item} alt="preview" className='w-full h-full object-cover rounded-md' />
                                                        <span
                                                            title='Xóa'
                                                            onClick={() => handleDeleteImage(item)}
                                                            className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-400 hover:bg-gray-300 rounded-full'
                                                        >
                                                            <ImBin />
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                    <div className='flex justify-end'>

                        <ButtonEdit
                            className=' bg-orange-400 hover:bg-orange-600 text-white w-[9em] h-[3em] rounded-[30em] text-[15px] drop-shadow-[6px_6px_10px_#c5c5c5]'
                            onClick={handleSubmit}
                            text={isEdit ? 'Cập nhật' : 'Tạo mới'}
                            bgColor='bg-green-600'
                            textColor='text-white'>
                        </ButtonEdit>
                    </div>
                    {/* <Card className='flex  py-10 border-solid  '>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <Typography variant="h2">Thông tin liên hệ</Typography>
                                <div className="flex flex-col">
                                    <label className=" font-bold" >Tên liên hệ</label>
                                    <Input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                        className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 "
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" font-bold" >Số điện thoại</label>
                                    <Input

                                        placeholder="Nhập số điện thoại"
                                        className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 "
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" font-bold" >Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Nhập địa chỉ email"
                                        className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 "
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className='flex justify-end'>

                                    <button
                                        className=' bg-orange-400 hover:bg-orange-600 text-white w-[9em] h-[3em] rounded-[30em] text-[15px] drop-shadow-[6px_6px_10px_#c5c5c5]'
                                        onClick={() => goPaypost(true)}>
                                        Tiếp tục
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card> */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default CreatePost;