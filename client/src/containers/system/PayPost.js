import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constant'
import {
    Card,
    Typography,
    Button,
    Dialog, DialogHeader, DialogBody, DialogFooter,
    Switch
} from '@material-tailwind/react';
import {
    ArrowUturnLeftIcon

} from "@heroicons/react/24/outline"


const PayPost = () => {
    const navigate = useNavigate()
    const goCreatePost = useCallback((flag) => {
        navigate(path.CREATE_POST, { state: { flag } })
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <div className='flex flex-col gap-10 bg-white'>
            <div className='flex justify-center'>
                <div className='gap-5 flex flex-col w-3/4'>
                    <Card className=' border-solid border-2 border-black drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]'>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-4 py-9' >
                                <Typography variant="h3">Cấu hình đăng tin</Typography>
                                <Typography variant="h6">Chọn loại tin đăng</Typography>
                                <div className="flex flex-row">
                                    <div className="pl-[6rem] py-2">
                                        <div className=" rounded-[1rem] bg-white border-solid border-slate-300 border-2 w-fit px-6 py-3">
                                            <p className="font-bold mx-7">Tin thường</p>
                                            <p className="text-gray-400">Từ 1.900 VND/ngày</p>
                                            <button
                                                type='button'
                                                className="w-[10rem] border-solid border-teal-500 border-2 rounded-md px-[10px] font-semibold bg-white ">
                                                <p className="text-teal-500">Chọn</p>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Typography variant="h6">Số ngày đăng</Typography>
                                <div className="flex flex-row">
                                    <div className=" py-2">
                                        <div className=" rounded-[1rem] bg-white border-solid border-slate-300 border-2 w-fit px-6 py-3">
                                            <p className="font-bold ">10 ngày</p>
                                            <p className="text-gray-400">Từ 2.900 VND/ngày</p>
                                        </div>
                                    </div>
                                    <div className="pl-[3rem] py-2">
                                        <div className=" rounded-[1rem] bg-white border-solid border-slate-300 border-2 w-fit px-6 py-3">
                                            <p className="font-bold ">15 ngày</p>
                                            <p className="text-gray-400">Từ 2.000 VND/ngày</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-10 flex-1'>
                                    <div className='flex flex-col w-1/2'>
                                        <Typography variant="h6">Ngày bắt đầu</Typography>
                                        <input type="date" className="outline-none border border-gray-300 rounded-[5px] p-2 w-full"></input>
                                    </div>
                                    <div className='flex flex-col w-1/2'>
                                        <Typography variant="h6">Giờ đăng tin</Typography>
                                        <input type="time" className="outline-none border border-gray-300 rounded-[5px] p-2 w-full"></input>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Card>
                    <Card className='  border-solid border-2 border-black drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]'>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5 py-9' >
                                <Typography variant="h3">Tiện ích</Typography>
                                <div className='flex flex-row justify-between'>
                                    <Typography variant="paragraph">Tin sẽ được đăng lại sau khi hết hạn ......</Typography>
                                    <Switch
                                        ripple={false}
                                        className="h-full w-full checked:bg-[#2ec946]"
                                        containerProps={{
                                            className: "w-11 h-6",
                                        }}
                                        circleProps={{
                                            className: "before:hidden left-0.5 border-none",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                    </Card>
                    <Card className='  border-solid border-2 border-black drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]'>
                        <div className='flex justify-center'>
                            <div className='flex w-3/4 flex-col gap-5 py-5' >
                                <Typography variant="h3">Thanh toán</Typography>
                                <div className="divide-y divide-solid">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-row justify-between">
                                            <Typography variant="h6">Loại tin</Typography>
                                            <p className="font-medium text-slate-600">Tin thường</p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <Typography variant="h6">Đơn giá/ Giá</Typography>
                                            <p className="font-medium text-slate-600">1999 VND</p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <Typography variant="h6">Thời gian đăng tin</Typography>
                                            <p className="font-medium text-slate-600">10 ngày</p>
                                        </div>
                                        <div className="grid justify-items-end m-0">
                                            <div className="flex flex-row gap-4 font-medium text-sm text-slate-400">
                                                <p>30/09/2023</p>
                                                <p>  </p>
                                                <p>10/10/2023</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="my-7">
                                        <div className="flex flex-row justify-between">
                                            <Typography variant="h6">Phí đăng tin</Typography>
                                            <p className="font-medium text-slate-600">22530 VND</p>
                                        </div>
                                    </div>
                                    <div className="my-7">
                                        <div className="flex flex-row justify-between">
                                            <Typography variant="h6">Tổng tiền</Typography>
                                            <p className="font-medium text-slate-600">0 VND</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                    <div className=''>
                        <div className='flex justify-between'>
                            <Button
                                variant="outlined"
                                className="flex items-center gap-3"
                                onClick={() => goCreatePost(false)}>
                                <ArrowUturnLeftIcon />
                                Quay lại

                            </Button>
                            <Button variant="text" className=' bg-orange-400 hover:bg-orange-600 text-white rounded-[30em] flex items-center gap-2 drop-shadow-[6px_6px_10px_#c5c5c5]'
                                onClick={handleOpen}>
                                Thanh toán và đăng tin {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                            <Dialog open={open} handler={handleOpen}>
                                <DialogHeader>
                                    <Typography variant="h5" color="blue-gray">
                                        Your Attention is Required!
                                    </Typography>
                                </DialogHeader>
                                <DialogBody divider className="grid place-items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-16 w-16 text-red-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <Typography color="red" variant="h4">
                                        You should read this!
                                    </Typography>
                                    <Typography className="text-center font-normal">
                                        A small river named Duden flows by their place and supplies it with
                                        the necessary regelialia.
                                    </Typography>
                                </DialogBody>
                                <DialogFooter className="space-x-2">
                                    <Button variant="text" color="blue-gray" onClick={handleOpen}>
                                        close
                                    </Button>
                                    <Button variant="gradient" onClick={handleOpen}>
                                        Ok, Got it
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayPost