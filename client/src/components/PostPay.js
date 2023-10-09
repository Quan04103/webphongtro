import React from "react";

const PostPay = () => {
    return (
        <div className="grid gap-y-1 px-[5rem] rounded-[1rem] bg-white border-solid border-slate-500 border-2 shadow-md">
        <h1 className="mt-7 post_text_h1 ">Thanh toán</h1>
        <div className="divide-y divide-solid">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between">
                    <p className="post_text_h2">Loại tin</p>
                    <p className="font-medium text-slate-600">Tin thường</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="post_text_h2">Đơn giá/ Giá</p>
                    <p className="font-medium text-slate-600">1999 VND</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="post_text_h2">Thời gian đăng tin</p>
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
                    <p className="post_text_h2">Phí đăng tin</p>
                    <p className="font-medium text-slate-600">22530 VND</p>
                </div>
            </div>
            <div className="my-7">
                <div className="flex flex-row justify-between">
                    <p className="post_text_h2">Tổng tiền</p>
                    <p className="font-medium text-slate-600">0 VND</p>
                </div>
            </div>
        </div>
        

        </div>
    )
}

export default PostPay