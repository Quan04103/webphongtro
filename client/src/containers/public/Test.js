import React, { useState } from "react"
import { InputReadOnly, InputFormv2, Button } from '../../components'
import tt from '../../assets/tt.png'
import { useSelector } from 'react-redux'
import { apiUploadImages, apiUpdateUser } from '../../services'
import {
  FiDollarSign
} from "react-icons/fi"
import {
  BsArrowLeftShort,
  BsFillPersonPlusFill,
  BsFillDatabaseFill
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,

} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import {
  Dropdown,
  Ripple,
  Input,
  initTE
} from "tw-elements";

const Test = () => {
  initTE({ Dropdown, Ripple, Input });
  const { currentData } = useSelector(state => state.user)
  const [invalidFields, setInvalidFields] = useState([])
  const [open, setOpen] = useState(true);
  const [payload, setPayload] = useState({
    name: currentData?.name || '',
    avata: currentData?.avatar,
    email: currentData?.email || '',
    fbUrl: currentData?.fbUrl || '',
    zalo: currentData?.zalo || ''
  })
  const handleUploadFile = async (e) => {
    const image = e.target.files[0]
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
    const response = await apiUploadImages(formData)
    if (response.status === 200) {
      setPayload(prev => ({
        ...prev,
        avata: response?.data.secure_url
      }))
    }

  }
  const handleSubmit = async () => {
    // const invalidcounter = validate(payload, setInvalidFields)
    // const response = await apiUpdateUser(payload)
    // console.log(response)
  }
  const Menus = [
    { title: "Quản lí tin đăng" },
    { title: "Sửa thông tin cá nhân", icon: <BsFillPersonPlusFill /> },
    { title: "Nạp tiền vào tài khoản", icon: <FiDollarSign /> },
    { title: "Lịch sử nạp tiền", icon: < BsFillDatabaseFill /> },
    { title: "Lịch sử thanh toán", icon: <AiOutlineBarChart /> },
  ];
  return (

    // HEADER
    <div>
      <nav class="bg-blue-200" w-96>
        <div class="mx-auto w-4xl px-2 sm:px-6 lg:px-20 ">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-14 w-auto" src="https://adina.com.vn/wp-content/uploads/2021/08/logo-StayHome-hinh-ngoi-nha-1024x683.jpg" alt=""></img>
              </div>
              <div class="hidden sm:ml-40 py-4 sm:block">
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                  <nav class="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
                    <ol class="list-reset flex">

                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="relative ml-5 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 " data-te-dropdown-ref>
              <div class="relative ml-3" data-te-dropdown-ref >
                <button
                  class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"

                  data-te-dropdown-toggle-ref="true"
                  aria-expanded="false">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    class="rounded-full h-12 w-12"
                    alt="Avatar"
                    loading="lazy" />
                  <span class="w-2 pl-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul class="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2"
                  data-te-dropdown-menu-ref>
                  <li>
                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref>
                      <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        alt="jane avatar"></img>
                      <div class="mx-1">
                        <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                        <h1 class="text-sm text-gray-500 dark:text-gray-400">Ma thanh vien:</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                  </li>
                  <li class="min-w-max">
                    <button href="#" class="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-sky-400 rounded-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path class="group-hover:text-white" stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>

                      <span class="group-hover:text-white text-black">Trang chủ</span>
                    </button>
                  </li>
                  <li class="min-w-max">
                    <button href="" class="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-sky-400 rounded-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" class="group-hover:text-white" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>

                      <span class="group-hover:text-white text-black">Tin yêu thích</span>
                    </button>
                  </li>
                  <li class="min-w-max">
                    <button href="" class="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-sky-400 rounded-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" class="group-hover:text-white" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                      </svg>
                      <span class="group-hover:text-white text-black">Thông báo</span>
                    </button>
                  </li>
                  <li class="min-w-max">
                    <button href="" class="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-sky-400 rounded-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" class="group-hover:text-white" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                      <span class="group-hover:text-white text-black">Liên hệ</span>
                    </button>
                  </li>
                  <li class="min-w-max">
                    <button href="" class="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-sky-400 rounded-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" class="group-hover:text-white" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>
                      <span class="group-hover:text-white text-black">Đăng xuất</span>
                    </button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* SIDEBAR */}
      <body>
        <div className="flex">
          <div className={` bg-blue-300   h-screen p-5 pt-9 rounded-r-xl rounded-x-xl  ${open ?
            "w-72" : "w-20"} duration-300 relative `}>
            <BsArrowLeftShort className={`bg-white
      text-dark-purple text-3xl 
      rounded-full absolute -right-3 top-9 border
      ☐ border-dark-purple cursor-pointer ${!open && "rotate-180"}
      `} onClick={() => setOpen(!open)} />

            <div className="inline-flex">
              <AiFillEnvironment
                className={`bg-amber-300 text-4xl rounded
        cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"
                  }`} />
              <h1 className={`text-white origin-left font-size-xl
          text-2xl duration-300 ${!open && "scale-0"}`}>
                Stay
              </h1>
            </div>
            <ul className="pt-4">
              {Menus.map((menu, index) => (
                <>
                  <li
                    key={index}

                    className={` text-black hover:text-white  hover:bg-sky-400 text-sm flex items-center
        gap-x-4 cursor-pointer p-4 Ohover:bg-light-white
        rounded-md  ${menu.spacing ? "mt-9" : "mt-2"} `}
                  >
                    <span className="text-2xl  block float-left">
                      {menu.icon ? menu.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1
        duration-200 ${!open && "hidden"
                        }`}
                    >
                      {menu.title}
                    </span>
                  </li>
                </>
              ))}
            </ul>
          </div>


          {/* CONTENT */}

          <div className="p-7 w-full h-screen  items-center">
            <h1 className='text-3xl font-medium py-4 h-[69px] flex-none border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-3/5 flex items-center justify-center flex-auto'>
              <div className=' py-6 flex flex-col gap-4 w-full'>
                <InputReadOnly value={`#${currentData?.id?.match(/\d/g).join('')?.slice(0, 6)}` || ''} direction='flex-row' label="Mã thành viên" />
                <InputReadOnly value={currentData?.phone} editPhone direction='flex-row' label="Số điện thoại" />

                <InputFormv2
                  name='name'
                  setValue={setPayload}

                  direction='flex-row'
                  value={payload.name}
                  label='Tên hiển thị' />


                <InputFormv2
                  name='Email'
                  setValue={setPayload}
                  direction='flex-row'


                  label='Email' />


                <InputFormv2
                  name='zalo'
                  setValue={setPayload}
                  direction='flex-row'

                  value={payload.zalo}
                  label='Zalo' />

                <InputFormv2
                  name='fbUrl'
                  setValue={setPayload}
                  direction='flex-row'

                  value={payload.fbUrl}

                  label='Facebook' />
                <div className='flex'>
                  <label className='w-48 flex-none' htmlFor="Password">Mật khẩu</label>
                  <small className='flex-auto text-blue-500 h-12 cursor-pointer'>Đổi mật khẩu</small>
                </div>

                <div className='flex mb-6'>
                  <label className='w-48 flex-none' htmlFor="avatar">Ảnh đại diện</label>
                  <div>
                    <img src={payload.avatar || tt} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
                    <input onChange={handleUploadFile} type="file" className="appearance-none my-4" id="avatar" />
                  </div>
                </div>
                <Button text='Cập nhập'
                  bgColor='bg-blue-600'
                  textColor='text-white'
                  onclick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}
export default Test