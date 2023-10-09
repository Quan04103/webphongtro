import React from "react";


const Overview = () => {
    return (
        <div className="grid gap-y-4 px-[5rem] pb-[3rem] rounded-[1rem] bg-white border-solid border-slate-200 border-2 shadow-md">
            <h1 className="mt-7 post_text_h1 ">Thông tin bài viết</h1>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="input-form" className="post_text_h2">Tiêu đề</label>
                <input id="input-form" type="text" placeholder= 'Nhập tiêu đề' className="outline-none border border-gray-300 rounded-[5px] p-3">
                </input>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="input-form" className="post_text_h2">Mô tả</label>                
                <textarea cols="30" rows="10" className="outline-none border border-gray-300 rounded-[5px] p-1">

                </textarea>
            </div>

        </div>
    )
}

export default Overview