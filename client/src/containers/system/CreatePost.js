import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Select } from '../../components';
import { path } from '../../ultils/constant'
import { Overview, Address, Loading} from '../../components'
import { apiUploadImages } from '../../services'
import icons from '../../ultils/icons'
import { getCodes, getCodesArea } from '../../ultils/Common/getCodes'
import { useSelector } from 'react-redux'
import { apiCreatePost } from '../../services'
import Swal from 'sweetalert2'
// import Footer from './Footer'
import {
    Card,
    Input,
    Typography,
    ButtonGroup, Button,
     Option,
    Popover, PopoverHandler, PopoverContent
} from '@material-tailwind/react';

import {CameraIcon} from "@heroicons/react/24/outline"

const {ImBin } = icons
const CreatePost = () => {
    const [payload, setPayload] = useState({
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
    const [imagesPreview, setImagesPreview] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { prices, areas, categories, province } = useSelector(state => state.app)
    const {currentData} = useSelector(state => state.user)

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
        //setPayload(prev => ({ ...prev, images: [...prev.images, ...images] }))
    }
    const handleDeleteImage = (image) => {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        // setPayload(prev => ({
        //     ...prev,
        //     images: prev.images?.filter(item => item !== image)
        // }))
    }
    const handleSubmit = async () => {
        let priceCodeArr = getCodes(+payload.priceNumber / Math.pow(10,6), prices, 1, 15)
        let priceCode = priceCodeArr[priceCodeArr.length - 1]?.code
        let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 0, 90)
        let areaCode = areaCodeArr[0]?.code
        let finalPayload = {
            ...payload,
            priceCode,
            areaCode,
            userId: currentData.id,
            priceNumber: +payload.priceNumber / Math.pow(10,6),
            areaNumber: +payload.areaNumber,
            label: `${categories?.find(item => item.code === payload?.categoryCode)?.value} ${payload?.address?.split(',')[0]}`
        }
        const response = await apiCreatePost(finalPayload)
        console.log(finalPayload)
        if(response?.data.err ===0){
            Swal.fire('Thành công', 'Đã thêm bài đăng mới', 'success').then(() => {
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
            })
        } else {
            Swal.fire('Opps!', 'Có lỗi gì đó', 'error')
        }
    }
// const CreatePost = () => {
//     const navigate = useNavigate()
//     const goPaypost = useCallback((flag) => {
//         navigate(path.PAY_POST, { state: { flag } })
//     }, [])
    return (
        <div className='flex flex-col gap-10 bg-white'>
            <div className='flex justify-center'>
                <div className='gap-5 flex flex-col w-1/2'>
                    <Card className='  py-10 border-solid  '>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <Typography variant="h2">Thông tin cơ bản</Typography>
                                <ButtonGroup variant="text" fullWidth >
                                    <Button className='bg-gray-200'>BÁN </Button>
                                    <Button className='bg-gray-200'>CHO THUÊ</Button>
                                </ButtonGroup>
                                <div className="flex flex-col">
                                    <label className=" font-bold" >Loại bất động sản</label>
                                    <input type="text" readOnly className="cursor-default outline-none border border-gray-300  rounded-[5px] p-2"></input>

                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold" htmlFor="exactly-address">Địa chỉ chính xác</label>
                                    <Popover>
                                        <PopoverHandler>
                                            <input type="text" id="exactly-address" readOnly className="cursor-default outline-none border border-gray-300  rounded-[5px] p-2"></input>
                                        </PopoverHandler>
                                        <PopoverContent>
                                            Thông tin địa chỉ sẽ được tự động nhập dựa trên thông tin nhập của bạn
                                        </PopoverContent>
                                    </Popover>


                                </div>
                                <div className="flex gap-4 ">
                                        <Address payload={payload} setPayload={setPayload} />
                                    </div>
                                {/* <div className="flex gap-10 ">
                                    <Select label="Tỉnh, Thành Phố"></Select>
                                    <Select label="Quận, Huyện"></Select>
                                </div>
                                <div className="flex gap-10 ">
                                    <Select label="Phường, Xã"></Select>
                                    <Select label="Đường, Phố"></Select>
                                </div> */}
                                {/* <Select size="lg" label="Dự án">
                                    <Option>Material Tailwind HTML</Option>
                                </Select> */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold" >Địa chỉ hiển thị trên tin đăng</label>
                                    <input type="text" placeholder="Bạn có thể bổ sung hẻm, ngỏ, ngách,..." className="outline-none border border-gray-300 rounded-[5px] p-2"></input>
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
                        {/* <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <Typography variant="h2">Thông tin bài viết</Typography>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold" >Tiêu đề</label>
                                    <input type="text" className="outline-none border border-gray-300 rounded-[5px] p-2"></input>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-bold">Mô tả</label>
                                    <textarea cols="30" rows="10" className="outline-none border border-gray-300 rounded-[5px] p-1">

                                    </textarea>
                                </div>

                            </div>
                        </div> */}
                    </Card>
                    <Card className='flex  py-10 border-solid  '>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <Typography variant="h2">Hình ảnh và video</Typography>
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
                                                <CameraIcon className='w-[5%]' />
                                                <h2 className="text-gray-700 font-bold">Bấm hoặc chọn ảnh cần tải </h2>
                                                <p className="text-gray-700 italic text-xs">hoặc kéo thả ảnh vào đây </p>
                                        </div>}
                                        {/* <CameraIcon className='w-[5%]' />
                                        <h2 className="text-gray-700 font-bold">Bấm hoặc chọn ảnh cần tải </h2>
                                        <p className="text-gray-700 italic text-xs">hoặc kéo thả ảnh vào đây </p> */}

                                    </label>
                                    <input onChange={handleFiles} hidden type="file" id='file' multiple />
                                        <div className='w-full'>
                                            <h3 className='font-medium py-4'>Ảnh đã chọn</h3>
                                        <div className='flex gap-4 items-center'>
                                            {imagesPreview?.map(item => {
                                                return (
                                                    <div key={item} className='relative w-1/3 h-1/3 '>
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

                            <button
                                className=' bg-orange-400 hover:bg-orange-600 text-white w-[9em] h-[3em] rounded-[30em] text-[15px] drop-shadow-[6px_6px_10px_#c5c5c5]'
                                onClick={handleSubmit} text='Tạo mới' bgColor='bg-green-600' textColor='text-white'>
                                Đăng bài
                            </button>
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