import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { SelectAddress } from '../../components';
import { path } from '../../ultils/constant'
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

const CreatePost = () => {
    const navigate = useNavigate()
    const goPaypost = useCallback((flag) => {
        navigate(path.PAY_POST, { state: { flag } })
    }, [])
    return (
        <div className='flex flex-col gap-10 bg-white'>
            <div className='flex justify-center'>
                <div className='gap-5 flex flex-col w-3/4'>
                    <Card className='  py-10 border-solid border-2'>
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
                                <div className="flex gap-10 ">
                                    <SelectAddress label="Tỉnh, Thành Phố"></SelectAddress>
                                    <SelectAddress label="Quận, Huyện"></SelectAddress>
                                </div>
                                <div className="flex gap-10 ">
                                    <SelectAddress label="Phường, Xã"></SelectAddress>
                                    <SelectAddress label="Đường, Phố"></SelectAddress>
                                </div>
                                <Select size="lg" label="Dự án">
                                    <Option>Material Tailwind HTML</Option>
                                </Select>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold" >Địa chỉ hiển thị trên tin đăng</label>
                                    <input type="text" placeholder="Bạn có thể bổ sung hẻm, ngỏ, ngách,..." className="outline-none border border-gray-300 rounded-[5px] p-2"></input>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className='flex  py-10 border-solid border-2'>
                        <div className='flex justify-center'>
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
                        </div>
                    </Card>
                    <Card className='flex  py-10 border-solid border-2'>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5' >
                                <Typography variant="h2">Hình ảnh và video</Typography>
                                <div className='flex flex-col gap-0 cursor-default'>
                                    <Typography variant="small"> Đăng tối thiểu 4 thường với tin VIP</Typography>
                                    <Typography variant="small"> Đăng tối đa 224 ảnh với tất cả loại tin</Typography>
                                    <Typography variant="small"> Hãy dùng ảnh thật không chèn số điện thoại và trùng</Typography>
                                    <Typography variant="small"> Mỗi ảnh có kích thước tối thiểu 100 x 100 px, tối đa 15MB</Typography>
                                </div>
                                <div className="flex items-center justify-center">
                                    <label htmlFor="file" className="w-full border-2 h-[16rem] my-4 flex items-center justify-center bg-gray-200 rounded-md flex-col">
                                        <CameraIcon className='w-[5%]' />
                                        <h2 className="text-gray-700 font-bold">Bấm hoặc chọn ảnh cần tải </h2>
                                        <p className="text-gray-700 italic text-xs">hoặc kéo thả ảnh vào đây </p>

                                    </label>
                                    <input hidden type="file" id='file'></input>
                                </div>

                            </div>
                        </div>
                    </Card>
                    <Card className='flex  py-10 border-solid border-2'>
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
                                        onClick={() => goPaypost(false)}>
                                        Tiếp tục
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;