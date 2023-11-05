import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsLimit } from '../../store/actions'
import { Item } from '../../components'
import { Imgs } from '../../components'
import {
    StarIcon
} from "@heroicons/react/24/solid";

const Details = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)


    useEffect(() => {
        postId && dispatch(getPostsLimit({ id: postId }))

    }, [postId])
    // useEffect(() => {
    //     postId && dispatch(getPostsLimit({ id: postId }))

    // }, [postId])
    return (
        <div class="relative bg-white w-full h-auto  text-left text-5xl text-black font-inter">

            <div class="absolute  left-[45px] text-13xp font-semibold inline-block w-[1000px] h-[70px] bg-white">
                <p class="m-0">
                    {posts[0]?.title}
                </p>
            </div>
            <div>
                {posts && posts.lenght > 0 && JSON.parse(posts[0]?.images?.image)}
                <imgs />
            </div>

            {/* <div>
                <img class='absolute bg-blue-gray-400  left-[45px] top-[100px] inline-block rounded-l-lg w-[720px] h-[504px] object-cover'
                    images={posts && posts.lenght > 0 && JSON.parse(posts[0]?.images?.image)}

                    src="{item}" alt=''
                />
            </div>
            <img class="absolute  bg-red-200 top-[100px] left-[790px] w-80 h-60 object-cover"
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

            <div class="absolute top-[515px] left-[1174px] " >
                <button class="rounded-mini bg-white box-border w-56 h-[66px] border-[1px] border-solid border-black" >
                    <div>Xem thêm</div>
                </button>
            </div>

            <div class="absolute top-[635px] left-[45px] rounded-3xs bg-whitesmoke w-[1390px] h-[175px]" />
            <img class="absolute h-[0.65%] w-[2.38%] top-[15.94%] right-[14.81%] bottom-[83.41%] left-[82.81%] max-w-full overflow-hidden max-h-full"
                src="/favorite.svg"
            />
            <div class="absolute top-[672px] left-[150px] text-dimgray">Mức giá</div>
            <div class="absolute top-[672px] left-[472px] text-dimgray">Diện tích</div>
            <div class="absolute top-[672px] left-[780px] text-dimgray">Ngày đăng</div>
            <div><b class="absolute top-[714px] left-[81px] text-13xl">{posts[0]?.attributes?.price}</b></div>
            <div><b class="absolute top-[714px] left-[468px] text-13xl">{posts[0]?.attributes?.acreage}</b></div>
            <div><b class="absolute top-[714px] left-[750px] text-13xl"> {posts[0]?.attributes?.published}</b></div>
            <div class='absolute top-[700px] left-[1000px] '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
            </div>
            <div class="absolute top-[700px] left-[1100px] " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <div class="absolute top-[700px] left-[1200px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
            <div class="absolute top-[710px] left-[1330px]  inline-flex">

                <b class='text-[25px]'>{posts[0]?.star}</b>
                {React.createElement(StarIcon, {
                    className: `h-4 w-4 `,
                    strokeWidth: 2,

                })}
            </div>

            <div class="absolute top-[840px] left-[45px] rounded-3xs bg-whitesmoke w-[1020px] h-[850px]" />
            <div class="absolute top-[855px] left-[61px] inline-block w-[984px] h-[776px] text-xl">
                <p class="m-0 text-5xl font-extrabold">Thông tin mô tả</p>
                <p class="m-0 text-5xl font-extrabold">&nbsp;</p>
                <div className='flex flex-col gap-5'>
                    {posts[0]?.description && JSON.parse(posts[0]?.description)?.map((item, index) => {
                        return (
                            <span key={index}>{item}</span>
                        )
                    }
                    )}</div>
                <p class="m-0 text-5xl font-extrabold">&nbsp;</p>
                <div>
                    <div>
                        <p class="m-0 text-5xl font-extrabold">Thông tin liên hệ</p>
                        <table className='w-full'>
                            <tbody className='w-full'>
                                <tr className='w-full'>
                                    <td className='p-2'>Liên hệ:</td>
                                    <td className='p-2'>{posts[0]?.user?.name}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Số điện thoại:</td>
                                    <td className='p-2'>{posts[0]?.user?.phone}</td>
                                </tr>
                                <tr className='w-full'>
                                    <td className='p-2'>Zalo:</td>
                                    <td className='p-2'>{posts[0]?.user?.zalo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
            <div class="absolute top-[1720px] left-[45px] inline-block rounded-3xs bg-whitesmoke w-[1020px] h-[100px] ">
                <div class="m-0 text-5xl  left-[61px] " >
                    <p class="m-0 text-5xl font-extrabold">Địa chỉ </p>

                    <p className='flex'>{posts[0]?.address} </p>
                </div>
            </div>

            <b class="absolute top-[1850px] left-[60px] inline-block w-[214px] h-[23px]">Xem trên bản đồ</b>
            <img
                class="absolute top-[1900px] left-[50px] w-[1011px] h-[334px] object-cover"
                src="/bando.png"
            />

            <div class="absolute top-[2265px] left-[50px] w-[1011px] h-[142.81px]">
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
            </div>


            {/* lấy list */}
            <div className="absolute top-[2500px] left-[50px] w-[984px] h-[449px] overflow-x-auto text-sm">
                <div className="absolute top-[0px] left-[0px] w-[934px] h-[429px]">
                    {/* <div className="absolute  top-[0px] left-[0px] w-[294px] h-[429px]">
                        <div className="absolute top-[338px] left-[7px]">
                            <span class="font-medium">Diện tích:</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            class="absolute bg-blue-200 top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            src="{conheo}"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">{`4.7 triệu/tháng `}</div>
                        <div class="absolute  top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi :</div>
                    </div> */}
                    <div>
                        {posts?.length > 0 && posts.map(item => {
                            return (
                                <Item
                                    key={item?.id}
                                    address={item?.address}
                                    attributes={item?.attributes}
                                    description={item?.description}
                                    // images={JSON.parse(item?.images?.image)}
                                    star={+item?.star}
                                    title={item?.title}
                                    user={item?.user}
                                    id={item?.id}

                                />
                            )
                        })}
                    </div>
                    <div>
                        {posts?.length > 0 && posts.map(item => {
                            return (
                                <Item
                                    key={item?.id}
                                    address={item?.address}
                                    attributes={item?.attributes}
                                    description={item?.description}
                                    // images={JSON.parse(item?.images?.image)}
                                    star={+item?.star}
                                    title={item?.title}
                                    user={item?.user}
                                    id={item?.id}

                                />
                            )
                        })}
                    </div>
                    {/* <div class="absolute top-[0px] left-[320px] w-[294px] h-[429px]">
                        <div class="absolute top-[338px] left-[7px]">
                            <span class="font-medium">Diện tích:</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            class="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            src="/ảnh trọ.png"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>;
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                        <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
                    </div> */}
                    <div class="absolute top-[0px] left-[640px] w-[294px] h-[429px]">
                        <div class="absolute top-[338px] left-[7px]">
                            <span class="font-medium">Diện tích:</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            src="/ảnh trọ.png"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                        <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
                    </div>
                </div>
                <div class="absolute top-[0px] left-[960px] w-[934px] h-[429px]">
                    <div class="absolute top-[0px] left-[0px] w-[294px] h-[429px]">
                        <div class="absolute top-[338px] left-[7px]">
                            <span class="font-medium">{`Diện tích: `}</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            class="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            alt=""
                            src="ảnh trọ.png"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                        <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
                    </div>
                    <div class="absolute top-[0px] left-[320px] w-[294px] h-[429px]">
                        <div class="absolute top-[338px] left-[7px]">
                            <span class="font-medium">{`Diện tích: `}</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            alt=""
                            src="ảnh trọ.png"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                        <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
                    </div>
                    <div class="absolute top-[0px] left-[640px] w-[294px] h-[429px]">
                        <div class="absolute top-[338px] left-[7px]">
                            <span class="font-medium">{`Diện tích: `}</span>
                            <span>300m²</span>
                            <span class="font-medium">{` `}</span>
                        </div>
                        <img
                            className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                            alt=""
                            src="ảnh trọ.png"
                        />
                        <div
                            class="absolute  top-[300px] left-[232px] ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                        <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                            Quận 9, Tp. Hồ Chí Minh
                        </div>
                        <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                        <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                        </div>
                        <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
                    </div>
                </div>
            </div>

            <div className="absolute top-[3050px] left-[61px] w-[294px] h-[429px] text-sm">
                <div className="absolute top-[338px] left-[7px]">
                    <span className="font-medium">{`Diện tích: `}</span>
                    <span>300m²</span>
                    <span className="font-medium">{` `}</span>
                </div>
                <img
                    className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                    alt=""
                    src="/anh tro.png"
                />
                <div
                    class="absolute  top-[300px] left-[232px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                    Quận 9, Tp. Hồ Chí Minh
                </div>
                <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                </div>
                <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
            </div>
            <div className="absolute top-[3050px] left-[381px] w-[294px] h-[429px] text-sm">
                <div className="absolute top-[338px] left-[7px]">
                    <span className="font-medium">{`Diện tích: `}</span>
                    <span>300m²</span>
                    <span className="font-medium">{` `}</span>
                </div>
                <img
                    className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                    alt=""
                    src="/anh tro.png"
                />
                <div
                    class="absolute  top-[300px] left-[232px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                    Quận 9, Tp. Hồ Chí Minh
                </div>
                <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                </div>
                <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
            </div>
            <div className="absolute top-[3050px] left-[701px] w-[294px] h-[429px] text-sm">
                <div className="absolute top-[338px] left-[7px]">
                    <span className="font-medium">{`Diện tích: `}</span>
                    <span>300m²</span>
                    <span className="font-medium">{` `}</span>
                </div>
                <img
                    className="absolute top-[0px] left-[0px] rounded-6xl w-[294px] h-[294px] object-cover"
                    alt=""
                    src="/anh tro.png"
                />
                <div
                    class="absolute  top-[300px] left-[232px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="absolute top-[302px] left-[251px] text-base font-semibold inline-block w-10 h-[17px]">{`4.68 `}</div>
                <div class="absolute top-[304px] left-[7px] text-base font-semibold inline-block w-[189px] h-6">
                    Quận 9, Tp. Hồ Chí Minh
                </div>
                <div class="absolute top-[408px] left-[7px] text-base font-semibold inline-block w-[119px] h-[21px]">4.7 triệu/tháng</div>
                <div class="absolute top-[365px] left-[105px] w-[131px] h-7">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div class="absolute top-[4px] left-[28px] font-medium inline-block w-[103px] h-6">Minh Quốc</div>
                </div>
                <div class="absolute top-[370px] left-[7px] font-medium">Đăng tin bởi:</div>
            </div>
            <b className="absolute top-[2452px] left-[60px] inline-block w-[214px] h-[23px]">
                Dành cho bạn
            </b>
            <b className="absolute top-[2990px] left-[68px] inline-block w-[214px] h-[23px]">
                Tin đăng đã xem
            </b>
            <div className="absolute top-[839px] left-[1097px] w-[336px] h-[351px] text-smi">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[336px] h-[351px]" />
                <img
                    className="absolute top-[55px] left-[117px] rounded-[50%] w-[104px] h-[104px] object-cover"
                    alt=""
                    src="{conheo}"
                />
                <div className="absolute top-[159px] left-[125px] inline-block w-[102.75px]">
                    Được đăng bởi
                </div>
                <b className="absolute top-[179px] left-[80px] text-2xl inline-block text-gray-300 w-[297.86px] h-[26.76px]">
                    {posts[0]?.user?.name}
                </b>
                <div className="absolute top-[206px] left-[109px] w-[118.83px] h-4">
                    <div className="absolute top-[0px] left-[16.09px] inline-block w-[102.75px]">Đang hoạt động</div>
                    <div
                        className="absolute top-[5px] left-[0px] rounded-8xs w-[8.3px] h-2 bg-green-600"
                    />
                </div>
                <div className="absolute top-[242px] left-[17px] w-[304px] h-10 text-2xl text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumseagreen w-[304px] h-10" />

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
                    <div className="absolute top-[3px] left-[95.48px] w-[106.9px] h-8">
                        <b className="absolute top-[8px] left-[39.44px] inline-block w-[67.46px]">
                            Nhắn Zalo
                        </b>
                        <img
                            className=" top-[0px] left-[0px] rounded-3xs w-[35px] h-8 object-cover"
                            alt=""
                            src="{iconzl}"
                        />
                    </div>
                </div>
            </div>
            <div class="absolute top-[3520px] left-[60px] text-gray-200 inline-block w-[1056px] h-[214px]">
                Quý vị đang xem nội dung tin rao "Chuyên cho thuê căn hộ Vinhomes Grand
                Park Quận 9 giá rẻ nhất thị trường" - Mã tin 34114001. Mọi thông tin,
                nội dung liên quan tới tin rao này là do người đăng tin đăng tải và chịu
                trách nhiệm. Batdongsan.com.vn luôn cố gắng để các thông tin được hữu
                ích nhất cho quý vị tuy nhiên Batdongsan.com.vn không đảm bảo và không
                chịu trách nhiệm về bất kỳ thông tin, nội dung nào liên quan tới tin rao
                này. Trường hợp phát hiện nội dung tin đăng không chính xác, Quý vị hãy
                thông báo và cung cấp thông tin cho Ban quản trị Batdongsan.com.vn theo
                Hotline 19001881 để được hỗ trợ nhanh và kịp thời nhất.
            </div>



        </div >

    )
}
export default Details