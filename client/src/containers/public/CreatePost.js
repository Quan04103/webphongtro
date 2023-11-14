import React, { useCallback,useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Address, Overview, Loading } from '../../components';
import { path } from '../../ultils/constant'
import Footer from './Footer'
import icons from '../../ultils/icons'
import { getCodes, getCodesArea } from '../../ultils/Common/getCodes'
import { apiCreatePost } from '../../services'
import Swal from 'sweetalert2'
import { apiUploadImages } from '../../services'

import {useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { ComplexNavbar } from './Header';

import { Card,
    Typography,
    ButtonGroup,Button,
    Select,Option,
} from '@material-tailwind/react';
 import {CameraIcon} from "@heroicons/react/24/outline"
const {ImBin } = icons
    const CreatePost = (isEdit) => {
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceNumber: 0,
        areaNumber: 0,
        images: [],
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
        if(response?.data.err ===0){
            Swal.fire('Thành công', 'Đã thêm bài đăng mới', 'success').then(() => {
                setPayload({
                    categoryCode: '',
                    title: '',
                    priceNumber: 0,
                    areaNumber: 0,
                    images: [],
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
    console.log(payload);
    useEffect(() => {
    console.log(payload)
    },[payload])
    
        // console.log(payload);
    // const { prices, areas } = useSelector(state => state.app)
    //  const navigate = useNavigate()
    // const goPaypost = useCallback((flag) => {
    //     navigate(path.PAY_POST, { state: { flag } })
    // }, [])

    return (
        
            <div className='flex flex-col gap-10 bg-white'>
                <div className='flex justify-center'>
                    <div className='gap-5 flex flex-col w-3/4'>
                        <Card className='  py-10 border-solid border-2'>
                            <div className='flex justify-center'>                                
                                <div className='flex w-3/4 flex-col gap-5' >          
                                    <Typography variant="h2">{isEdit ?  'Chỉnh sửa tin đăng' : 'Đăng tin mới'}</Typography>
                                    <ButtonGroup variant="text" fullWidth >
                                        <Button className='bg-gray-200'>BÁN </Button>
                                        <Button className='bg-gray-200'>CHO THUÊ</Button>
                                    </ButtonGroup>
                                    <div className="flex flex-col">
                                        <label className=" font-bold" >Loại bất động sản</label>
                                        <input type="text" readOnly className="cursor-default outline-none border border-gray-300  rounded-[5px] p-2"></input>

                                    </div>
                                    <div className="flex gap-4 ">
                                        <Address payload={payload} setPayload={setPayload} />
                                    </div>
                                    <Select size="lg" label="Dự án">
                                        <Option>Material Tailwind HTML</Option>
                                    </Select>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold" >Địa chỉ hiển thị trên tin đăng</label>
                                        <input type="text" placeholder = "Bạn có thể bổ sung hẻm, ngỏ, ngách,..." className="outline-none border border-gray-300 rounded-[5px] p-2"></input>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className=' py-10 border-solid border-2'>
                            <div className='flex justify-center'>
                                <div className='flex w-3/4 flex-col gap-5'>
                                <Overview payload={payload} setPayload={setPayload} />
                                </div>
                            </div>
                        </Card>
                        <Card className='flex  py-10 border-solid border-2'>
                            <div className='flex justify-center'>                              
                                <div className='flex w-3/4 flex-col gap-5' >          
                                    <Typography variant="h2">Hình ảnh và video</Typography>
                                    <div className='flex flex-col gap-0 cursor-default'>
                                        <Typography variant = "small"> Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</Typography>
                                        <Typography variant = "small"> Đăng tối đa 224 ảnh với tất cả loại tin</Typography>
                                        <Typography variant = "small"> Hãy dùng ảnh thật không chèn số điện thoại và trùng</Typography>
                                        <Typography variant = "small"> Mỗi ảnh có kích thước tối thiểu 100 x 100 px, tối đa 15MB</Typography>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <label htmlFor="file" className="w-full border-2 h-[16rem] my-4 flex items-center justify-center bg-gray-200 rounded-md flex-col">
                                        {isLoading
                                            ? <Loading />
                                            : <div className='flex flex-col items-center justify-center'>
                                                <CameraIcon color='blue' size={50} />
                                                Thêm ảnh
                                        </div>}

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
                                            Tiếp tục
                                        </button>
                                    </div>
                              
                    </div>
                </div>
                <Footer/>
            </div>
    )
}

export default CreatePost