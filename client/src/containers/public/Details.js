import React, { createContext,  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsLimit } from '../../store/actions'
import { Item } from '../../components'
import Footer from "./Footer";
import * as actions from "../../store/actions";
import anhAvt from "../../assets/anhAvt.jpg"
import iconZalo from "../../assets/iconZalo1.jpg"




import {
    StarIcon
} from "@heroicons/react/24/solid";
export const ContextRegiter = createContext();
export const Context = createContext();
const Details = () => {
    const { postId } = useParams()
    const dispatch = useDispatch();
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
    const { posts } = useSelector(state => state.post)
    

    useEffect(() => {
        postId && dispatch(getPostsLimit({ id: postId }))

    }, [postId])
    // useEffect(() => {
    //     postId && dispatch(getPostsLimit({ id: postId }))

    // }, [postId])
    useEffect(() => {
        // Trạng thái mới của isLoginPopupOpen đã thay đổi ở đây
      }, [isLoginPopupOpen]);
      const {categories} = useSelector(state => state.app)
    
      useEffect(() => {
          dispatch(actions.getCategories())
    
      }, [actions.getCategories])
    return (

        
        <div class="relative flex justify-center bg-[#fc3c3c] w-full   text-left text-5xl text-black font-inter">
           
            <div className=''>

                {/* <Anh images={posts && posts.lenght > 0 && JSON.parse(posts[0]?.images?.image)} /> */}
                <div>
                <img class='absolute bg-blue-gray-400  left-[165px] top-[100px] inline-block rounded-l-lg w-[1380px] h-[510px] object-cover'
                    images={posts && posts.lenght > 0 && JSON.parse(posts[0]?.images?.image)}

                    src="{item}" alt=''
                />
            </div>
            {/* <img class="absolute  bg-red-200 top-[100px] left-[790px] w-80 h-60 object-cover"
                src=""
            />
            <img class="absolute bg-blue-50 top-[360px] left-[790px] w-80 h-[244px] object-cover"
                src="/image.png"
            />
            <img class=" absolute  bg-pink-200 top-[100px] left-[1120px] rounded-tl-none rounded-tr-mini rounded-b-none w-[316px] h-60 object-cover"
                src="/image-.png"
            />
            <img class="absolute bg-black top-[360px] left-[1120px] rounded-t-none rounded-br-mini rounded-bl-none w-[315px] h-[244px] object-cover"
                src="/image-.png"
            /> */}
            </div>
            

            <div class="absolute top-[515px] left-[1174px] " >
                <button class="rounded-mini bg-white box-border w-56 h-[66px] border-[1px] border-solid border-black font-sans font-semibold" >
                    <div>Xem thêm</div>
                </button>
            </div>

            <div class="absolute top-[630px] left-[170px] text-[40px]  text-[#034DA1] font-semibold font-sans inline-block w-[1200px] h-[70px] ">
                <p class="left-[30px] m-0">
                    {posts[0]?.title}
                </p>
            </div>
            

          
            <div class="relative  top-[780px] border border-solid border-[#034DA1] p-4 rounded-2xl right-[260px]">
                <table class="w-[840px] h-[400px] bg-[#ee4343] text-xxl text-left text-[#034DA1] dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    
                    </thead>
                    <tbody >
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Địa chỉ
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                    {posts[0]?.address}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Giá
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                    Khoảng {posts[0]?.attributes?.price}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Diện tích
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                    {posts[0]?.attributes?.acreage}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ngày cập nhật
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                    {posts[0]?.attributes?.published}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Điều kiện
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                     Sạch sẽ, giữ vệ sinh chung
                                </b>
                            </td>
                            
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Mã
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                {posts[0]?.attributes?.hashtag}

                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Đánh giá
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                    {posts[0]?.star}/5
                                    
                                </b>
                            
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="absolute top-[780px] left-[1097px] w-[336px] h-[351px] text-smi text-[#ffffff]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-[#034DA1] w-[336px] h-[351px]" />
                <img
                    className="absolute top-[55px] left-[117px] rounded-[50%] w-[104px] h-[104px] object-cover"
                    alt="avt"
                    src={anhAvt}
                />
                <div className="absolute top-[159px] left-[125px] inline-block w-[102.75px]">
                    Được đăng bởi
                </div>
                <b className="absolute top-[179px] left-[80px] text-2xl inline-block text-[#ffffff] w-[297.86px] h-[26.76px]">
                    {posts[0]?.user?.name}
                </b>
                <div className="absolute top-[206px] left-[109px] w-[118.83px] h-4">
                    <div className="absolute top-[0px] left-[16.09px] inline-block w-[102.75px]">Đang hoạt động</div>
                    <div
                        className="absolute top-[5px] left-[0px] rounded-8xs w-[8.3px] h-2 bg-green-600"
                    />
                </div>
                <div className="absolute top-[242px] left-[17px] w-[304px] h-10 text-2xl text-black">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-[#ffffff] w-[304px] h-10" />

                    <b className="absolute top-[9px] left-[84px] inline-block w-[134.92px] h-[22.14px]">
                        {posts[0]?.user?.zalo}
                    </b>
                </div>
                <div className="absolute top-[295px] left-[16px] w-[304.09px] h-[38px]">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-100 box-border w-[304.09px] h-[38px] border-[1px] border-solid border-black" />
                    <span class=" left-[292px]  relative flex h-4 w-4">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                    </span>
                    <div className=' cursor-pointer'>
                        <button className="absolute top-[3px] left-[95.48px] w-[106.9px] h-8 ">
                            <b className="absolute top-[8px] left-[39.44px] inline-block w-[67.46px] text-black">
                                Nhắn Zalo
                            </b>
                            <img
                                className=" top-[0px] left-[0px] rounded-3xs w-[35px] h-8 object-cover"
                                alt=""
                                src={iconZalo}
                            />
                        </button>
                    </div>
                    
                </div>
            </div>   

            <div class="absolute top-[1340px] left-[155px] text-[30px]  text-[#034DA1] font-semibold font-sans inline-block w-[1000px] h-[70px] ">
                <b>
                    Thông tin mô tả
                </b>
            </div>
            <div class="absolute top-[1400px] left-[155px] border border-solid border-[#034DA1] p-4 rounded-2xl w-[1050px] h-[500px]" />
            <div class="absolute top-[1400px] left-[195px] inline-block w-[984px] h-[776px] text-xxl">
                <div className='flex flex-col gap-5'>
                    {posts[0]?.description && JSON.parse(posts[0]?.description)?.map((item, index) => {
                        return (
                            <span key={index}>{item}</span>
                        )
                    }
                    )}</div>
            </div>
            
            <div class="absolute top-[1900px] left-[155px] text-[30px]  text-[#034DA1] font-semibold font-sans inline-block w-[1000px] h-[70px] ">
                <b>
                    Thông tin liên hệ
                </b>
            </div>

            <div class="absolute top-[1960px] border border-solid border-[#034DA1] p-4 rounded-2xl left-[155px]">
                <table class="w-[840px] h-[400px] bg-[#ee4343] text-xxl text-left text-[#034DA1] dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    
                    </thead>
                    <tbody >
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Liên hệ
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                {posts[0]?.user?.name}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Số điện thoại
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                {posts[0]?.user?.phone}
                                </b>
                            </td>
                            
                        </tr>
                        <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Zalo
                            </th>
                            <td class="px-6 py-4">
                                <b>
                                {posts[0]?.user?.zalo}
                                </b>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='absolute w-full top-[2500px] '><Footer/></div>
            

            {/* <div class="absolute top-[2265px] left-[50px] w-[1011px] h-[142.81px]">
                <div class="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[1011px] h-[142.81px]" />
                <div class="absolute top-[17.47px] left-[59.59px] text-dimgray inline-block w-[148.98px] h-[35.96px]">
                    Ngày đăng
                </div>
                <div class="absolute top-[83.22px] left-[49.32px] font-medium inline-block w-[148.98px] h-[35.96px]">
                    20/09/2023

                </div>

                <div class="absolute top-[17.47px] left-[330.84px] text-dimgray inline-block w-[166.45px] h-[33.91px]">
                    Ngày hết hạn
                </div>
                <div class="absolute top-[85.28px] left-[333.92px] font-medium inline-block w-[145.9px] h-[32.88px]">
                    01/10/2023
                </div>

                <div class="absolute top-[17.47px] left-[619.55px] text-dimgray inline-block w-[108.91px] h-[33.91px]">
                    Loại tin
                </div>
                <div class="absolute top-[86.3px] left-[541.46px] font-medium inline-block w-[233.23px] h-[35.96px]">
                    Tin VIP Kim Cương
                </div>
                <div class="absolute top-[17.47px] left-[850.72px] text-dimgray inline-block w-[79.11px] h-[33.91px]">
                    Mã tin
                </div>
                <div class="absolute top-[85.28px] left-[829.14px] font-medium inline-block w-[138.7px] h-[32.88px]">
                    {posts[0]?.attributes?.hashtag}
                </div>
            </div> */}

            
        
            {/* <div><Footer/> </div>        */}
        </div >


    )
}


const styles = {
    container: {
      position: "absolute",
      flexDirection: "column",
      height: "100vh",
    },
}

export default Details