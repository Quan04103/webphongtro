import React from "react";

const AddImage = () => {
    return(
        <div className="grid gap-y-1 px-[5rem] pb-[3rem] rounded-[1rem] bg-white border-solid border-slate-200 border-2 shadow-md">
            <h1 className="mt-7 post_text_h1 ">Hình ảnh và video</h1>
            <div>
            <p className="text-gray-400 text-s"> Đăng tối thiểu 4 thường với tin VIP</p>
            <p className="text-gray-400 text-s"> Đăng tối đa 224 ảnh với tất cả loại tin</p>
            <p className="text-gray-400 text-s"> Hãy dùng ảnh thật không chèn số điện thoại và trùng</p>
            <p className="text-gray-400 text-s"> Mỗi ảnh có kích thước tối thiểu 100x100 px, tối đa 15MB</p>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor="file" className="w-full border-2 h-[16rem] my-4 flex items-center justify-center bg-gray-200 rounded-md flex-col">
                        <h2 className="text-gray-700 font-bold">Bấm hoặc chọn ảnh cần tải </h2>
                        <p className="text-gray-700 italic text-xs">hoặc kéo thả ảnh vào đây </p>

                </label>
                <input hidden type="file" id='file'></input>
            </div>
        </div>
    )
} 

export default AddImage