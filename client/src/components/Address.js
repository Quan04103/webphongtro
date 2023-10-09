import React from "react";
import { Select} from '../components'

const Address = () => {
    return (
        <div className="grid gap-y-4 px-[5rem] pb-[3rem] rounded-[1rem] bg-white border-solid border-slate-200 border-2 shadow-md">
            <h1 className="post_text_h1 mt-7 ">Thông tin cơ bản</h1>
            <div className="flex flex-row flex-1">
                <button
                    type='button'                
                    className=" p-2 border-solid border-slate-300 border-2 rounded-l-lg px-[10px] font-semibold bg-white w-1/2">
                    <p >BÁN</p>

                </button>
                <button
                    type='button'                
                    className=" p-2 border-solid border-slate-300 border-2 rounded-r-lg px-[10px] font-semibold bg-white w-1/2">
                    <p >CHO THUÊ</p>

                </button>
            </div>
            <div className="flex flex-col">
            <label className="post_text_h2 mb-2" >Loại bất động sản</label>
                <input type="text" readOnly className="cursor-default outline-none border border-gray-300 bg-gray-100 rounded-[5px] p-2"></input>

            </div>
            <div className="flex flex-col">
                <label className="post_text_h2 mb-2" htmlFor="exactly-address">Địa chỉ chính xác</label>
                <input type="text" id="exactly-address" readOnly className="cursor-default outline-none border border-gray-300 bg-gray-100 rounded-[5px] p-2"></input>
                <p>Thông tin địa chỉ sẽ được tự động nhập dựa trên kết quả tìm kiếm của bạn</p>
            </div>

            <div className="flex items-center gap-6 ">
                <Select className='w-1/2' label='Tỉnh, Thành phố'/>
                <Select  className='w-1/2' label='Quận, Huyện'/>
            </div>
            <div className="flex items-center gap-6 ">
                <Select className='w-1/2' label='Phường, xã'/>
                <Select className='w-1/2' label='Đường, phố'/>
            </div>
            <div className="post_text_h2">
                <Select label='Dự án'/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="post_text_h2" >Địa chỉ hiển thị trên tin đăng</label>
                <input type="text" placeholder= "Bạn có thể bổ sung hẻm, ngỏ, ngách,..." className="outline-none border border-gray-300 rounded-[5px] p-2"></input>
            </div>
        </div>
    )
}

export default Address