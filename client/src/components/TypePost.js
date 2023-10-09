import React from "react";
import { Select} from '../components'

const TypePost = () => {
    return (
        <div className=" grid gap-y-1  pb-[20px] rounded-[1rem] bg-white border-solid border-slate-500 border-2 shadow-md">
        
            <h1 className="mt-7 post_text_h1 px-[5rem]">Cấu hình tin đăng</h1>
            <p className="px-[5rem] post_text_h2">Chọn loại tin đăng</p>
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
                <div className="pl-[3rem] py-2">
                    <div className=" rounded-[1rem] bg-white border-solid border-slate-300 border-2 w-fit px-6 py-3">
                            <p className="font-bold mx-7">Tin ưu tiên</p>
                            <p className="text-gray-400">Từ 35.000 VND/ngày</p>
                            <button
                                type='button' 
                                className="w-[10rem] border-solid border-teal-500 border-2 rounded-md px-[10px] font-semibold bg-white ">
                                <p className="text-teal-500">Chọn</p>

                            </button>
                    </div>
                </div>
            </div>
            <p className="separate"></p>
        
            <div className="px-[5rem]">
                <p className="post_text_h2">Chọn thời gian đăng tin</p>
                <p>Số ngày đăng</p>
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
                    <div className="pl-[3rem] py-2">
                        <div className=" rounded-[1rem] bg-white border-solid border-slate-300 border-2 w-fit px-6 py-3">
                                <p className="font-bold ">30 ngày</p>
                                <p className="text-gray-400">Từ 1.900 VND/ngày</p>           
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 w-1/2">
                    <Select label={'Ngày bắt đầu'}/>
                    <Select label={'Giờ'}/>
                </div>
            </div>

        </div>
    )
}

export default TypePost